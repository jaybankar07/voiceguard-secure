import { analysisRecords, challenges } from "@/data/mockAnalysis";
import { mockAlerts } from "@/data/mockAlerts";
import { mockCalls } from "@/data/mockCalls";
import { mockTransactions } from "@/data/mockTransactions";
import type { AnalysisRecord, CallSession, Transaction, VerificationChallenge } from "@/types/voiceguard";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getCallHistory(): Promise<CallSession[]> { await wait(180); return mockCalls; }
export async function getCallDetails(id: string): Promise<AnalysisRecord> { await wait(160); return analysisRecords[id] ?? analysisRecords["call-attack"]; }
export async function getAlerts() { await wait(160); return mockAlerts; }
export async function getTransactions(): Promise<Transaction[]> { await wait(160); return mockTransactions; }
export async function getTransaction(id: string): Promise<Transaction> { await wait(160); return mockTransactions.find((transaction) => transaction.id === id) ?? mockTransactions[0]; }
export async function analyzeCall(scenario: "safe-call" | "impersonation-attack", onProgress?: (label: string, index: number) => void): Promise<AnalysisRecord> {
  const steps = ["Analyzing voice authenticity", "Checking speaker identity", "Evaluating conversation intent", "Assessing behavioral signals", "Calculating unified risk"];
  for (const [index, label] of steps.entries()) { await wait(420); onProgress?.(label, index); }
  return analysisRecords[scenario === "safe-call" ? "call-safe" : "call-attack"];
}
export async function startChallenge(callId: string, onProgress?: (status: VerificationChallenge["status"]) => void): Promise<VerificationChallenge> {
  const challenge = challenges[callId] ?? challenges["call-attack"];
  for (const status of ["listening", "analyzing", "comparing"] as const) { await wait(850); onProgress?.(status); }
  await wait(480); onProgress?.("complete");
  return { ...challenge, status: "complete" };
}