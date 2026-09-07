export type ScenarioId = "safe-call" | "impersonation-attack";
export type RiskLevel = "trusted" | "warning" | "high" | "critical";
export type CallDecision = "allowed" | "verification" | "blocked";

export interface SpeakerProfile {
  id: string;
  name: string;
  role: string;
  initials: string;
  lastVerified: string;
  status: "verified" | "review";
}

export interface AnalysisSignal {
  label: string;
  value: number;
  displayValue: string;
  status: string;
  tone: RiskLevel;
  detail: string;
}

export interface CallSession {
  id: string;
  scenario: ScenarioId;
  caller: string;
  callerRole: string;
  time: string;
  date: string;
  risk: number;
  riskLevel: RiskLevel;
  intent: string;
  speakerMatch: number;
  decision: CallDecision;
  origin: string;
  channel: string;
  transcript: string;
  transactionId?: string;
}

export interface VoiceAnalysis {
  authenticity: AnalysisSignal;
  speaker: AnalysisSignal;
  intent: AnalysisSignal;
  behavior: AnalysisSignal;
  context: AnalysisSignal;
}

export interface SecurityDecision {
  label: string;
  title: string;
  description: string;
  requiredAction: string;
  tone: RiskLevel;
}

export interface AnalysisRecord {
  call: CallSession;
  signals: VoiceAnalysis;
  decision: SecurityDecision;
  whyFlagged: string[];
  transaction?: Transaction;
}

export interface VerificationChallenge {
  id: string;
  callId: string;
  phrase: string;
  outcome: "passed" | "failed";
  confidence: number;
  status: "ready" | "listening" | "analyzing" | "comparing" | "complete";
}

export interface Transaction {
  id: string;
  amount: string;
  beneficiary: string;
  requestedBy: string;
  status: "blocked" | "held" | "allowed";
  layers: { label: string; status: "passed" | "failed" | "high" | "required" }[];
}

export interface AlertItem {
  id: string;
  severity: "critical" | "high" | "warning" | "info";
  title: string;
  description: string;
  caller: string;
  risk: number;
  time: string;
  callId: string;
}

export interface DashboardMetric {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "flat";
  icon: string;
}