import { useClickOutside } from "../../hooks/clickOutside";
import { useEffect, useState } from "react";
import { TEX } from "react-mlb-logos";

type SideMenuProps = {
  setOpenSideMenu: () => void;
  closing: boolean;
};

export function SideMenu({ setOpenSideMenu, closing }: SideMenuProps) {
  const ref = useClickOutside<HTMLDivElement>(() => handleClose());
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (!closing) setAnimateIn(true);
    else setAnimateIn(false);
  }, [closing]);

  const handleClose = () => {
    setAnimateIn(false);
    setOpenSideMenu();
  };

  return (
    <div className="fixed inset-0 z-10 overflow-hidden">
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-slate-50 bg-opacity-75 transition-opacity duration-300 ${
          animateIn ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        ref={ref}
        className={`bg-white w-80 h-full fixed top-0 left-0 transform transition-transform duration-300 ease-in-out shadow-lg ${
          animateIn ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-center mt-5">
          <TEX size={120} />
        </div>
        <div className="flex flex-col items-start p-10 gap-5  text-3xl">
          <a className="text-black" href="">Scores</a>
          <a className="text-black" href="">Schedule</a>
          <a className="text-black" href="">Stats</a>
          <a className="text-black" href="">Standing</a>
          <a className="text-black" href="">Players</a>
        </div>
      </div>
    </div>
  );
}
