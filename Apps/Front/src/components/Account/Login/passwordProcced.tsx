import { Button } from "../../../Shared/Button";

type PasswordProceedProps = {
  backOnClick?: () => void;
};

export function PasswordProceed({ backOnClick }: PasswordProceedProps) {
  return (
    <div>
      <div className="relative">
        <div className="absolute -top-96 left-5">
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
    </div>
  );
}
