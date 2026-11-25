import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer select-none disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#136B63] active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-[#136B63] text-white shadow-sm hover:bg-[#0E544E] hover:shadow-md",
        navy:
          "bg-[#0F233D] text-white shadow-sm hover:bg-[#193356] hover:shadow-md",
        outline:
          "border border-[#D5CEC2] bg-white text-[#0F233D] hover:bg-[#EFECE4] hover:border-[#BEB5A6]",
        subtle:
          "bg-[#E6F2F0] text-[#0E544E] hover:bg-[#D5EAE6]",
        ghost:
          "text-[#0F233D] hover:bg-[#EFECE4]",
      },
      size: {
        sm: "h-9 px-3.5 text-xs",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { buttonVariants };
