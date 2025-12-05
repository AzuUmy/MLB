import { useNavigate, useRouterState } from "@tanstack/react-router";
import {
  SportsBaseballTwoTone,
  SportsBaseballRounded,
  ScoreboardTwoTone,
  ScoreboardRounded,
  DoNotStepRounded,
  SportsRounded,
} from "@mui/icons-material";

export default function BottomBar() {
  const navigate = useNavigate();
  const {location} = useRouterState();
  const pathname = location.pathname;

  return (
    <div
      className="fixed  bottom-10 left-1/2 transform -translate-x-1/2 
                    bg-blue-950 bg-opacity-50 shadow-lg p-4 rounded-full backdrop-blur-sm "
    >
      <div className="flex gap-2">
        <div
          onClick={() => navigate({to:"/Games"})}
          className={`p-3 rounded-full ${
            pathname === "/Games" ? "bg-blue-600" : "bg-slate-700"
          }`}
        >
          {pathname === "/Games" ? (
            <SportsBaseballRounded
              fontSize="inherit"
              className="!w-[30px] !h-[30px] text-white"
            />
          ) : (
            <SportsBaseballTwoTone
              fontSize="inherit"
              className="!w-[30px] !h-[30px] text-white"
            />
          )}
        </div>
        <div
          onClick={() => navigate({to: "/Score"})}
          className={`p-3 rounded-full ${
            pathname === "/Score" ? "bg-blue-600" : "bg-slate-700"
          }`}
        >
          {pathname === "/Score" ? (
            <ScoreboardRounded
              fontSize="inherit"
              className="!w-[30px] !h-[30px] text-white"
            />
          ) : (
            <ScoreboardTwoTone
              fontSize="inherit"
              className="!w-[30px] !h-[30px] text-white"
            />
          )}
        </div>
        <div className="bg-slate-700 p-3 rounded-full">
          <DoNotStepRounded
            fontSize="inherit"
            className="!w-[30px] !h-[30px] text-white"
          />
        </div>
        <div className="bg-slate-700 p-3 rounded-full">
          <SportsRounded
            fontSize="inherit"
            className="!w-[30px] !h-[30px] text-white"
          />
        </div>
      </div>
    </div>
  );
}
