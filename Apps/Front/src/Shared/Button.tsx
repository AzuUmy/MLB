type buttonProps = {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  state?: boolean;
  onClick?: () => void;
};

export function Button({
  text,
  backgroundColor,
  textColor,
  state,
  onClick,
}: buttonProps) {
  return (
    <button
      className="w-full p-3"
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor || "#ffffff",
        color: textColor || "#000000",
      }}
    >
      {text}
    </button>
  );
}
