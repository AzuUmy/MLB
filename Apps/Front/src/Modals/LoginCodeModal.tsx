import { useEffect, useRef, useState } from "react";
import { Button } from "../Shared/Button";
import { useButtonState } from "../Hooks/buttonState";

export function LoginCode() {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const [tryAgain, setTryAgain] = useState(60);
  const { buttonState, handleButtonState } = useButtonState();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) return;

    e.target.value = value.slice(-1);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  }

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (tryAgain <= 0) {
      handleButtonState("enabled");
      return;
    }
    const interval = setInterval(() => {
      setTryAgain((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [tryAgain]);

  return (
    <div className="flex flex-col justify-center items-start p-5">
      <h1 className="text-xl mb-5 mt-3">Enter Verification Code</h1>

      <span className="text-sm text-slate-500">
        Verify the 6 digits code sent to your email to access the application!
        The code expires in 60 seconds.
      </span>

      <div className="flex justify-center gap-3 mt-6 w-full">
        {Array.from({ length: 6 }).map((_, i) => (
          <input
            key={i}
            maxLength={1}
            type="number"
            inputMode="numeric"
            className="w-12 h-12 border rounded-lg text-center text-xl outline-none focus:border-blue-500"
            ref={(el) => {
              inputsRef.current[i] = el;
            }}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
          />
        ))}
      </div>

      <div className="flex mt-6 text-sm gap-1 text-slate-500">
        <span>Dind't recive the code?</span>
        <span>Try Again in: </span>
        <span>{tryAgain}</span>
        <span>Seconds</span>
      </div>

      <div className="w-full mt-6">
        <Button
          text="Try again"
          backgroundColor={buttonState === "enabled" ? "#000000" : "#f2f4f7"}
          textColor={buttonState === "enabled" ? "#ffffff" : "#9a9ea6"}
          disabled={buttonState !== "enabled"}
          state={buttonState}
          onClick={() => {
            handleButtonState("disabled");
            setTryAgain(60);
          }}
        />
      </div>
    </div>
  );
}
