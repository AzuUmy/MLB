import { Spinner } from "../Loading/Spinner";

type buttonProps = {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  state?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  text,
  backgroundColor,
  textColor,
  state,
  onClick,
  disabled,
}: buttonProps) {
  return (
    <button
      className="
        w-full p-3 rounded-lg
        outline-none focus:outline-none active:bg-transparent
        transition-all duration-300 ease-in-out
      "
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: backgroundColor || "#ffffff",
        color: textColor || "#000000",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {state === "loading" ? (
        <Spinner staticColor="#c9c9c9" spinColor="#000000" />
      ) : (
        text
      )}
    </button>
  );
}
