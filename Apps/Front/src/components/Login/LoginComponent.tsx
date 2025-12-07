import loginWallpaper from "../../Img/login-wallpaper.jpg";
import { Input } from "../../Shared/Input";
import { Button } from "../../Shared/Button";
import { useState } from "react";
import MLBLogo from "../../assets/icon/mlb-logo";

export function LoginComponenet() {
  const [startTransition, setStartTransition] = useState(false);
  const [showForm, setShowForm] = useState(false);

  function handleStart() {
    setStartTransition(true);
    setTimeout(() => {
      setShowForm(true);
    }, 1000);
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div
        className={`
          absolute top-0 left-0 h-full w-full 
          transition-transform duration-1000 ease-in-out
          ${startTransition ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <div className="absolute top-[55%] left-6 w-[50%]">
            <h1 className="text-white font-extrabold bg-red-600 pl-5 pt-2 pb-2">EXPERIENCE THE BEST OF BASEBALL</h1>
        </div>
        <img
          src={loginWallpaper}
          alt="Login wallpaper"
          className="h-full w-full object-cover"
        />
      </div>

      {!startTransition && (
        <div className="fixed z-50 bottom-5 left-0 right-0 p-6">
          <Button
            text="Connect to discover more"
            backgroundColor="#003cff"
            textColor="#ffffff"
            onClick={handleStart}
          />
        </div>
      )}

      {showForm && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-4 px-4 animate-fadeIn">
          <MLBLogo />
          <Input
            type="email"
            placeholder="Insert your Email"
            backgroundColor="#edeefa"
          />
        </div>
      )}
    </div>
  );
}
