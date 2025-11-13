type contextProps = {
  showContext: boolean;
  onClose?: () => void;
  header?: string | undefined;
};

export function Context({ showContext, header, onClose }: contextProps) {
  if (!showContext) return null;

  return (
    <div className="relative">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-50 bg-opacity-75 z-10"
      />
      <div className="fixed bottom-0 left-0 bg-white w-full h-80 p-1 shadow-[0_-1px_100px_rgba(0,0,0,0.2)] z-20 rounded-t-3xl">
        <h2>{header}</h2>
      </div>
    </div>
  );
}
