export interface Penalty {
  id: string;
  vehicleReg: string;
  location: string;
  issueDate: string;
  entryTime: string;
  exitTime: string | null;
  freeTimeMinutes: number;
  exceededMinutes: number;
  amount: number;
  reducedAmount: number;
  status: "unpaid" | "paid" | "pending" | "appealed";
  evidenceImages: string[];
}

export const mockPenalties: Penalty[] = [
  {
    id: "PCN-2025-001234",
    vehicleReg: "AB12CDE",
    location: "Main Parking Zone A",
    issueDate: "2025-05-01",
    entryTime: "09:15",
    exitTime: "12:45",
    freeTimeMinutes: 120,
    exceededMinutes: 45,
    amount: 85.0,
    reducedAmount: 42.5,
    status: "unpaid",
    evidenceImages: [],
  },
  {
    id: "PCN-2025-001235",
    vehicleReg: "XY99ABC",
    location: "Retail Centre Car Park B",
    issueDate: "2025-04-20",
    entryTime: "14:30",
    exitTime: "17:15",
    freeTimeMinutes: 120,
    exceededMinutes: 30,
    amount: 70.0,
    reducedAmount: 35.0,
    status: "paid",
    evidenceImages: [],
  },
  {
    id: "PCN-2025-001236",
    vehicleReg: "LM34NOP",
    location: "Hospital Visitor Parking",
    issueDate: "2025-04-25",
    entryTime: "08:00",
    exitTime: null,
    freeTimeMinutes: 60,
    exceededMinutes: 90,
    amount: 100.0,
    reducedAmount: 50.0,
    status: "pending",
    evidenceImages: [],
  },
  {
    id: "PCN-2025-001237",
    vehicleReg: "RS56TUV",
    location: "Residential Complex Parking",
    issueDate: "2025-04-15",
    entryTime: "19:00",
    exitTime: "23:30",
    freeTimeMinutes: 120,
    exceededMinutes: 60,
    amount: 85.0,
    reducedAmount: 42.5,
    status: "appealed",
    evidenceImages: [],
  },
];

export function findPenalty(
  vehicleReg: string,
  penaltyId: string
): Penalty | undefined {
  const normalizedReg = vehicleReg.replace(/\s+/g, "").toUpperCase();
  return mockPenalties.find(
    (p) =>
      p.vehicleReg === normalizedReg &&
      p.id.toLowerCase() === penaltyId.toLowerCase()
  );
}

export function getPenaltyById(id: string): Penalty | undefined {
  return mockPenalties.find(
    (p) => p.id.toLowerCase() === id.toLowerCase()
  );
}
