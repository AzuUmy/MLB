type InputProps = {
  type: string;
  placeholder?: string;
  backgroundColor?: string;
};

export function Input({ type, placeholder, backgroundColor }: InputProps) {
  return (
    <input
      className={`p-3 w-full rounded-lg`}
      style={{ backgroundColor: backgroundColor || "#ffffff" }}
      type={type}
      placeholder={placeholder}
    />
  );
}
