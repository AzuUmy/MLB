import { GameDay } from "../components/GameDay/GameDayComponent";
import { useQuery } from "@apollo/client/react";
import type {
  ScheduleGamesQuery,
  ScheduleGamesQueryVariables,
} from "../api/graphql/generated/graphql";
import { ScheduleGamesDocument } from "../api/graphql/queries/scheduleGamesQuery";
import type { ScheduleGamesSeries } from "@my-mlb/shared";
import { ScheduleGames } from "../components/GameDay/ScheduleGames";

export function Games() {
  const { data, loading, error } = useQuery<
    ScheduleGamesQuery,
    ScheduleGamesQueryVariables
  >(ScheduleGamesDocument, {
    variables: {
      startDate: "2025-01-01",
      endDate: "2025-11-01",
    },
  });

  return (
    <div>
      <GameDay gameToday={data?.scheduleGames as ScheduleGamesSeries[]} />
      <ScheduleGames
        allScheduleGames={data?.scheduleGames as ScheduleGamesSeries[]}
      />
    </div>
  );
}
