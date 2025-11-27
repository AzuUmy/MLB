type SkeletonProps = {
  height: number | string;
  width: number | string;
  rounded?: number | string;
  animate?: boolean;
  className?: string;
};

export function Skeleton({
  height,
  width,
  rounded = 8,
  animate = true,
  className = "",
}: SkeletonProps) {
  const normalize = (v: number | string) =>
    typeof v === "number" ? `${v}px` : v;

  return (
    <div
      role="status"
      aria-busy="true"
      className={`relative overflow-hidden bg-gray-200 ${className}`}
      style={{
        height: normalize(height),
        width: normalize(width),
        borderRadius: normalize(rounded),
      }}
    >
      {animate && (
        <div className="absolute inset-0 -translate-x-full shimmer" />
      )}
    </div>
  );
}

const style = document.createElement("style");
style.textContent = `
  .shimmer {
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.6) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: skeleton-shimmer 1.5s ease-in-out infinite;
  }

  @keyframes skeleton-shimmer {
    0% {
      transform: translateX(-100%);
    }
    60% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
if (
  typeof document !== "undefined" &&
  !document.head.querySelector("style[data-skeleton]")
) {
  style.setAttribute("data-skeleton", "true");
  document.head.appendChild(style);
}
