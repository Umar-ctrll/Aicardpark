interface BadgeProps {
  children: React.ReactNode;
  variant?: "purple" | "default";
  className?: string;
}

export default function Badge({
  children,
  variant = "purple",
  className = "",
}: BadgeProps) {
  const base =
    "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-[0.06em] font-body";
  const variants = {
    purple:
      "bg-[rgba(124,58,237,0.15)] border border-[rgba(124,58,237,0.3)] text-[#A78BFA]",
    default: "bg-purple-tint text-purple-deep",
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
