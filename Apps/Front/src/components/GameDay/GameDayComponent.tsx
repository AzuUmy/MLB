import { Series } from "../../utils/Dictionary";
import * as MLBLogos from "react-mlb-logos";
import type { ScheduleGamesSeries } from "@my-mlb/shared";

type GamesTodayProps = {
  gameToday?: ScheduleGamesSeries[] | undefined;
};

export function GameDay({ gameToday }: GamesTodayProps) {
  const today = new Date();
  const todayString = today.toISOString().split("T")[0];

  const todaysGamesWithSerie = gameToday
    ?.map((serie) => {
      const todaysGames = serie.games.filter((game) => {
        const gameDate = new Date(Number(game.scheduled))
          .toISOString()
          .split("T")[0];
        return gameDate === todayString;
      });
      return { series: serie.series, games: todaysGames };
    })
    .filter((s) => s.games && s.games.length > 0);

  const getLogo = (abbr: string | undefined | null) => {
    if (!abbr) return null;
    const LogoComponent = (MLBLogos as any)[abbr.toUpperCase()];
    return typeof LogoComponent === "function" ? (
      <LogoComponent className="w-8 h-8" />
    ) : null;
  };

  if (todaysGamesWithSerie != undefined && todaysGamesWithSerie?.length > 0)
    return (
      <div className="mt-10">
        <div>
          <h2 className="text-left mb-2 ml-2 font-bold">Match Day</h2>
          <div className="bg-blue-950 h-48 w-full rounded-xl">
            {todaysGamesWithSerie?.length ? (
              todaysGamesWithSerie.map((todaysGame) => (
                <div>
                  <div>
                    {todaysGame.games.map((game) => (
                      <div>
                        <div>{game.home.name}</div>
                        <div>{game.away.name}</div>
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
      </div>
    );
}
