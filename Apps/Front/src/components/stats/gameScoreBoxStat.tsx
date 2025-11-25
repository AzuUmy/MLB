import type { Game } from "@my-mlb/shared";

type gameScoreBoxProps = {
  gamesScoreBox?: Game | undefined;
};

export function GameBoxScoreStats({ gamesScoreBox }: gameScoreBoxProps) {
  const cellBase = "flex justify-center";
  const cellWidth = "w-[18px] sm:w-[24px]";
  const gap = "gap-1 sm:gap-2";

  console.log(gamesScoreBox);

  return (
    <div className="p-1 w-full overflow-x-auto">
      <div className="border-2 border-grey-500 rounded-2xl p-1 w-full min-w-[320px]">
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
                          score?.hits ?? (
                            <div className="h-3 w-3 p-1 border-2 border-black rounded-full "></div>
                          )
                        ) : (
                          <div className="h-3 w-3 p-1 rounded-full bg-black"></div>
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

            <div className={`w-full flex justify-center ${gap}`}>
              {Array.from({ length: 11 }).map((_, inningIndex) => {
                const inningNum = inningIndex + 1;
                const awayInning = gamesScoreBox?.away?.scoring?.[inningIndex];
                const awayRuns = awayInning?.runs ?? 0;
                const homeInning = gamesScoreBox?.home?.scoring?.[inningIndex];
                const homeRuns = homeInning?.runs ?? 0;

                const totalRunsThisInning = awayRuns + homeRuns;
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
                  label = runnersOn === 0 ? "HR" : `${runnersOn + 1}-RUN HR`;
                } else if (event?.hitter_outcome === "aS") {
                  label =
                    inningNum >= 10 && gamesScoreBox?.final?.inning_half === "T"
                      ? "WOFF SF"
                      : "SF";
                } else if (hasScoring) {
                  label =
                    totalRunsThisInning > 1
                      ? `${totalRunsThisInning} runs`
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
                          <span className="text-[9px] sm:text-[10px] text-gray-700 mt-0.5 whitespace-nowrap">
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
    </div>
  );
}
