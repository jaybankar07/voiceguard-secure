import { cn } from "@/lib/utils";
import { RiskBadge } from "./GlassCard";
import type { RiskLevel } from "@/types/voiceguard";

const colors: Record<RiskLevel, string> = { trusted: "var(--success)", warning: "var(--warning)", high: "var(--high-risk)", critical: "var(--danger)" };
export function RiskScore({ score, tone, compact = false }: { score: number; tone: RiskLevel; compact?: boolean }) {
  const radius = compact ? 34 : 76;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  return <div className={cn("flex items-center", compact ? "gap-3" : "flex-col gap-5")}><div className={cn("relative shrink-0", compact ? "size-[82px]" : "size-48")}><svg viewBox={compact ? "0 0 82 82" : "0 0 176 176"} className="size-full -rotate-90"><circle cx={compact ? 41 : 88} cy={compact ? 41 : 88} r={radius} fill="none" stroke="var(--muted)" strokeWidth={compact ? 5 : 8} /><circle cx={compact ? 41 : 88} cy={compact ? 41 : 88} r={radius} fill="none" stroke={colors[tone]} strokeWidth={compact ? 5 : 8} strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} className="transition-all duration-1000" /></svg><div className="absolute inset-0 flex flex-col items-center justify-center"><span className={cn("font-semibold tracking-tight", compact ? "text-lg" : "text-5xl")}>{score}</span>{!compact && <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">risk score</span>}</div></div>{compact && <div><p className="text-xs text-muted-foreground">Unified risk</p><RiskBadge tone={tone}>{tone === "trusted" ? "Allowed" : tone === "critical" ? "Critical" : "Review"}</RiskBadge></div>}</div>;
}