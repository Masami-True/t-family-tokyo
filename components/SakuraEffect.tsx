"use client";

const petals = [
  { size: 12, left: "5%", delay: 0, duration: 12 },
  { size: 10, left: "15%", delay: 3, duration: 15 },
  { size: 14, left: "30%", delay: 1, duration: 11 },
  { size: 8, left: "50%", delay: 5, duration: 14 },
  { size: 11, left: "65%", delay: 2, duration: 13 },
  { size: 9, left: "80%", delay: 4, duration: 16 },
  { size: 13, left: "92%", delay: 6, duration: 12 },
];

function PetalSVG({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C12 2 4 8 4 14C4 18 7.5 22 12 22C16.5 22 20 18 20 14C20 8 12 2 12 2Z"
        fill="#F4B4C6"
        opacity="0.6"
      />
      <path
        d="M12 5C12 5 8 9 8 13C8 16 9.5 18 12 18C14.5 18 16 16 16 13C16 9 12 5 12 5Z"
        fill="#FDE8EF"
        opacity="0.4"
      />
    </svg>
  );
}

export default function SakuraEffect() {
  return (
    <div className="fixed inset-0 z-[45] pointer-events-none overflow-hidden">
      {petals.map((petal, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: petal.left,
            top: "-20px",
            animation: `sakura-fall ${petal.duration}s ease-in-out ${petal.delay}s infinite, sakura-sway ${petal.duration * 0.6}s ease-in-out ${petal.delay}s infinite`,
          }}
        >
          <PetalSVG size={petal.size} />
        </div>
      ))}
    </div>
  );
}
