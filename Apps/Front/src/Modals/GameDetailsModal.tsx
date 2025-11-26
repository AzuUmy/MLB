import { useQuery } from "@apollo/client/react";
import type { Games } from "@my-mlb/shared";
import { useState, useEffect } from "react";
import type {
  GamesBoxScoreQuery,
  GamesBoxScoreQueryVariables,
} from "../api/graphql/generated/graphql";
import { GamesBoxScoreDocument } from "../api/graphql/queries/gamesBoxScoreQuery";
import * as MLBLogos from "react-mlb-logos";
import { GameBoxScoreStats } from "../components/Stats/gameScoreBoxStat";

type gamesDetailsProps = {
  details?: Games | undefined;
};

export function GamesDetailsModal({ details }: gamesDetailsProps) {
  const [gamesDetails, setGamesDetails] = useState<Games>();

  useEffect(() => {
    if (details) {
      setGamesDetails(details);
    }
  }, [details]);

  const { data, loading, error } = useQuery<
    GamesBoxScoreQuery,
    GamesBoxScoreQueryVariables
  >(GamesBoxScoreDocument, {
    variables: {
      id: String(gamesDetails?.id),
    },
  });

  const getLogo = (abbr: string | undefined | null) => {
    if (!abbr) return null;
    const LogoComponent = (MLBLogos as any)[abbr.toUpperCase()];
    return typeof LogoComponent === "function" ? <LogoComponent /> : null;
  };

  if (data?.gamesBoxScore === undefined) return <div>Hello error</div>;

  return (
    <div>
      {gamesDetails ? (
        <div>
          <div className="relative">
            <div className="fixed -top-[12.8em] inset-x-1 bg-slate-300 rounded-2xl">
              <div className="flex justify-evenly p-5 items-center">
                <div className="flex flex-col items-center justify-center">
                  <div>{getLogo(gamesDetails.away.abbr)}</div>
                  <h2 className="font-bold text-2xl text-blue-950">
                    {gamesDetails.away.name}
                  </h2>
                  <span>away</span>
                </div>
                <h1 className="font-bold text-blue-950">X</h1>
                <div className="flex items-center flex-col">
                  <div>{getLogo(gamesDetails.home.abbr)}</div>
                  <h2 className="font-extrabold text-2xl text-blue-950">
                    {gamesDetails.home.name}
                  </h2>
                  <span>home</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-1 w-full h-[70vh] max-h-[70vh] overflow-y-auto overflow-x-auto">
            {" "}
            <div className="p-2">
              {data.gamesBoxScore.season_type
                .concat(" ")
                .concat(" ")
                .concat(
                  data?.gamesBoxScore.ps_round
                    .concat(" ")
                    .concat(
                      String(data.gamesBoxScore.season_year) ||
                        "year not founded"
                    )
                    .concat(" ")
                    .concat(" - ")
                    .concat("Score Box")
                    .concat(" ")
                    .concat("Game")
                    .concat(" - ")
                    .concat(data.gamesBoxScore.ps_game)
                )}
            </div>
            <div>
              <GameBoxScoreStats gamesScoreBox={data!.gamesBoxScore} />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
