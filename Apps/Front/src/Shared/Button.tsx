import { Spinner } from "../Loading/Spinner";

type buttonProps = {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  state?: string;
  disabled?: boolean;
  padding?: string;
  rounded?: string;
  onClick?: () => void;
};

export function Button({
  text,
  backgroundColor,
  textColor,
  state,
  onClick,
  disabled,
  padding,
  rounded
}: buttonProps) {
  return (
    <button
      className="
        w-full p-3
        outline-none focus:outline-none active:bg-transparent
        transition-all duration-300 ease-in-out
      "
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: backgroundColor || "#ffffff",
        color: textColor || "#000000",
        WebkitTapHighlightColor: "transparent",
        padding: padding || '0.8em',
        borderRadius: rounded || '0.5em'
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
