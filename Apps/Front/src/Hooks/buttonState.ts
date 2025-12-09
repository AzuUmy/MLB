import { useState } from "react";

export function useButtonState() {
  const [buttonState, setButtonState] = useState<
    "enabled" | "loading" | "disabled"
  >("disabled");

  const handleButtonState = (state: "enabled" | "loading" | "disabled") => {
    setButtonState(state);
  };

  return { buttonState, handleButtonState };
}
