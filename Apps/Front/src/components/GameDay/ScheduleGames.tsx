import { Series } from "../../utils/Dictionary";
import * as MLBLogos from "react-mlb-logos";
import type { ScheduleGamesSeries } from "@my-mlb/shared";

type allScheduleGamesProps = {
  allScheduleGames?: ScheduleGamesSeries[] | undefined;
};

export function ScheduleGames({ allScheduleGames }: allScheduleGamesProps) {
  const getLogo = (abbr: string | undefined | null) => {
    if (!abbr) return null;
    const LogoComponent = (MLBLogos as any)[abbr.toUpperCase()];
    return typeof LogoComponent === "function" ? (
      <LogoComponent width={1} height={1} />
    ) : null;
  };

  return (
    <div>
      <div>
        {allScheduleGames?.length ? (
          allScheduleGames.map((series) => (
            <div className="border-2  border-grey-500 rounded-2xl p-3  mb-3 font-bold">
              <h2 className="text-left">
                {Series[series.series as keyof typeof Series] ?? series.series}
              </h2>

              <div>
                {series.games.map((games) => (
                  <div className="flex flex-row gap-2 items-center text-left">
                    <div>
                      {
                        <div className="flex flex-row items-center">
                          <div className="w-5 scale-50 mr-10">
                            {getLogo(games.away.abbr)}
                          </div>
                          <div>{games.away.abbr}</div>
                        </div>
                      }
                    </div>
                    <span className="text-base ml-4 font-base bg-slate-200 rounded-full w-6 h-6 flex items-center justify-center">
                      @
                    </span>{" "}
                    <div>
                      {
                        <div className="flex flex-row items-center">
                          <div className="w-5 scale-50 mr-10">
                            {getLogo(games.home.abbr)}
                          </div>
                          <div>{games.home.abbr}</div>
                        </div>
                      }
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
