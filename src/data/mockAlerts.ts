import type { AlertItem } from "@/types/voiceguard";

export const mockAlerts: AlertItem[] = [
  { id: "alert-1", severity: "critical", title: "Voice impersonation detected", description: "Caller appears to impersonate Rajiv Mehta and requested a sensitive fund transfer.", caller: "Rajiv Mehta", risk: 94, time: "8 min ago", callId: "call-attack" },
  { id: "alert-2", severity: "high", title: "Speaker mismatch on OTP request", description: "Unknown caller failed speaker verification while requesting a one-time passcode.", caller: "Unknown Caller", risk: 78, time: "36 min ago", callId: "call-otp" },
  { id: "alert-3", severity: "warning", title: "Unusual call origin", description: "A known speaker connected from a new geographic origin. Additional context is recommended.", caller: "Arjun Nair", risk: 22, time: "1 hr ago", callId: "call-vendor" },
  { id: "alert-4", severity: "info", title: "Trusted caller verified", description: "Priya Sharma passed all authenticity checks and the call was allowed.", caller: "Priya Sharma", risk: 12, time: "2 hr ago", callId: "call-safe" },
];