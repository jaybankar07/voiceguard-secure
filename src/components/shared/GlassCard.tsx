import { cn } from "@/lib/utils";

export function GlassCard({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-xl border border-border/70 bg-card/55 shadow-[0_16px_48px_-32px_var(--shadow-color)] backdrop-blur-xl", className)} {...props}>{children}</div>;
}

export function SectionLabel({ children }: { children: React.ReactNode }) { return <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{children}</p>; }

const toneClasses = { trusted: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20", warning: "bg-amber-400/10 text-amber-300 border-amber-400/20", high: "bg-orange-400/10 text-orange-300 border-orange-400/20", critical: "bg-red-400/10 text-red-300 border-red-400/20" };
export function RiskBadge({ tone, children }: { tone: keyof typeof toneClasses; children: React.ReactNode }) { return <span className={cn("inline-flex items-center rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]", toneClasses[tone])}>{children}</span>; }
export function StatusDot({ tone = "trusted" }: { tone?: keyof typeof toneClasses }) { return <span className={cn("size-2 rounded-full", tone === "trusted" ? "bg-emerald-400" : tone === "warning" ? "bg-amber-400" : tone === "high" ? "bg-orange-400" : "bg-red-400")} />; }

export function LoadingState({ label = "Loading security data..." }: { label?: string }) { return <div className="flex min-h-40 items-center justify-center gap-3 text-sm text-muted-foreground"><span className="size-4 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />{label}</div>; }
export function EmptyState({ label }: { label: string }) { return <div className="flex min-h-40 flex-col items-center justify-center text-center text-sm text-muted-foreground"><div className="mb-3 flex size-10 items-center justify-center rounded-full bg-secondary">—</div>{label}</div>; }