import type { ScheduleGamesSeries, Games } from "@my-mlb/shared";
import { useState, useEffect } from "react";

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

  console.log(gamesDetails)

  return (
  <div>
    {gamesDetails ? (
      <div>
            <div>{gamesDetails.away.name}</div>
      </div>    
    ) : (
      <div></div>
    )}
  </div>
);
}
