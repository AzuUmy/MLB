import type React from "react";
import { Series } from "../../utils/Dictionary";
import * as MLBLogos from "react-mlb-logos";


//type GamesTodayProps = {
  //getGameToday: Sche
//}

export function GameDay() {

  const getLogo = (abbr: string | undefined | null) => {
    if (!abbr) return null;
    const LogoComponent = (MLBLogos as any)[abbr.toUpperCase()];
    return typeof LogoComponent === "function" ? (
      <LogoComponent className="w-8 h-8" />
    ) : null;
  };

  return <div>game day</div>;
}
