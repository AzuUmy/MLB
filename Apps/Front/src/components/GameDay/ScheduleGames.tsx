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
      <LogoComponent className="w-8 h-8" />
    ) : null;
  };

  return (
    <div>
      <div>
        {allScheduleGames?.length ? (
          allScheduleGames.map((series) => (
            <div className="border-2  border-grey-500 rounded-2xl p-3  mb-3">
              <h2 className="text-left"> {series.series}</h2>

              <div>
                {series.games.map((games) => (
                  <div className="flex flex-row">
                    <div>{games.away.abbr}</div>
                    <span>@</span>
                    <div>{games.home.abbr}</div>
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
