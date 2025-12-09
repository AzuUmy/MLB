type InputProps = {
  type: string;
  placeholder?: string;
  backgroundColor?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({
  type,
  placeholder,
  backgroundColor,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      className="p-3 w-full rounded-lg"
      style={{ backgroundColor: backgroundColor || "#ffffff" }}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
