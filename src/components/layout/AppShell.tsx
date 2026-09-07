import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, ChevronRight, Command, FileClock, LayoutDashboard, Menu, ScanLine, Settings, ShieldCheck, WalletCards, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const navItems = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { label: "Analyze call", to: "/analyze", icon: ScanLine },
  { label: "Call history", to: "/history", icon: FileClock },
  { label: "Alerts", to: "/alerts", icon: Bell },
  { label: "Transactions", to: "/transactions", icon: WalletCards },
  { label: "Settings", to: "/settings", icon: Settings },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const current = navItems.find((item) => pathname.startsWith(item.to))?.label ?? (pathname.startsWith("/analysis") ? "Security analysis" : "Dynamic verification");

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <aside className={cn("fixed inset-y-0 left-0 z-50 flex w-[252px] flex-col border-r border-border/70 bg-sidebar/90 px-4 py-5 backdrop-blur-2xl transition-transform duration-200 lg:translate-x-0", mobileOpen ? "translate-x-0" : "-translate-x-full")}>
        <div className="flex items-center justify-between px-3">
          <Link to="/dashboard" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_24px_var(--primary-glow)]"><ShieldCheck className="size-5" /></span>
            <span><span className="block font-semibold tracking-tight">VoiceGuard</span><span className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Security intelligence</span></span>
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X /></Button>
        </div>
        <div className="mt-10 flex-1">
          <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Workspace</p>
          <nav className="mt-3 space-y-1" aria-label="Primary navigation">
            {navItems.map(({ label, to, icon: Icon }) => (
              <Link key={to} to={to} onClick={() => setMobileOpen(false)} activeOptions={{ exact: to === "/dashboard" }} activeProps={{ className: "bg-primary/10 text-foreground shadow-[inset_2px_0_0_var(--primary)]" }} className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent/70 hover:text-foreground">
                <Icon className="size-[17px] text-muted-foreground transition-colors group-hover:text-primary" />{label}
              </Link>
            ))}
          </nav>
          <div className="mt-9 px-3"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Protection</p><div className="mt-3 rounded-xl border border-primary/20 bg-primary/[0.06] p-3"><div className="flex items-center justify-between"><span className="text-xs font-medium">System status</span><span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_theme(colors.emerald.400)]" /></div><p className="mt-1 text-[11px] text-muted-foreground">All engines operational</p><div className="mt-3 h-1 overflow-hidden rounded-full bg-muted"><div className="h-full w-[96%] rounded-full bg-primary" /></div><p className="mt-2 text-[10px] text-muted-foreground">99.98% availability</p></div></div>
        </div>
        <div className="border-t border-border/70 px-3 pt-4"><div className="flex items-center gap-3"><div className="flex size-8 items-center justify-center rounded-full bg-secondary text-xs font-semibold">AK</div><div className="min-w-0 flex-1"><p className="truncate text-xs font-medium">Aarav Kapoor</p><p className="truncate text-[11px] text-muted-foreground">Security administrator</p></div><ChevronRight className="size-4 text-muted-foreground" /></div></div>
      </aside>
      {mobileOpen && <button aria-label="Close navigation overlay" className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)} />}
      <div className="lg:pl-[252px]">
        <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-border/60 bg-background/80 px-5 backdrop-blur-xl sm:px-8">
          <div className="flex items-center gap-3"><Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu /></Button><div><p className="text-sm font-medium">{current}</p><p className="hidden text-xs text-muted-foreground sm:block">Monday, 07 September 2026 <span className="mx-1 text-border">/</span> Command center</p></div></div>
          <div className="flex items-center gap-2"><Button variant="outline" size="sm" className="hidden gap-2 border-border/70 bg-card/40 text-muted-foreground sm:flex"><Command className="size-3.5" /> <span>Search</span><kbd className="ml-2 rounded border border-border px-1.5 py-0.5 text-[10px]">⌘ K</kbd></Button><Button variant="ghost" size="icon" className="relative" aria-label="Notifications"><Bell /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-orange-400" /></Button></div>
        </header>
        <main className="mx-auto max-w-[1600px] px-5 py-7 sm:px-8 lg:px-10">{children}</main>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export function PageHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: React.ReactNode }) {
  return <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div>{eyebrow && <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}<h1 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">{title}</h1>{description && <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{description}</p>}</div>{actions && <div className="flex items-center gap-2">{actions}</div>}</div>;
}