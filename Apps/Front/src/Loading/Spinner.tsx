type SpinnerProps = {
  staticColor?: string;
  spinColor?: string;
};

export function Spinner({
  staticColor = "#d1d5db",
  spinColor = "#000000",
}: SpinnerProps) {
  return (
    <div className="flex items-center justify-center">
      <div
        className="
          h-6 w-6 rounded-full 
          border-2
          animate-spin
        "
        style={{
          borderColor: staticColor,
          borderTopColor: spinColor,
        }}
      />
    </div>
  );
}
