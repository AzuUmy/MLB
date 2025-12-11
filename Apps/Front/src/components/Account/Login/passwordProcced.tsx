import { useEffect, useState } from "react";
import { Button } from "../../../Shared/Button";
import { Input } from "../../../Shared/Input";
import { useInputValidation } from "../../../Hooks/userInputValidate";
import { useButtonState } from "../../../Hooks/buttonState";

type PasswordProceedProps = {
  backOnClick?: () => void;
};

export function PasswordProceed({ backOnClick }: PasswordProceedProps) {
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
        <div className="absolute -top-80 left-5">
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

      <div className="w-full pl-5 pr-5 flex flex-col gap-3">
        <Input
          type="password"
          placeholder="Insert your Password"
          backgroundColor="#f2f4f7"
          value={password}
          onChange={onPasswordChange}
        />{" "}
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
    </div>
  );
}
