import { useEffect } from "react";
import { Button } from "../../../Shared/Button";
import { Input } from "../../../Shared/Input";
import { useInputValidation } from "../../../Hooks/userInputValidate";
import { useButtonState } from "../../../Hooks/buttonState";

import BaseballPlayer from "../../../Img/baseball-player.jpg";

type PasswordProceedProps = {
  backOnClick?: () => void;
  email: string;
};

export function PasswordProceed({ backOnClick, email }: PasswordProceedProps) {
  const { buttonState, handleButtonState } = useButtonState();

  const {
    value: password,
    isValid: passwordValid,
    touched: passwordTouched,
    onChange: onPasswordChange,
  } = useInputValidation();

  useEffect(() => {
    if (passwordValid && password.length > 0) {
      handleButtonState("enabled");
    } else {
      handleButtonState("disabled");
    }
  }, [passwordValid, password]);

  return (
    <div className="w-screen">
      <div className="relative">
        <div className="absolute -top-96 left-5 mt-5">
          <Button
            text="Back"
            backgroundColor="#000000"
            textColor="#ffffff"
            padding="1em 1.5em"
            rounded="3em"
            onClick={() => backOnClick && backOnClick()}
          />
        </div>
      </div>

      <h1 className="absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-3xl">
        Wellcome
      </h1>

      <div>
        <div className="absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 p-2 bg-[#f2f4f7] rounded-full overflow-hidden">
          <img
            src={BaseballPlayer}
            alt="Image not found"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-64">
          <span className="font-bold">{email}</span>
          <span className="mt-2">Carlos Samuel</span>
        </div>
      </div>

      <div className="w-full pl-5 pr-5 flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <span className="font-bold">Password</span>
          <Input
            type="password"
            placeholder="Insert your Password"
            backgroundColor="#f2f4f7"
            value={password}
            onChange={onPasswordChange}
          />{" "}
        </div>

        <Button
          text="Login"
          backgroundColor={buttonState === "enabled" ? "#000000" : "#f2f4f7"}
          textColor={buttonState === "enabled" ? "#ffffff" : "#9a9ea6"}
          disabled={buttonState !== "enabled"}
          state={buttonState}
          onClick={() => {
            handleButtonState("loading");
          }}
        />
      </div>
      <div className="flex items-center justify-center gap-1 mt-5">
        <span>Forgot Password?</span>
        <a href="">Recover Password</a>
      </div>
    </div>
  );
}
