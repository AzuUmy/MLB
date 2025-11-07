import { useState } from "react";
import BottomBar from "../components/Nav/Navigation";
import { NavigationTop } from "../components/Nav/Navigation-top";
import { SideMenu } from "../components/Nav/SideMenu";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
   
    setClosing(true);

    setTimeout(() => {
      setOpenSideMenu(false);
      setClosing(false);
    }, 300);
  };

  return (
    <div className="overflow-x-hidden mb-36">
      {(openSideMenu || closing) && (
        <SideMenu closing={closing} setOpenSideMenu={handleClose} />
      )}

      <div
        className={`flex flex-col min-h-screen w-screen p-4 bg-white transition-transform duration-300 ${
          openSideMenu && !closing ? "translate-x-80" : ""
        } ${closing ? "translate-x-0" : ""}`}
      >
        <NavigationTop setOpenSideMenu={setOpenSideMenu} />
        <main className="flex-1">{children}</main>
        <BottomBar />
      </div>
    </div>
  );
}