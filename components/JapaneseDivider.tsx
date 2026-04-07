"use client";

// Seigaiha (青海波) wave pattern divider
export default function JapaneseDivider({ variant = "gold" }: { variant?: "gold" | "dark" }) {
  const color = variant === "gold" ? "#B8972A" : "#FAFAF8";
  const opacity = variant === "gold" ? "0.15" : "0.05";

  return (
    <div className="relative h-12 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Seigaiha wave pattern */}
        {[...Array(20)].map((_, i) => (
          <g key={i} opacity={opacity}>
            <circle
              cx={i * 60 + 30}
              cy="48"
              r="30"
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
            <circle
              cx={i * 60 + 30}
              cy="48"
              r="22"
              fill="none"
              stroke={color}
              strokeWidth="0.8"
            />
            <circle
              cx={i * 60 + 30}
              cy="48"
              r="14"
              fill="none"
              stroke={color}
              strokeWidth="0.6"
            />
          </g>
        ))}
        {/* Second row offset */}
        {[...Array(20)].map((_, i) => (
          <g key={`b-${i}`} opacity={opacity}>
            <circle
              cx={i * 60}
              cy="48"
              r="30"
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
            <circle
              cx={i * 60}
              cy="48"
              r="22"
              fill="none"
              stroke={color}
              strokeWidth="0.8"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
