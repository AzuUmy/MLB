import { useEffect } from "react";
import { Button } from "../../../Shared/Button";
import { Input } from "../../../Shared/Input";
import { useInputValidation } from "../../../Hooks/userInputValidate";
import { useButtonState } from "../../../Hooks/buttonState";
import BaseballPlayer from "../../../Img/baseball-player.jpg";
import { useLazyQuery } from "@apollo/client/react";
import { AuthQueryDocument } from "../../../api/graphql/queries/authQuery";
import type {
  AuthQuery,
  AuthQueryVariables,
} from "../../../api/graphql/generated/graphql";

type PasswordProceedProps = {
  backOnClick?: () => void;
  confirmPasswordOnClick?: () => void;
  resetState?: boolean;
  email: string;
};

export function PasswordProceed({
  backOnClick,
  confirmPasswordOnClick,
  email,
  resetState,
}: PasswordProceedProps) {
  const { buttonState, handleButtonState } = useButtonState();

  const {
    value: password,
    isValid: passwordValid,
    onChange: onPasswordChange,
  } = useInputValidation();

  const [auth, { data, loading }] = useLazyQuery<
    AuthQuery,
    AuthQueryVariables
  >(AuthQueryDocument);

  useEffect(() => {
    if (passwordValid && password.length > 0 && !resetState) {
      handleButtonState("enabled");
      return;
    }

    if (password.length <= 0 && !resetState) {
      handleButtonState("disabled");
      return;
    }

    if (loading) {
      handleButtonState("loading");
      return;
    }

    handleButtonState("loading");
  }, [passwordValid, password, resetState, data]);

  async function validateUserInfo(
    email: string,
    password: string
  ): Promise<void> {
    if (!email || !password) return;
    try {
      const result = await auth({
        variables: {
          email: email,
          password: password,
        },
      });

      if (result.data?.Auth.accessToken) {
        handleButtonState("loading");
        return confirmPasswordOnClick && confirmPasswordOnClick();
      }
    } catch (erro) {
      console.log(erro);
      handleButtonState("disabled");
    }
  }

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
        Welcome
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

      <div className="w-full pl-5 pr-5 flex flex-col gap-3 mt-10">
        <div className="flex flex-col gap-3">
          <span className="font-bold">Password</span>
          <Input
            type="password"
            placeholder="Insert your Password"
            backgroundColor="#f2f4f7"
            value={password}
            onChange={onPasswordChange}
          />
        </div>

        <div></div>

        <Button
          text="Login"
          backgroundColor={buttonState === "enabled" ? "#000000" : "#f2f4f7"}
          textColor={buttonState === "enabled" ? "#ffffff" : "#9a9ea6"}
          disabled={buttonState !== "enabled"}
          state={buttonState}
          onClick={() => {
            handleButtonState("loading");
            validateUserInfo(email, password);
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
