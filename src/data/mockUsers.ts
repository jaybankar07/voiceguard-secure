import type { SpeakerProfile } from "@/types/voiceguard";

export const trustedSpeakers: SpeakerProfile[] = [
  { id: "rajiv", name: "Rajiv Mehta", role: "Chief Financial Officer", initials: "RM", lastVerified: "2 days ago", status: "verified" },
  { id: "priya", name: "Priya Sharma", role: "Chief Operating Officer", initials: "PS", lastVerified: "Today, 08:14", status: "verified" },
  { id: "arjun", name: "Arjun Nair", role: "Head of Treasury", initials: "AN", lastVerified: "Yesterday", status: "verified" },
];