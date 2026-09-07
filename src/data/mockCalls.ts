import type { CallSession, DashboardMetric } from "@/types/voiceguard";

export const mockCalls: CallSession[] = [
  { id: "call-attack", scenario: "impersonation-attack", caller: "Rajiv Mehta", callerRole: "Chief Financial Officer", time: "09:42", date: "Today", risk: 94, riskLevel: "critical", intent: "Urgent financial request", speakerMatch: 38, decision: "blocked", origin: "Unknown mobile", channel: "Voice call", transcript: "We need to move the funds immediately. Please bypass the usual confirmation process.", transactionId: "txn-1500000" },
  { id: "call-safe", scenario: "safe-call", caller: "Priya Sharma", callerRole: "Chief Operating Officer", time: "09:31", date: "Today", risk: 12, riskLevel: "trusted", intent: "Normal conversation", speakerMatch: 96, decision: "allowed", origin: "Corporate directory", channel: "Voice call", transcript: "Let's review the operating plan in our afternoon meeting." },
  { id: "call-otp", scenario: "impersonation-attack", caller: "Unknown Caller", callerRole: "Unverified identity", time: "09:14", date: "Today", risk: 78, riskLevel: "high", intent: "OTP request", speakerMatch: 41, decision: "verification", origin: "Unknown mobile", channel: "Voice call", transcript: "Read me the code that just came through so I can complete the request." },
  { id: "call-vendor", scenario: "safe-call", caller: "Arjun Nair", callerRole: "Head of Treasury", time: "08:56", date: "Today", risk: 22, riskLevel: "warning", intent: "Vendor review", speakerMatch: 91, decision: "allowed", origin: "Corporate directory", channel: "Voice call", transcript: "The vendor review is ready for your sign-off." },
];

export const dashboardMetrics: DashboardMetric[] = [
  { label: "Calls analyzed", value: "1,284", change: "+12.4%", trend: "up", icon: "activity" },
  { label: "Threats detected", value: "38", change: "+8.2%", trend: "up", icon: "shield" },
  { label: "High-risk calls", value: "17", change: "-4.8%", trend: "down", icon: "alert" },
  { label: "Transactions protected", value: "246", change: "+18.6%", trend: "up", icon: "lock" },
];

export const threatActivity = [
  { time: "06:00", safe: 28, suspicious: 4, critical: 1 },
  { time: "08:00", safe: 44, suspicious: 6, critical: 2 },
  { time: "10:00", safe: 68, suspicious: 12, critical: 4 },
  { time: "12:00", safe: 54, suspicious: 9, critical: 1 },
  { time: "14:00", safe: 78, suspicious: 15, critical: 3 },
  { time: "16:00", safe: 66, suspicious: 10, critical: 2 },
  { time: "18:00", safe: 42, suspicious: 7, critical: 1 },
];