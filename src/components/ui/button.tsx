import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "./skeleton";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "success" | "warning" | "danger";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  animate?: boolean;
}

const variantClasses = {
  default: "bg-primary-600 hover:bg-primary-700 text-white shadow-sm hover:shadow-md border border-transparent",
  outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 shadow-sm",
  ghost: "bg-transparent hover:bg-gray-100 text-gray-700 border border-transparent",
  success: "bg-success text-white hover:bg-green-700 shadow-sm hover:shadow-md border border-transparent",
  warning: "bg-warning text-white hover:bg-orange-700 shadow-sm hover:shadow-md border border-transparent",
  danger: "bg-emergency text-white hover:bg-red-700 shadow-sm hover:shadow-md border border-transparent",
};

const sizeClasses = {
  xs: "px-2 py-1 text-xs min-h-[24px]",
  sm: "px-3 py-1.5 text-sm min-h-[32px]",
  md: "px-4 py-2 text-sm min-h-[36px]",
  lg: "px-6 py-3 text-base min-h-[44px]",
  xl: "px-8 py-4 text-lg min-h-[52px]",
};

const disabledClasses = "opacity-50 cursor-not-allowed pointer-events-none";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "default", 
    size = "lg", 
    loading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    animate = true,
    disabled,
    children,
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading;
    
    const buttonContent = (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 ease-in-out",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
          "active:scale-[0.98] disabled:active:scale-100",
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          isDisabled && disabledClasses,
          className
        )}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <LoadingSpinner 
            size={size === 'xs' || size === 'sm' ? 'sm' : 'md'} 
            className="text-current" 
          />
        )}
        
        {!loading && leftIcon && (
          <span className="flex-shrink-0">
            {leftIcon}
          </span>
        )}
        
        {children && (
          <span className={loading ? "opacity-70" : ""}>
            {children}
          </span>
        )}
        
        {!loading && rightIcon && (
          <span className="flex-shrink-0">
            {rightIcon}
          </span>
        )}
      </button>
    );

    if (animate && !isDisabled) {
      return (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {buttonContent}
        </motion.div>
      );
    }

    return buttonContent;
  }
);

Button.displayName = "Button";

// Button group component for related actions
interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export function ButtonGroup({ 
  children, 
  className = "",
  orientation = "horizontal"
}: ButtonGroupProps) {
  return (
    <div
      className={cn(
        "inline-flex",
        orientation === "horizontal" ? "flex-row" : "flex-col",
        "[&>button]:rounded-none [&>button:first-child]:rounded-l-lg [&>button:last-child]:rounded-r-lg",
        orientation === "vertical" && "[&>button:first-child]:rounded-t-lg [&>button:first-child]:rounded-l-none [&>button:last-child]:rounded-b-lg [&>button:last-child]:rounded-r-none",
        "[&>button:not(:first-child)]:border-l-0",
        orientation === "vertical" && "[&>button:not(:first-child)]:border-l [&>button:not(:first-child)]:border-t-0",
        className
      )}
      role="group"
    >
      {children}
    </div>
  );
}

// Icon button variant
interface IconButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'children'> {
  icon: React.ReactNode;
  'aria-label': string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, className, size = "md", ...props }, ref) => {
    const iconSizeClasses = {
      xs: "p-1",
      sm: "p-1.5", 
      md: "p-2",
      lg: "p-3",
      xl: "p-4",
    };

    return (
      <Button
        ref={ref}
        className={cn("!min-h-0 aspect-square", iconSizeClasses[size], className)}
        size={size}
        {...props}
      >
        {icon}
      </Button>
    );
  }
);

IconButton.displayName = "IconButton"; 