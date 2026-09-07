# VoiceGuard Frontend Prototype Plan

## Goal

Replace the starter placeholder with a complete, responsive VoiceGuard cybersecurity command center that demonstrates both the safe-call and voice-impersonation attack journeys using realistic mock data and no backend.

## Product experience

- Build a premium dark enterprise security interface with restrained liquid-glass surfaces, deep charcoal backgrounds, soft borders, high-contrast typography, and semantic risk colors used only for security meaning.
- Add a shared desktop/mobile shell with VoiceGuard branding, primary navigation, system status, notification access, search affordance, and accessible responsive navigation.
- Make the dashboard the first usable screen at `/`, with `/dashboard` available as an equivalent dashboard route.
- Make the attack demo easy to run: choose the impersonation scenario, run staged analysis, land on risk 94 / transaction blocked, start the dynamic challenge, and reach the failed verification state.
- Make the safe demo equally complete: choose the safe scenario, run analysis, land on risk 12 / allowed, and expose the trusted result state.
- Include meaningful loading, empty, error, success, modal, toast, and disabled/processing states rather than dead controls.

## Routes

Create route files for:

- `/` — dashboard entry point
- `/dashboard` — dashboard view
- `/analyze` — guided audio, trusted speaker, and call-context setup
- `/analysis/$id` — risk score, signal breakdown, explainable risk, and security decision
- `/verification/$id` — dynamic challenge with staged mock processing and pass/fail outcome
- `/transactions` — high-risk transaction protection and security-layer status
- `/history` — searchable/filterable call history with details access
- `/alerts` — categorized security alert center with action flows
- `/settings` — risk policy, security action, privacy, and notification controls

Use TanStack Router file-based conventions and typed dynamic navigation. Every content route will define unique page metadata, including title, description, Open Graph title/description, and Twitter card metadata.

## Mock architecture

Create a typed frontend domain model and keep mock data outside page components:

```text
src/
  types/voiceguard.ts
  data/
    mockCalls.ts
    mockAlerts.ts
    mockTransactions.ts
    mockUsers.ts
    mockAnalysis.ts
  services/mockApi.ts
  hooks/useVoiceGuard.ts
  components/
    layout/
    dashboard/
    analysis/
    verification/
    transactions/
    alerts/
    shared/
  routes/
```

- Define interfaces for users, call sessions, speaker profiles, voice/speaker/intent/risk analysis, security decisions, verification challenges, transactions, and alerts.
- Add mock promise-based service methods for analyzing calls, loading history/details/alerts/transactions, starting/submitting a challenge, and simulating analysis progress.
- Represent the safe and attack scenarios as reusable scenario records so the UI can later swap `mockApi.ts` for a real API adapter without changing presentation code.
- Keep all state in React hooks/local component state for this prototype; do not add persistence or server functionality.

## Shared UI and interactions

- Update the root shell and design tokens for the dark VoiceGuard visual system, including responsive layout primitives and reduced-motion-friendly transitions.
- Build reusable primitives for glass surfaces, page headers, metric tiles, risk badges, status indicators, risk score/gauge, signal rows, audio uploader/player, challenge card, transaction card, alert card, filters/data table, dialogs, and empty/loading/error states.
- Use Lucide icons and the existing design-system components for interactive controls. Keep focus rings, labels, semantic landmarks, keyboard access, and mobile-friendly tap targets.
- Add toast feedback for analysis completion, challenge state changes, saved settings, dismiss actions, and other meaningful user actions.

## Screen behavior

### Dashboard

Show overview metrics, a restrained threat activity chart, recent security events, system status, and quick actions into Analyze and the attack demo path.

### Analyze

Provide scenario selection, drag/drop-style audio upload with mock waveform/playback, trusted speaker selection, context/transaction fields, optional transcript, and a staged analysis progress panel. Running analysis navigates to the matching analysis record.

### Analysis

Lead with an animated risk score and decision. Present voice authenticity, speaker verification, intent, behavioral, and context signals, followed by an explainable risk list and clear actions to start verification, verify through a trusted device, escalate, or return home.

### Verification

Show the unpredictable phrase challenge, start/cancel controls, staged listening/analyzing/comparing states, and both mock pass/fail results. Link the failed attack challenge back to the blocked transaction/security decision.

### Transactions

Show the high-risk transfer amount, beneficiary, requester, blocked status, layered checks, and actions for holding, verifying, escalating, or canceling.

### History, Alerts, Settings

Provide realistic searchable/filterable history, alert category views with action buttons, and editable settings with switches/sliders/inputs. Include intentional no-results and processing states.

## Technical notes

- Preserve the existing TanStack Start/Vite/Tailwind setup; do not add React Router or backend infrastructure.
- Use existing installed packages, especially `lucide-react`, `recharts`, Radix-backed UI primitives, and `sonner`; avoid unnecessary dependencies.
- Replace the placeholder index page and update the root metadata so no starter branding remains.
- Do not create database, authentication, AI/ML, external API, SMS/email, banking, or cryptographic verification functionality; all such responses remain clearly simulated in the UI.
- After implementation, validate the key safe and attack flows in the running preview at desktop and mobile widths, confirm every requested route renders, and resolve any build/runtime diagnostics before completion.
