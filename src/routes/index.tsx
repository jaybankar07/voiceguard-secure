import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/dashboard/DashboardPage";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "VoiceGuard — Security Overview" }, { name: "description", content: "Monitor real-time voice security, risk signals, and protected transactions." }, { property: "og:title", content: "VoiceGuard — Security Overview" }, { property: "og:description", content: "Monitor real-time voice security, risk signals, and protected transactions." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: DashboardPage,
});
