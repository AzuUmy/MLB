import { useState } from "react";

export function useInputValidation(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(true);
  const [touched, setTouched] = useState(false);

  function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setValue(newValue);
    setTouched(true);

    if (e.target.type === "email") {
      setIsValid(validateEmail(newValue));
    } else {
      setIsValid(newValue.trim().length > 0);
    }
  }

  return {
    value,
    isValid,
    touched,
    onChange,
  };
}
