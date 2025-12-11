import LoginBackground from "../../../Img/login-wallpaper.jpg";
import { Input } from "../../../Shared/Input";
import { Button } from "../../../Shared/Button";
import { useEffect, useState } from "react";
import MLBLogo from "../../../assets/icon/mlb-logo";
import { useButtonState } from "../../../Hooks/buttonState";
import { useInputValidation } from "../../../Hooks/userInputValidate";
import { PasswordProceed } from "./passwordProcced";

type LoginComponentProps = {
  backOnClick?: () => void;
};

export function LoginComponenet({ backOnClick }: LoginComponentProps) {
  const [startTransition, setStartTransition] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { buttonState, handleButtonState } = useButtonState();
  const [procedToPassword, setProcedToPassword] = useState(false);

  const {
    value: email,
    isValid: emailValid,
    touched: emailTouched,
    onChange: onEmailChange,
  } = useInputValidation();

  useEffect(() => {
    if (emailValid && email.length > 0) {
      handleButtonState("enabled");
    } else {
      handleButtonState("disabled");
    }
  }, [emailValid, email]);

  function handleStart() {
    setStartTransition(true);
    setTimeout(() => {
      setShowForm(true);
    }, 1000);
  }

  if (!procedToPassword)
    return (
      <div className="relative h-screen w-screen overflow-hidden">
        <div
          className={`
          absolute top-0 left-0 h-full w-full 
          transition-transform duration-1000 ease-in-out
          ${startTransition ? "-translate-y-full" : "translate-y-0"}
        `}
        >
          <div className="absolute top-[50%] left-2 w-[55%]">
            <h1 className="text-white font-extrabold pl-5 pt-2 pb-2">
              EXPERIENCE THE BEST OF BASEBALL
            </h1>
          </div>
          <img
            src={LoginBackground}
            alt="Login wallpaper"
            className="h-full w-full object-cover"
          />
        </div>

        {!startTransition && (
          <div className="fixed z-50 bottom-5 left-0 right-0 p-6">
            <Button
              text="Enter to discover more"
              backgroundColor="#000000"
              textColor="#ffffff"
              onClick={handleStart}
            />
          </div>
        )}

        {showForm && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-4 px-4 animate-fadeIn mb-20">
            <div className="origin-center scale-[3] mb-14">
              <MLBLogo />
            </div>

            <div className="flex  flex-col justify-start w-full ml-2 gap-2">
              <h1 className="text-start font-bold text-xl ">Log In</h1>
              <div className="flex gap-1">
                <span className="text-slate-500">
                  By log in you agree to our!
                </span>
                <a href="#">Terms of Use</a>
              </div>
            </div>

            <div className="w-full flex flex-col gap-3 mt-5">
              <span className="font-bold">Email</span>
              <Input
                type="email"
                placeholder="Insert your Email"
                backgroundColor="#f2f4f7"
                value={email}
                onChange={onEmailChange}
              />
              <span className="text-sm text-slate-400">
                we need to validate your email to be abble to log you in
              </span>
              <div className="flex items-center gap-1">
                <span className="text-sm text-slate-400">Forgot Password?</span>
                <a className="text-sm" href="#">
                  Reset Password
                </a>
              </div>
            </div>

            <div className="w-full mt-5">
              <Button
                text="Next"
                backgroundColor={
                  buttonState === "enabled" ? "#000000" : "#f2f4f7"
                }
                textColor={buttonState === "enabled" ? "#ffffff" : "#9a9ea6"}
                disabled={buttonState !== "enabled"}
                onClick={() => {
                  if (buttonState !== "enabled") return;
                  setProcedToPassword(true);
                }}
              />
              <div className="flex items-center justify-center gap-1 mt-8">
                <span className="text-sm text-slate-400">
                  Don't have and account?
                </span>
                <a href="#">Create Account</a>
              </div>
            </div>
            <span className="text-sm text-slate-400 mt-5">
              All rigths are reserved to the respectufull owners.
            </span>
          </div>
        )}
      </div>
    );
  else if (procedToPassword) {
    return <PasswordProceed backOnClick={() => setProcedToPassword(false)} />;
  }
}
