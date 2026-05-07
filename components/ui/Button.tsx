"use client";

import { forwardRef } from "react";
import { Loader2 } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  icon?: React.ReactNode;
  href?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-purple-primary text-white hover:bg-purple-deep shadow-[var(--shadow-purple)] hover:shadow-[0_12px_40px_rgba(124,58,237,0.35)] hover:-translate-y-[1px]",
  secondary:
    "bg-white text-text-primary border border-border-custom hover:border-purple-primary shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:-translate-y-[1px]",
  ghost:
    "bg-transparent text-white border border-dark-border hover:border-purple-primary",
  danger:
    "bg-alert text-white hover:bg-red-600 shadow-[0_4px_16px_rgba(239,68,68,0.3)]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-7 py-4 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      children,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`
          inline-flex items-center justify-center gap-2 font-body font-medium
          rounded-[var(--radius-md)] transition-all duration-200 cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${className}
        `}
        {...props}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : icon ? (
          icon
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
