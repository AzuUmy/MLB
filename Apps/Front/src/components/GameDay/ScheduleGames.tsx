import { Series } from "../../Utils/Dictionary";
import * as MLBLogos from "react-mlb-logos";
import type { ScheduleGamesSeries, Games } from "@my-mlb/shared";
import { Skeleton } from "../../Loading/Skeleton";

type allScheduleGamesProps = {
  allScheduleGames?: ScheduleGamesSeries[] | undefined;
  onGameClick?: (games: Games) => void;
  loading: boolean;
};

export function ScheduleGames({
  allScheduleGames,
  onGameClick,
  loading,
}: allScheduleGamesProps) {
  const getLogo = (abbr: string | undefined | null) => {
    if (!abbr) return null;
    const LogoComponent = (MLBLogos as any)[abbr.toUpperCase()];
    return typeof LogoComponent === "function" ? <LogoComponent /> : null;
  };

  if (loading)
    return (
      <div className="flex flex-col gap-3 ">
        {Array.from({ length: 10 }).map((_) => (
          <Skeleton
            className="opacity-[50%]"
            height="350px"
            width="100%"
            rounded="15px"
          />
        ))}
      </div>
    );

  return (
    <div>
      <div>
        {allScheduleGames?.length ? (
          allScheduleGames.map((series) => (
            <div className="border-2 border-grey-500 rounded-2xl p-5  mb-3 font-bold ">
              <h2 className="text-left text-lg">
                {Series[series.series as keyof typeof Series] ?? series.series}
              </h2>

              <div>
                {series.games.map((games) => (
                  <div>
                    <div className="flex items-end mt-2 gap-1">
                      <span className="text-xs flex justify-start mt-2">
                        {new Date(Number(games.scheduled))
                          .toLocaleString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                            timeZone: "UTC",
                          })
                          .replace(/,/g, " |")
                          .concat(" ")
                          .concat("|")}
                      </span>
                      <span className="text-xs">
                        {"GM".concat(" ").concat(games.ps_game)}
                      </span>
                    </div>

                    <div
                      onClick={() => onGameClick?.(games)}
                      className="flex flex-row gap-2 items-center text-left"
                    >
                      <div>
                        {
                          <div className="flex flex-row items-center">
                            <div className="w-1 h-10 scale-[0.30] mr-7 mb-[16.5px]">
                              {getLogo(games.away.abbr)}
                            </div>
                            <div>{games.away.abbr}</div>
                          </div>
                        }
                      </div>
                      <span className="text-base ml-3 mr-2 font-base bg-slate-200 rounded-full w-6 h-6 flex items-center justify-center">
                        @
                      </span>
                      <div>
                        {
                          <div className="flex flex-row items-center">
                            <div className="w-1 h-10 scale-[0.30] mr-7 mb-[16.5px]">
                              {getLogo(games.home.abbr)}
                            </div>
                            <div>{games.home.abbr}</div>
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
