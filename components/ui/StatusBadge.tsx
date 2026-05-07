type Status = "paid" | "unpaid" | "pending" | "appealed";

const statusConfig: Record<
  Status,
  { label: string; bg: string; text: string }
> = {
  paid: { label: "✓ Paid", bg: "bg-success-tint", text: "text-success" },
  unpaid: { label: "Unpaid", bg: "bg-alert-tint", text: "text-alert" },
  pending: {
    label: "Appeal Pending",
    bg: "bg-warning-tint",
    text: "text-warning",
  },
  appealed: {
    label: "Under Review",
    bg: "bg-[#EFF6FF]",
    text: "text-[#3B82F6]",
  },
};

export default function StatusBadge({ status }: { status: Status }) {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-body ${config.bg} ${config.text}`}
    >
      {config.label}
    </span>
  );
}
