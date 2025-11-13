import { GameDay } from "../components/GameDay/GameDayComponent";
import { useQuery } from "@apollo/client/react";
import type {
  ScheduleGamesQuery,
  ScheduleGamesQueryVariables,
} from "../api/graphql/generated/graphql";
import { ScheduleGamesDocument } from "../api/graphql/queries/scheduleGamesQuery";
import type { ScheduleGamesSeries } from "@my-mlb/shared";
import { ScheduleGames } from "../components/GameDay/ScheduleGames";
import { useState } from "react";
import { Context as GamesDetails } from "../modals/Context";

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

  const [season, setSeason] = useState<string>("postseason");
  const [triggerContex, setTriggerContex] = useState<boolean>(false);

  const handleOpenContext = () => setTriggerContex(true);
  const handleCloseContext = () => setTriggerContex(false);

  function shceduleSeason() {
    switch (season) {
      case "postseason":
        return (
          <div>
            <GameDay gameToday={data?.scheduleGames as ScheduleGamesSeries[]} />
            <ScheduleGames
              allScheduleGames={data?.scheduleGames as ScheduleGamesSeries[]}
              onGameClick={handleOpenContext}
            />
            <GamesDetails
              showContext={triggerContex}
              onClose={handleCloseContext}
            />
          </div>
        );

      case "regular-season":
        return <div>Regular Season</div>;

      case "spring-training":
        return <div>spring training</div>;
    }
  }

  return (
    <div>
      <div className="text-sm flex items-end gap-3 w-[100%] overflow-auto overflow-y-hidden mb-5 pb-2 ">
        <h1
          onClick={() => setSeason("postseason")}
          className={`w-full whitespace-nowrap text-[25px] font-semibold ${
            season === "postseason"
              ? "text-blue-800 text-[2.2rem] transition-all duration-[0.3s] ease-out"
              : "text-black"
          }`}
        >
          Postseason
        </h1>
        <h1
          onClick={() => setSeason("regular-season")}
          className={`w-full whitespace-nowrap text-[25px] font-semibold ${
            season === "regular-season"
              ? "text-blue-800 text-[2.2rem] transition-all duration-[0.3s] ease-out"
              : "text-black"
          }`}
        >
          Regular Season
        </h1>
        <h1
          onClick={() => setSeason("spring-training")}
          className={`w-full whitespace-nowrap text-[25px] font-semibold ${
            season === "spring-training"
              ? "text-blue-800 text-[2.2rem] transition-all duration-[0.3s] ease-out"
              : "text-black"
          }`}
        >
          Spring Training
        </h1>
      </div>
      <div>{shceduleSeason()}</div>
    </div>
  );
}
