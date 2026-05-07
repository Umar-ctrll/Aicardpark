import { mockPenalties } from "@/lib/mock-penalties";

export function generateStaticParams() {
  return mockPenalties.map((p) => ({
    penaltyId: p.id,
  }));
}

export default function PenaltyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
