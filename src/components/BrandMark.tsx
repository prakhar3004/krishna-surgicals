import * as React from "react";

interface BrandMarkProps {
  className?: string;
}

/** Custom geometric medical cross and precision brace emblem for Krishna Surgicals. */
export function BrandMark({ className = "h-10 w-10" }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="44" height="44" rx="12" fill="#0F233D" />
      <rect
        x="3.5"
        y="3.5"
        width="37"
        height="37"
        rx="9.5"
        stroke="#2C8C82"
        strokeOpacity="0.45"
        strokeWidth="1.2"
      />
      {/* Balanced medical cross */}
      <path
        d="M19.2 11.5C19.2 10.6716 19.8716 10 20.7 10H23.3C24.1284 10 24.8 10.6716 24.8 11.5V19.2H32.5C33.3284 19.2 34 19.8716 34 20.7V23.3C34 24.1284 33.3284 24.8 32.5 24.8H24.8V32.5C24.8 33.3284 24.1284 34 23.3 34H20.7C19.8716 34 19.2 33.3284 19.2 32.5V24.8H11.5C10.6716 24.8 10 24.1284 10 23.3V20.7C10 19.8716 10.6716 19.2 11.5 19.2H19.2V11.5Z"
        fill="#E6F2F0"
      />
      {/* Warm care center accent dot */}
      <circle cx="22" cy="22" r="2.6" fill="#136B63" />
    </svg>
  );
}
