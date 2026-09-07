import { CheckCircle2, CircleAlert, ShieldAlert } from "lucide-react";
import { GlassCard, RiskBadge } from "./GlassCard";
import type { AnalysisSignal } from "@/types/voiceguard";

export function SignalRow({ signal }: { signal: AnalysisSignal }) {
  const Icon = signal.tone === "trusted" ? CheckCircle2 : signal.tone === "critical" ? ShieldAlert : CircleAlert;
  return <GlassCard className="p-4"><div className="flex items-start justify-between gap-4"><div className="flex gap-3"><Icon className={signal.tone === "trusted" ? "mt-0.5 size-4 text-emerald-400" : signal.tone === "critical" ? "mt-0.5 size-4 text-red-400" : "mt-0.5 size-4 text-orange-400"} /><div><p className="text-sm font-medium">{signal.label}</p><p className="mt-1 text-xs text-muted-foreground">{signal.detail}</p></div></div><RiskBadge tone={signal.tone}>{signal.status}</RiskBadge></div><div className="mt-4 flex items-center gap-3"><div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted"><div className={signal.tone === "trusted" ? "h-full rounded-full bg-emerald-400" : signal.tone === "critical" ? "h-full rounded-full bg-red-400" : "h-full rounded-full bg-orange-400"} style={{ width: `${signal.value}%` }} /></div><span className="min-w-12 text-right text-xs font-medium">{signal.displayValue}</span></div></GlassCard>;
}