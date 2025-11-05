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
    <div className="flex justify-between align items-center z-10">
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
  );
}
