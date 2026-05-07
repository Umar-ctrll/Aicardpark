import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  variant?: "default" | "dark";
  mono?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      variant = "default",
      mono = false,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    const baseClasses =
      "w-full rounded-[var(--radius-md)] transition-all duration-150 font-body text-base";
    const variantClasses =
      variant === "dark"
        ? "bg-dark-hero border border-dark-border text-white placeholder:text-text-muted px-4 py-3.5 focus:border-purple-primary focus:shadow-[0_0_0_3px_rgba(124,58,237,0.2)]"
        : "bg-white border border-border-custom text-text-primary placeholder:text-text-muted px-4 py-3 focus:border-purple-primary focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]";
    const errorClasses = error
      ? "!border-alert focus:!shadow-[0_0_0_3px_rgba(239,68,68,0.15)]"
      : "";
    const monoClasses = mono
      ? "font-mono text-lg tracking-[0.05em] uppercase"
      : "";

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className={`text-sm font-medium font-body ${
              variant === "dark" ? "text-text-muted" : "text-text-secondary"
            }`}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`${baseClasses} ${variantClasses} ${errorClasses} ${monoClasses} ${className}`}
          {...props}
        />
        {error && (
          <span className="text-xs text-alert font-body">{error}</span>
        )}
        {hint && !error && (
          <span className="text-xs text-text-muted font-body">{hint}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
