import { useQuery } from "@apollo/client/react";
import type { ScheduleGamesSeries, Games } from "@my-mlb/shared";
import { useState, useEffect } from "react";
import type {
  GamesBoxScoreQuery,
  GamesBoxScoreQueryVariables,
} from "../api/graphql/generated/graphql";
import { GamesBoxScoreDocument } from "../api/graphql/queries/gamesBoxScoreQuery";

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

  return (
    <div>
      {gamesDetails ? (
        <div>
          <div>{
            data?.gamesBoxScore.attendance
            }
            </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
