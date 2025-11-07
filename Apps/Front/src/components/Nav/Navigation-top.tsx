import { Menu, AccountCircleRounded } from "@mui/icons-material";
import MLBLogo from "../../assets/icon/mlb-logo";

type NavigationTopProps = {
  setOpenSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavigationTop({ setOpenSideMenu }: NavigationTopProps) {
  function toggleSideMenu() {
    setOpenSideMenu((prev) => !prev);
  }

  return (
    <div className="relative h-12">
 <div className="fixed left-0 top-0 w-full pl-3 pr-3  bg-white bg-opacity-40 flex justify-between align items-center z-10 backdrop-blur-sm">
      <Menu
        onClick={toggleSideMenu}
        className="text-black sm:!h-[30px] sm:!w-[30px] transition-colors duration-300"
        style={{
          WebkitTapHighlightColor: "transparent",
        }}
      />

      <MLBLogo />
      <AccountCircleRounded className="text-black sm:!h-[30px] sm!w-[30px] " />
    </div>
    </div>
   
  );
}
