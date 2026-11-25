import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-tight transition-colors",
  {
    variants: {
      variant: {
        teal: "bg-[#E6F2F0] text-[#0E544E] border border-[#C6E2DD]",
        sand: "bg-[#EFECE4] text-[#42546B] border border-[#DFD8CA]",
        warm: "bg-[#FBF5EB] text-[#8A5A2B] border border-[#ECDAC1]",
        navy: "bg-[#0F233D] text-white",
        outline: "border border-[#D5CEC2] bg-white text-[#42546B]",
      },
    },
    defaultVariants: {
      variant: "sand",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}
