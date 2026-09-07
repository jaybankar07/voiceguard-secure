# VoiceGuard Secure

ROLE

You are a senior frontend architect and UI/UX engineer responsible ONLY for building the frontend of a cybersecurity product called:

VoiceGuard — Real-Time Voice Impersonation Detection & Prevention System

You are NOT responsible for backend development, database development, AI/ML model development, model training, authentication servers, APIs, or deployment infrastructure.

Your responsibility is to build a complete, polished, production-quality frontend prototype that can operate independently using realistic mock data.

PRODUCT CONTEXT

VoiceGuard is a cybersecurity platform designed to detect and prevent AI-powered voice impersonation and social-engineering attacks.

The intended security workflow is:

Live Call / Audio
→ Voice Analysis
→ Speaker Verification
→ Caller Intelligence
→ Linguistic & Behavioural Analysis
→ Intent & Transaction Analysis
→ Unified Risk Score
→ Dynamic Verification
→ Cryptographic Verification
→ Security Decision

The frontend must visually communicate this workflow clearly.

The application should feel like a premium enterprise cybersecurity product, not a generic student dashboard.

PRIMARY OBJECTIVE

Build the complete frontend experience for a hackathon-ready demonstration.

The frontend must:

Look premium.

Be minimalistic.

Be highly polished.

Be responsive.

Be interactive.

Have realistic mock data.

Demonstrate the complete security workflow.

Work WITHOUT a backend.

Use frontend mock services/data where backend responses would eventually be required.

Be structured so the backend can later replace the mock services without redesigning the UI.

The final result must feel like a real cybersecurity SaaS product.

STRICT SCOPE

YOU ARE BUILDING

Frontend UI

Frontend UX

Navigation

Dashboard

Call analysis interface

Audio upload interface

Reference speaker selection/upload interface

Analysis visualization

Risk score visualization

Security decision interface

Dynamic challenge interface

Transaction verification interface

Alerts

Call/session history

Security events

Settings/configuration UI

Responsive layouts

Loading states

Empty states

Error states

Success states

Modal/dialog interactions

Toast notifications

Mock frontend data

Mock frontend service layer

API-ready service abstraction

YOU ARE NOT BUILDING

Backend

FastAPI/Django/Node backend

Database

PostgreSQL

SQLite

MongoDB

Redis

AI models

ML models

Deepfake detection

Speaker verification algorithms

Speech-to-text models

NLP models

LLM integration

Real SMS

Real email

Real banking integration

Real cryptographic transaction validation

Real authentication server

If a feature normally requires backend/AI, simulate its response with mock data.

TECHNOLOGY

Use:

React

Vite

TypeScript

Tailwind CSS

You may use lightweight UI libraries if genuinely useful, but do not introduce unnecessary dependencies.

Recommended:

Lucide React for icons

Recharts for charts

Framer Motion for subtle animations

Do NOT over-engineer the application.

DESIGN DIRECTION

The design language must combine:

Minimalistic Enterprise Cybersecurity + Premium SaaS + Liquid Glass

Think:

Apple-level simplicity

Modern security operations dashboard

Subtle glassmorphism

Premium fintech interface

Dark security command center

Avoid:

Excessive neon

Hacker-style green text

Excessive gradients

Huge glowing effects

Cluttered dashboards

Excessive cards

Gaming UI

Generic Bootstrap dashboard appearance

Excessive animations

The interface should feel sophisticated and trustworthy.

VISUAL SYSTEM

Default theme:

Dark premium interface.

Use:

Deep charcoal/black background

Translucent glass surfaces

Soft borders

Subtle shadows

Controlled blur

High contrast typography

Large whitespace

Small amounts of accent color

Use semantic colors only when meaningful:

Green → Trusted / Safe

Yellow/Amber → Warning

Orange → High Risk

Red → Critical / Blocked

Blue/Violet → System intelligence / neutral accent

Do not make the entire UI colorful.

LIQUID GLASS RULES

Glass components should use:

backdrop blur

translucent backgrounds

subtle borders

soft shadows

low-opacity highlights

Example visual philosophy:

Background
    ↓
Subtle ambient gradient
    ↓
Glass navigation
    ↓
Glass cards
    ↓
Clear typography
    ↓
Minimal semantic accents


Do not turn every element into a glass card.

Use glass strategically.

TYPOGRAPHY

Use a modern sans-serif font.

Prioritize:

readability

hierarchy

compact enterprise layout

large numerical risk indicators

small metadata labels

Risk score should visually dominate the analysis screen.

APPLICATION STRUCTURE

Create the following primary routes:

/
 /dashboard
 /analyze
 /analysis/:id
 /verification/:id
 /transactions
 /history
 /alerts
 /settings


If routing complexity is unnecessary, use React Router.

GLOBAL LAYOUT

Desktop:

┌──────────────────────────────────────────────────────────┐
│ Sidebar       │ Top Bar                                  │
│               ├──────────────────────────────────────────┤
│ Dashboard     │                                          │
│ Analyze       │ Main Content                             │
│ History       │                                          │
│ Alerts        │                                          │
│ Transactions  │                                          │
│ Settings      │                                          │
│               │                                          │
│ System Status │                                          │
└──────────────────────────────────────────────────────────┘


Sidebar:

VoiceGuard logo

Dashboard

Analyze Call

Call History

Alerts

Transactions

Settings

System status

Top bar:

Page title

Search where appropriate

Notification icon

System status

User/profile control

Mobile:

Convert sidebar into a mobile navigation pattern.

PAGE 1 — DASHBOARD

Create a premium cybersecurity overview.

Top section:

Security Overview

Show:

Calls analyzed

Threats detected

High-risk calls

Transactions protected

Detection confidence

Use compact metric cards.

Main visualization:

Real-Time Threat Activity

Show a clean chart representing:

Safe calls

Suspicious calls

Critical calls

Below:

Recent Security Events

Example:

09:42
Potential voice impersonation detected
Caller: Rajiv Mehta
Risk: 87
Action: Verification required

09:31
Trusted caller verified
Caller: Priya Sharma
Risk: 12
Action: Allowed

09:14
Suspicious financial request
Caller: Unknown
Risk: 94
Action: Transaction blocked


Right/secondary panel:

System Status

Show:

Voice Analysis Engine — Ready

Speaker Verification — Ready

Risk Engine — Ready

Security Gateway — Protected

These are ONLY UI representations. Do not implement the actual engines.

PAGE 2 — ANALYZE CALL

This is one of the most important screens.

Design a clear guided workflow.

Header:

Analyze Voice Session

Subtitle:

"Verify caller authenticity before a sensitive action is authorized."

Sections:

Step 1 — Call Audio

Provide:

Drag & drop audio upload

Browse button

Audio file information

Audio waveform-style visualization

Play/pause

Duration

Use mock audio behavior if no actual audio processing exists.

Step 2 — Verify Speaker

Allow:

Select existing trusted identity

Upload reference voice

Display speaker identity

Example:

Trusted Identity
Rajiv Mehta
Chief Financial Officer

Reference voice
Verified
Last verified: 2 days ago


Step 3 — Context

Inputs:

Caller identity

Call origin

Transaction type

Transaction amount

Channel

Optional transcript

Example transaction:

Action:
Fund Transfer

Amount:
₹15,00,000

Context:
Urgent payment request


Analyze Button

Primary CTA:

Run Security Analysis

When clicked:

Do NOT call backend.

Instead simulate the complete analysis pipeline.

Show a polished progress state:

Analyzing voice...
Checking speaker identity...
Evaluating conversation intent...
Assessing behavioral signals...
Calculating impersonation risk...


Use short staged animations.

PAGE 3 — ANALYSIS RESULTS

This is the main demo screen.

Header:

Security Analysis

Show a large unified risk score.

Example:

94
CRITICAL RISK


Use a circular gauge or sophisticated radial visualization.

Below:

Decision

TRANSACTION BLOCKED


Explain why.

RISK BREAKDOWN

Display individual signals:

Voice Authenticity

Synthetic Probability
91%

Status:
HIGH RISK


Speaker Verification

Speaker Match
38%

Status:
MISMATCH


Intent Analysis

URGENT FINANCIAL REQUEST

Status:
HIGH RISK


Behavioral Analysis

Show:

unusual urgency

response pattern anomaly

verification bypass request

Context Risk

Show:

unknown call origin

high-value transaction

unusual transaction timing

EXPLAINABLE RISK

Never show only:

"Risk = 94"

Instead show:

Why was this call flagged?

• Voice shows synthetic-generation indicators
• Speaker similarity is below trusted threshold
• Caller requested an urgent high-value transfer
• Caller attempted to bypass normal verification
• Transaction context increases risk


This is extremely important for judge/demo usability.

SECURITY DECISION PANEL

Show one prominent decision:

CRITICAL RISK

Transaction blocked

Required:
Additional verification


Actions:

Start Dynamic Challenge

Verify Through Trusted Device

Escalate

Return to Dashboard

PAGE 4 — DYNAMIC VERIFICATION

Create a dedicated verification experience.

Title:

Dynamic Identity Challenge

Subtitle:

"AI-generated voices can reproduce known phrases. This challenge uses an unpredictable interaction."

Show challenge:

Challenge #01

Please repeat the following sentence:

"Tomorrow's meeting has moved to the
third floor at 4:30 PM."


Buttons:

Start Challenge

Cancel

After clicking Start:

Show simulated states:

Listening...
Analyzing response...
Comparing response behavior...


Then result:

VERIFICATION FAILED

Confidence: 31%

Identity could not be reliably confirmed.


Alternative success state must also exist in mock data:

VERIFICATION PASSED

Confidence: 96%

Identity confirmed.


Do not actually implement voice analysis.

PAGE 5 — TRANSACTION SECURITY

Create a transaction protection screen.

Example:

High-Risk Transaction

₹15,00,000

Beneficiary:
ABC Holdings

Requested by:
Rajiv Mehta

Security Status:
BLOCKED


Show security layers:

Voice Authenticity       FAILED
Speaker Verification     FAILED
Intent Risk              HIGH
Dynamic Challenge        FAILED
Transaction Attestation  REQUIRED


Primary actions:

Hold Transaction

Verify Identity

Escalate

Cancel

PAGE 6 — CALL HISTORY

Create a searchable security history.

Table/list columns:

Time

Caller

Risk

Intent

Speaker Match

Decision

Status

Example:

Rajiv Mehta      94    Financial Request    38%    Blocked
Priya Sharma     12    Normal                96%    Allowed
Unknown Caller   78    OTP Request           41%    Verification


Include:

Search

Risk filter

Date filter

Status filter

View details

PAGE 7 — ALERTS

Create a premium security alert center.

Categories:

Critical

High

Warning

Informational

Example:

CRITICAL

Voice impersonation detected

Caller appears to impersonate:
Rajiv Mehta

Risk Score:
94

Recommended action:
Block sensitive transaction


Actions:

View analysis

Start verification

Dismiss

PAGE 8 — SETTINGS

Create a polished configuration interface.

Sections:

Risk Policy

Controls:

Warning threshold

High-risk threshold

Critical threshold

Security Actions

Toggles:

Require verification for high-risk calls

Block critical transactions

Enable dynamic challenge

Enable transaction protection

Privacy

Options:

Minimize raw voice retention

Store feature representations only

Anonymize security logs

Notifications

In-app alerts

Email alerts

SMS alerts

These are UI-only settings.

MOCK DATA ARCHITECTURE

Do NOT hardcode mock data directly inside components.

Create something like:

src/
├── data/
│   ├── mockCalls.ts
│   ├── mockAlerts.ts
│   ├── mockTransactions.ts
│   ├── mockUsers.ts
│   └── mockAnalysis.ts
│
├── services/
│   └── mockApi.ts
│
├── components/
├── pages/
├── layouts/
├── hooks/
├── types/
└── utils/


Create TypeScript interfaces for:

User

CallSession

SpeakerProfile

VoiceAnalysis

SpeakerAnalysis

IntentAnalysis

RiskAnalysis

SecurityDecision

VerificationChallenge

Transaction

Alert

MOCK API ABSTRACTION

Even though there is no backend, structure the frontend as if an API exists.

Example:

analyzeCall()
getCallHistory()
getCallDetails()
getAlerts()
getTransaction()
startChallenge()
submitChallenge()


These functions should return mock promises.

Later, the backend team can replace:

mockApi.ts


with:

api.ts


without rewriting the UI.

TWO DEMO SCENARIOS

The frontend MUST include two predefined scenarios.

SCENARIO A — SAFE CALL

Caller:

Rajiv Mehta

Voice authenticity:

96% genuine

Speaker match:

97%

Intent:

Normal conversation

Transaction:

None

Risk:

12

Decision:

ALLOW

SCENARIO B — VOICE IMPERSONATION ATTACK

Caller:

Rajiv Mehta

Voice authenticity:

91% synthetic probability

Speaker match:

38%

Intent:

Urgent financial transfer

Transaction:

₹15,00,000

Behavior:

Verification bypass attempt

Risk:

94

Decision:

BLOCK

Dynamic challenge:

FAILED

Transaction:

BLOCKED

This scenario should be extremely easy to demonstrate.

IMPORTANT UX REQUIREMENT

The entire attack scenario should be navigable in approximately 30–60 seconds.

Example:

Dashboard
→ Analyze Call
→ Select "Voice Impersonation Attack"
→ Run Analysis
→ Risk 94
→ Transaction Blocked
→ Dynamic Challenge
→ Challenge Failed
→ Security Decision

The judge should immediately understand what happened.

ANIMATION REQUIREMENTS

Use subtle animation.

Good:

page transitions

glass hover effects

progress animation

risk gauge animation

modal transitions

button feedback

chart animation

Avoid:

constant floating animations

excessive particle effects

flashy transitions

distracting background motion

Premium means restrained.

RESPONSIVENESS

The application MUST work on:

Desktop

Laptop

Tablet

Mobile

Do not simply shrink the desktop UI.

Adapt:

sidebar

cards

charts

tables

forms

modals

for smaller screens.

ACCESSIBILITY

Implement:

semantic HTML

keyboard navigation

visible focus states

accessible buttons

proper labels

sufficient contrast

ARIA where appropriate

ERROR / LOADING / EMPTY STATES

Every important component must have:

Loading

Analyzing session...


Empty

No security events found.


Error

Unable to analyze this session.
Please try again.


Success

Analysis completed successfully.


Do not leave blank screens.

COMPONENT QUALITY

Build reusable components instead of duplicating markup.

Examples:

RiskScore
RiskBadge
SecurityStatus
GlassCard
MetricCard
AudioUploader
AudioPlayer
AnalysisSignal
SecurityDecision
ChallengeCard
TransactionCard
AlertCard
DataTable
PageHeader
Sidebar
Topbar
Modal
Toast


FRONTEND ARCHITECTURE

Recommended:

src/
├── app/
├── components/
│   ├── layout/
│   ├── dashboard/
│   ├── analysis/
│   ├── verification/
│   ├── transactions/
│   ├── alerts/
│   └── ui/
├── pages/
├── data/
├── services/
├── hooks/
├── types/
├── utils/
└── styles/


Keep business logic separate from presentation.

API CONTRACT EXPECTATION

Do not invent backend functionality.

Create frontend interfaces that anticipate a future backend.

For example:

POST /api/analyze-call
POST /api/verification/challenge
POST /api/verification/submit
GET /api/calls
GET /api/calls/:id
GET /api/alerts
GET /api/transactions


These should NOT actually exist in this frontend task.

Use mock implementations.

SECURITY PRODUCT LANGUAGE

Use professional terminology.

Prefer:

Voice Authenticity

Speaker Verification

Behavioral Analysis

Intent Analysis

Contextual Risk

Unified Risk Score

Security Decision

Dynamic Challenge

Transaction Protection

Verification Required

Transaction Blocked

Avoid childish terminology such as:

Fake Voice Detector

Danger Meter

Hacker Alert

AI Magic

FINAL DEMO REQUIREMENT

Before considering the task complete, verify that the frontend can demonstrate:

SAFE FLOW

Dashboard
→ Analyze
→ Safe Call
→ Analysis
→ Risk 12
→ Allowed

ATTACK FLOW

Dashboard
→ Analyze
→ Impersonation Attack
→ Analysis
→ Risk 94
→ Dynamic Challenge
→ Failed
→ Transaction Blocked

Both flows must work using mock data.

STRICT DEVELOPMENT RULES

Do not build backend.

Do not build database.

Do not train or implement AI/ML.

Do not call external AI APIs.

Do not create unnecessary infrastructure.

Do not over-engineer.

Do not leave placeholder screens.

Do not create dead buttons where an interaction is expected.

Every major button should perform a meaningful frontend action.

Use realistic mock data.

Keep the UI premium and minimal.

Prioritize working end-to-end UX over extra features.

Make the architecture backend-ready.

Do not redesign the product scope.

Do not add unrelated features.

DEFINITION OF DONE

The frontend is complete only when:

npm install works.

npm run dev works.

All routes render.

Navigation works.

Mock data works.

Safe scenario works.

Attack scenario works.

Analysis workflow works.

Dynamic challenge works.

Transaction protection flow works.

Responsive design works.

Loading/error/empty states exist.

UI feels premium.

No backend is required.

No database is required.

No AI/ML service is required.

The code is clean enough for another developer to connect the backend later.

Most importantly:

Do not stop at creating a visual dashboard. Build a complete interactive frontend prototype that tells the entire VoiceGuard security story from analysis to final security decision.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1b35eec0-d993-4eae-b960-8c3bab5b0e7b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
