import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline";
  size?: "lg" | "sm";
}

const variantClasses = {
  default: "bg-blue-600 hover:bg-blue-700 text-white",
  outline: "border border-gray-300 bg-white hover:bg-gray-50",
};

const sizeClasses = {
  lg: "px-6 py-3 text-base",
  sm: "px-3 py-1.5 text-sm",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const v = variant ?? "default";
    const s = size ?? "lg";
    return (
      <button
        ref={ref}
        className={cn(
          "rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition",
          variantClasses[v],
          sizeClasses[s],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button"; 