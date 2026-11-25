"use client";

import React, { useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Shared pointer-tracking wrapper that updates CSS variables `--mx` and `--my`
 * directly on the DOM node for 60fps spotlight hover illumination without React re-renders.
 */
export function SpotlightSurface({
  children,
  className,
  onPointerMove,
  ...props
}: SpotlightSurfaceProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.pointerType === "mouse" && ref.current) {
        const rect = ref.current.getBoundingClientRect();
        ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
      }
      onPointerMove?.(e);
    },
    [onPointerMove]
  );

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn("spotlight-surface", className)}
      {...props}
    >
      {children}
    </div>
  );
}
