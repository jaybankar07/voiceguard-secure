import type { Transaction } from "@/types/voiceguard";

export const mockTransactions: Transaction[] = [
  { id: "txn-1500000", amount: "₹15,00,000", beneficiary: "ABC Holdings", requestedBy: "Rajiv Mehta", status: "blocked", layers: [
    { label: "Voice Authenticity", status: "failed" }, { label: "Speaker Verification", status: "failed" }, { label: "Intent Risk", status: "high" }, { label: "Dynamic Challenge", status: "failed" }, { label: "Transaction Attestation", status: "required" },
  ] },
  { id: "txn-04821", amount: "₹4,82,100", beneficiary: "Northstar Logistics", requestedBy: "Arjun Nair", status: "allowed", layers: [
    { label: "Voice Authenticity", status: "passed" }, { label: "Speaker Verification", status: "passed" }, { label: "Intent Risk", status: "passed" }, { label: "Dynamic Challenge", status: "passed" }, { label: "Transaction Attestation", status: "passed" },
  ] },
];