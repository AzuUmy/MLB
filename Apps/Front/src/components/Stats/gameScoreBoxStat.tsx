import type { Game } from "@my-mlb/shared";

type gameScoreBoxProps = {
  gamesScoreBox?: Game | undefined;
};

export function GameBoxScoreStats({ gamesScoreBox }: gameScoreBoxProps) {
  const cellBase = "flex justify-center";
  const cellWidth = "w-[18px] sm:w-[24px]";
  const gap = "gap-1 sm:gap-2";

  return (
    <div className="p-1 w-full">
      <div className="border-2 rounded-2xl p-1 w-full min-w-[320px]">
        <div className={`flex justify-between p-2 sm:p-3 ${gap}`}>
          <span className="w-[40px] font-bold flex justify-center">P</span>

          <div className={`w-full flex justify-center font-bold ${gap}`}>
            {Array.from({ length: 11 }).map((_, i) => (
              <span key={i} className={`${cellWidth} ${cellBase}`}>
                {i + 1}
              </span>
            ))}
          </div>

          <div className={`flex font-bold ${gap}`}>
            <span className={`${cellWidth} ${cellBase}`}>R</span>
            <span className={`${cellWidth} ${cellBase}`}>H</span>
            <span
              className={`${cellWidth} flex items-center justify-center bg-red-600 h-6 !w-6 text-white rounded-full`}
            >
              E
            </span>
          </div>
        </div>

        <div>
          {(["away", "home"] as const).map((side) => {
            const team = gamesScoreBox?.[side];
            return (
              <div
                key={side}
                className={`flex flex-row justify-between items-center p-2 sm:p-3 ${gap}`}
              >
                <div className="w-[40px] flex justify-center font-bold">
                  {team?.abbr}
                </div>

                <div
                  className={`w-full flex justify-center items-center ${gap}`}
                >
                  {Array.from({ length: 11 }).map((_, index) => {
                    const score = team?.scoring?.[index];
                    const inningExists = index < (team?.scoring?.length ?? 0);

                    return (
                      <div key={index} className={`${cellWidth} ${cellBase}`}>
                        {inningExists ? (
                          score?.runs ?? (
                            <div className="h-3 w-3 border-2 border-black rounded-full" />
                          )
                        ) : (
                          <div className="h-3 w-3 rounded-full bg-black" />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className={`flex ${gap}`}>
                  <div className={`${cellWidth} ${cellBase}`}>{team?.runs}</div>
                  <div className={`${cellWidth} ${cellBase}`}>{team?.hits}</div>
                  <div
                    className={`${cellWidth} flex items-center justify-center bg-red-600 h-6 !w-6 text-white rounded-full`}
                  >
                    {team?.errors}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative mt-2">
          <div className="flex justify-center">
            <div className="w-[40px]" />
            <div className={`w-full flex justify-center items-start ${gap}`}>
              {Array.from({ length: 11 }).map((_, inningIndex) => {
                const inningNum = inningIndex + 1;
                const awayInning = gamesScoreBox?.away?.scoring?.[inningIndex];
                const homeInning = gamesScoreBox?.home?.scoring?.[inningIndex];
                const totalRunsThisInning =
                  (awayInning?.runs ?? 0) + (homeInning?.runs ?? 0);
                const hasScoring = totalRunsThisInning > 0;

                const event =
                  gamesScoreBox?.away?.events?.find(
                    (e) => e.inning === inningNum
                  ) ||
                  gamesScoreBox?.home?.events?.find(
                    (e) => e.inning === inningNum
                  );

                let label = "";
                if (event?.hitter_outcome === "aHR") {
                  const runnersOn =
                    event.runners?.filter((r) => r.starting_base > 0).length ??
                    0;
                  label = runnersOn === 0 ? "HR" : `${runnersOn + 1}RUN HR`;
                } else if (event?.hitter_outcome === "aS") {
                  label =
                    inningNum >= 10 && gamesScoreBox?.final?.inning_half === "T"
                      ? "WOFF SF"
                      : "SF";
                } else if (hasScoring) {
                  label =
                    totalRunsThisInning > 1
                      ? `${totalRunsThisInning} RUNS`
                      : "RUN";
                }

                return (
                  <div
                    key={inningIndex}
                    className={`${cellWidth} ${cellBase} flex flex-col items-center`}
                  >
                    {hasScoring && (
                      <>
                        <span className="text-black font-bold text-lg leading-none">
                          ▲
                        </span>
                        {label && (
                          <span className="text-[10px] sm:text-[10px] text-center leading-tight max-w-[25px] text-gray-700 mt-0.5">
                            {label}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
            <div className={`flex ${gap}`}>
              <div className={`${cellWidth}`} />
              <div className={`${cellWidth}`} />
              <div className={`${cellWidth}`} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t pt-6">
        <div className="space-y-3 text-sm font-medium">
          {Array.from({ length: 12 }).map((_, i) => {
            const inning = i + 1;
            const awayInning = gamesScoreBox?.away?.scoring?.[i];
            const homeInning = gamesScoreBox?.home?.scoring?.[i];
            const runsThisInning =
              (awayInning?.runs ?? 0) + (homeInning?.runs ?? 0);
            if (runsThisInning === 0) return null;

            const event =
              gamesScoreBox?.away?.events?.find((e) => e.inning === inning) ||
              gamesScoreBox?.home?.events?.find((e) => e.inning === inning);
            if (!event) return null;

            const batter = event.runners?.find((r) => r.starting_base === 0);
            const runnersOn =
              event.runners?.filter((r) => r.starting_base > 0) ?? [];

            let playText = "";
            if (event.hitter_outcome === "aHR") {
              const runs = runnersOn.length + 1;
              playText = runs === 1 ? "solo HR" : `${runs}-run HR`;
            } else if (event.hitter_outcome === "aS") {
              const isWalkOff =
                inning >= 9 &&
                gamesScoreBox?.final?.inning_half === "T" &&
                event.inning_half === "T";
              playText = isWalkOff ? "walk-off sac fly" : "sac fly";
            } else {
              playText =
                runsThisInning > 1 ? `${runsThisInning}-run inning` : "scores";
            }

            const awayTotal =
              gamesScoreBox?.away?.scoring
                ?.slice(0, i + 1)
                .reduce((sum, s) => sum + (s?.runs ?? 0), 0) ?? 0;
            const homeTotal =
              gamesScoreBox?.home?.scoring
                ?.slice(0, i + 1)
                .reduce((sum, s) => sum + (s?.runs ?? 0), 0) ?? 0;

            const scoreText =
              awayTotal === homeTotal
                ? `tied ${awayTotal}-${homeTotal}`
                : `${
                    event.inning_half === "T"
                      ? gamesScoreBox?.away?.abbr
                      : gamesScoreBox?.home?.abbr
                  } ${awayTotal}-${homeTotal}`;

            const blownSavePitcher = gamesScoreBox?.pitching?.blown_save?.[0];
            const isBlownSaveHere =
              blownSavePitcher &&
              event.pitcher_id === blownSavePitcher.id &&
              event.inning_half === "B";

            return (
              <div key={inning} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-black" />
                <span className="font-semibold w-48 truncate">
                  {batter?.full_name || "Player"}
                </span>
                <span className="font-bold text-black">{playText}</span>
                <span className="text-xs text-gray-500">
                  ({event.inning_half}
                  {inning})
                </span>
                <span className="ml-auto font-bold text-gray-900">
                  → {scoreText}
                  {isBlownSaveHere
                    ? ` (${blownSavePitcher.preferred_name} BS)`
                    : ""}
                </span>
              </div>
            );
          })}

          <div className="mt-6 pt-5 border-t space-y-2 text-sm flex flex-col items-start">
            <div className="flex flex-wrap gap-x-8 gap-y-1">
              <div>
                <strong>WP:</strong>{" "}
                {gamesScoreBox?.pitching?.win
                  ? `${gamesScoreBox.pitching.win.preferred_name} ${gamesScoreBox.pitching.win.last_name} (${gamesScoreBox.pitching.win.win}-${gamesScoreBox.pitching.win.loss})`
                  : "—"}
              </div>
              {gamesScoreBox?.pitching?.win?.save === 1 && (
                <div>
                  <strong>SV:</strong>{" "}
                  {gamesScoreBox.pitching.win.preferred_name}{" "}
                  {gamesScoreBox.pitching.win.last_name} (1)
                </div>
              )}
            </div>

            <div>
              <strong>LP:</strong>{" "}
              {gamesScoreBox?.pitching?.loss
                ? `${gamesScoreBox.pitching.loss.preferred_name} ${gamesScoreBox.pitching.loss.last_name} (${gamesScoreBox.pitching.loss.win}-${gamesScoreBox.pitching.loss.loss})`
                : "—"}
            </div>

            {gamesScoreBox?.pitching?.blown_save?.length ? (
              <div>
                <strong>Blown Save:</strong>{" "}
                {gamesScoreBox.pitching.blown_save
                  .map(
                    (p) =>
                      `${p.preferred_name} ${p.last_name} (${p.blown_save})`
                  )
                  .join(", ")}
              </div>
            ) : null}

            <div>
              <strong>HR:</strong>{" "}
              {[
                ...(gamesScoreBox?.home?.events ?? []),
                ...(gamesScoreBox?.away?.events ?? []),
              ]
                .filter((e) => e.hitter_outcome === "aHR")
                .map((e) => {
                  const name = e.runners?.find(
                    (r) => r.starting_base === 0
                  )?.preferred_name;
                  return name ? `${name.split(" ").pop()} (1)` : null;
                })
                .filter(Boolean)
                .join(", ") || "None"}
            </div>

            <div>
              <strong>Attendance:</strong>{" "}
              {gamesScoreBox?.attendance
                ? Number(gamesScoreBox.attendance).toLocaleString()
                : "-"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
