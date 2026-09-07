import type { AnalysisRecord, VerificationChallenge } from "@/types/voiceguard";
import { mockCalls } from "./mockCalls";
import { mockTransactions } from "./mockTransactions";

const safe = mockCalls.find((call) => call.id === "call-safe");
const attack = mockCalls.find((call) => call.id === "call-attack");

export const analysisRecords: Record<string, AnalysisRecord> = {
  "call-safe": {
    call: safe ?? mockCalls[1],
    signals: {
      authenticity: { label: "Voice Authenticity", value: 96, displayValue: "96% genuine", status: "TRUSTED", tone: "trusted", detail: "Natural cadence and acoustic profile match the trusted speaker." },
      speaker: { label: "Speaker Verification", value: 97, displayValue: "97% match", status: "VERIFIED", tone: "trusted", detail: "Voiceprint aligns with the enrolled speaker profile." },
      intent: { label: "Intent Analysis", value: 12, displayValue: "Normal conversation", status: "LOW RISK", tone: "trusted", detail: "No sensitive request or social-engineering pattern detected." },
      behavior: { label: "Behavioral Analysis", value: 94, displayValue: "Consistent pattern", status: "NORMAL", tone: "trusted", detail: "Response timing and conversational rhythm are consistent." },
      context: { label: "Contextual Risk", value: 8, displayValue: "Known origin", status: "LOW RISK", tone: "trusted", detail: "Caller originated from a recognized corporate channel." },
    },
    decision: { label: "TRUSTED", title: "Call allowed", description: "The caller passed the security policy with a high-confidence identity match.", requiredAction: "No additional verification required", tone: "trusted" },
    whyFlagged: ["Voice shows strong natural-generation characteristics", "Speaker similarity exceeds the trusted threshold", "Conversation intent is consistent with the caller profile", "Call originated from a recognized corporate channel"],
  },
  "call-attack": {
    call: attack ?? mockCalls[0],
    signals: {
      authenticity: { label: "Voice Authenticity", value: 91, displayValue: "91% synthetic probability", status: "HIGH RISK", tone: "critical", detail: "Synthetic-generation indicators detected in spectral transitions." },
      speaker: { label: "Speaker Verification", value: 38, displayValue: "38% match", status: "MISMATCH", tone: "critical", detail: "Similarity is below the 85% trusted verification threshold." },
      intent: { label: "Intent Analysis", value: 94, displayValue: "Urgent financial request", status: "HIGH RISK", tone: "high", detail: "Urgency and financial request language match known attack patterns." },
      behavior: { label: "Behavioral Analysis", value: 88, displayValue: "Anomalous pattern", status: "SUSPICIOUS", tone: "high", detail: "Verification bypass language and unusual response patterns detected." },
      context: { label: "Contextual Risk", value: 92, displayValue: "High-value transaction", status: "CRITICAL", tone: "critical", detail: "Unknown call origin combined with an unusually timed transfer request." },
    },
    decision: { label: "CRITICAL RISK", title: "Transaction blocked", description: "Multiple identity and intent signals indicate a likely voice impersonation attempt.", requiredAction: "Additional verification required", tone: "critical" },
    whyFlagged: ["Voice shows synthetic-generation indicators", "Speaker similarity is below the trusted threshold", "Caller requested an urgent high-value transfer", "Caller attempted to bypass normal verification", "Transaction context increases risk"],
    transaction: mockTransactions[0],
  },
};

export const challenges: Record<string, VerificationChallenge> = {
  "call-attack": { id: "challenge-attack", callId: "call-attack", phrase: "Tomorrow's meeting has moved to the third floor at 4:30 PM.", outcome: "failed", confidence: 31, status: "ready" },
  "call-safe": { id: "challenge-safe", callId: "call-safe", phrase: "The quarterly review is scheduled for next Tuesday at ten.", outcome: "passed", confidence: 96, status: "ready" },
};