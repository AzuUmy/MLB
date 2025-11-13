import { useEffect, useState } from "react";

type contextProps = {
  showContext: boolean;
  onClose?: () => void;
  header?: string;
};

export function Context({ showContext, header, onClose }: contextProps) {
  const [mounted, setMounted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (showContext) {
      setMounted(true);
      setAnimateIn(false);
      const px = setTimeout(() => setAnimateIn(true), 20);
      return () => clearTimeout(px);
    } else {
      setAnimateIn(false);
      const timeout = setTimeout(() => setMounted(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [showContext]);

  if (!mounted) return null;

  return (
    <div className="relative">
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-slate-50 transition-opacity duration-500 z-10 ${
          animateIn ? "bg-opacity-75" : "bg-opacity-0"
        }`}
      />
      <div
        className={`fixed bottom-0 left-0 bg-white w-full h-auto p-1 rounded-t-3xl shadow-[0_-1px_100px_rgba(0,0,0,0.2)] z-20 transform transition-transform duration-500 ease-in-out ${
          animateIn ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <h2>{header}</h2>
      </div>
    </div>
  );
}
