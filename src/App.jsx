import { useState, useEffect, useRef } from 'react'
import Footer from './components/Footer'
import QuickStart from './components/QuickStart'
import CTA from './components/CTA'
import Tools from './components/Tools'
import GithubIcon from './assets/svgs/GithubIcon'
import AnchorIcon from './assets/svgs/AnchorIcon'

import GITHUB_URL from './url'



function ArrowUpRight({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  )
}

function ArrowRight({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

/* ─── Product card SVG vi`sualizations ────────────────────────────────── */

/** Animated ECG / heartbeat line — represents real-time monitoring */
function MonitorViz() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 190" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="scan-grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#5aafff" stopOpacity="0" />
          <stop offset="50%" stopColor="#5aafff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#5aafff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="line-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#5aafff" stopOpacity="0.1" />
          <stop offset="40%" stopColor="#5aafff" stopOpacity="1" />
          <stop offset="100%" stopColor="#5aafff" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {/* Background grid */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
        <line key={`v${i}`} x1={i * 58} y1="10" x2={i * 58} y2="180" stroke="rgba(90,175,255,0.05)" strokeWidth="1" />
      ))}
      {[0, 1, 2, 3, 4].map(i => (
        <line key={`h${i}`} x1="10" y1={i * 44 + 12} x2="390" y2={i * 44 + 12} stroke="rgba(90,175,255,0.05)" strokeWidth="1" />
      ))}
      {/* ECG path */}
      <path
        d="M0,95 L55,95 L65,95 L75,40 L85,130 L95,95 L155,95 L165,95 L175,52 L185,138 L195,95 L255,95 L265,95 L275,35 L285,145 L295,95 L370,95"
        fill="none"
        stroke="url(#line-fade)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1000"
        strokeDashoffset="0"
      >
        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="2.2s" begin="0.3s" fill="freeze" />
      </path>
      {/* Scanning overlay */}
      <rect x="0" y="0" width="22" height="190" fill="url(#scan-grad)" opacity="0.7">
        <animateTransform attributeName="transform" type="translate" from="-25 0" to="420 0" dur="3s" begin="2.5s" repeatCount="indefinite" />
      </rect>
      {/* Labels */}
      <text x="16" y="180" fill="rgba(90,175,255,0.35)" fontSize="9.5" fontFamily="'JetBrains Mono',monospace">api-gateway · health_loop</text>
      <circle cx="280" cy="35" r="3.5" fill="#fc8181" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.4s" repeatCount="indefinite" />
      </circle>
      <text x="292" y="39" fill="rgba(252,129,129,0.7)" fontSize="9" fontFamily="'JetBrains Mono',monospace">OOM_KILL</text>
    </svg>
  )
}

/** Animated node graph — represents AI investigation */
function InvestigateViz() {
  const edges = [
    { x1: 200, y1: 95, x2: 90, y2: 50 },
    { x1: 200, y1: 95, x2: 310, y2: 50 },
    { x1: 200, y1: 95, x2: 90, y2: 148 },
    { x1: 200, y1: 95, x2: 310, y2: 148 },
  ]
  const satellites = [
    { x: 90, y: 50, label: 'logs' },
    { x: 310, y: 50, label: 'metrics' },
    { x: 90, y: 148, label: 'events' },
    { x: 310, y: 148, label: 'state' },
  ]
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 190" preserveAspectRatio="xMidYMid meet">
      {/* Background grid */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
        <line key={`v${i}`} x1={i * 58} y1="10" x2={i * 58} y2="180" stroke="rgba(90,175,255,0.04)" strokeWidth="1" />
      ))}
      {/* Edges */}
      {edges.map((e, i) => (
        <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
          stroke="rgba(90,175,255,0.35)" strokeWidth="1" strokeDasharray="5 4">
          <animate attributeName="stroke-opacity" values="0.2;0.7;0.2"
            dur={`${1.8 + i * 0.4}s`} repeatCount="indefinite" />
        </line>
      ))}
      {/* Flow particles on edges */}
      {edges.map((e, i) => {
        const mx = (e.x1 + e.x2) / 2, my = (e.y1 + e.y2) / 2
        return (
          <circle key={`p${i}`} cx={e.x1} cy={e.y1} r="2.5" fill="#5aafff" opacity="0.85">
            <animateMotion dur={`${1.4 + i * 0.3}s`} repeatCount="indefinite" begin={`${i * 0.5}s`}>
              <mpath />
            </animateMotion>
            <animate attributeName="cx" values={`${e.x1};${e.x2};${e.x1}`}
              dur={`${1.4 + i * 0.3}s`} repeatCount="indefinite" begin={`${i * 0.5}s`} />
            <animate attributeName="cy" values={`${e.y1};${e.y2};${e.y1}`}
              dur={`${1.4 + i * 0.3}s`} repeatCount="indefinite" begin={`${i * 0.5}s`} />
          </circle>
        )
      })}
      {/* Center node */}
      <circle cx="200" cy="95" r="28" fill="rgba(90,175,255,0.08)" stroke="#5aafff" strokeWidth="1.5">
        <animate attributeName="r" values="26;30;26" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="95" r="18" fill="rgba(90,175,255,0.12)" stroke="rgba(90,175,255,0.4)" strokeWidth="1" />
      <text x="200" y="91" textAnchor="middle" fill="#5aafff" fontSize="9" fontFamily="'JetBrains Mono',monospace" fontWeight="600">MISTRAL</text>
      <text x="200" y="103" textAnchor="middle" fill="#5aafff" fontSize="8" fontFamily="'JetBrains Mono',monospace">AI</text>
      {/* Satellite nodes */}
      {satellites.map((n, i) => (
        <g key={i}>
          <rect x={n.x - 26} y={n.y - 14} width="52" height="28" rx="5"
            fill="rgba(90,175,255,0.07)" stroke="rgba(90,175,255,0.22)" strokeWidth="1">
            <animate attributeName="stroke-opacity" values="0.2;0.6;0.2"
              dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
          </rect>
          <text x={n.x} y={n.y + 4.5} textAnchor="middle"
            fill="rgba(232,237,245,0.7)" fontSize="10" fontFamily="'JetBrains Mono',monospace">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

/** Animated step flow — represents deterministic recovery */
function RecoverViz() {
  const steps = [
    { x: 55, label: 'detect', color: '#5aafff' },
    { x: 155, label: 'guard', color: '#f6e05e' },
    { x: 255, label: 'restart', color: '#5aafff' },
    { x: 355, label: 'verify', color: '#68d391' },
  ]
  return (
    <svg width="100%" height="100%" viewBox="0 0 410 190" preserveAspectRatio="xMidYMid meet">
      {/* Background grid */}
      {[0, 1, 2, 3, 4, 5, 6].map(i => (
        <line key={`v${i}`} x1={i * 68} y1="10" x2={i * 68} y2="180" stroke="rgba(90,175,255,0.04)" strokeWidth="1" />
      ))}
      {/* Connectors */}
      {steps.slice(0, -1).map((s, i) => (
        <g key={i}>
          <line x1={s.x + 38} y1="95" x2={steps[i + 1].x - 38} y2="95"
            stroke="rgba(90,175,255,0.35)" strokeWidth="1.5">
            <animate attributeName="stroke-opacity" values="0.2;0.85;0.2"
              dur={`${1.6 + i * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
          </line>
          {/* Arrow head */}
          <polygon
            points={`${steps[i + 1].x - 38},91 ${steps[i + 1].x - 30},95 ${steps[i + 1].x - 38},99`}
            fill="rgba(90,175,255,0.5)">
            <animate attributeName="fill-opacity" values="0.3;1;0.3"
              dur={`${1.6 + i * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
          </polygon>
          {/* Flow particle */}
          <circle r="3" fill="#5aafff" opacity="0.9">
            <animate attributeName="cx" values={`${s.x + 38};${steps[i + 1].x - 38}`}
              dur={`${1.6 + i * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
            <animate attributeName="cy" values="95;95" dur="1.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.9;0" dur={`${1.6 + i * 0.4}s`}
              repeatCount="indefinite" begin={`${i * 0.3}s`} />
          </circle>
        </g>
      ))}
      {/* Step boxes */}
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={s.x - 38} y="75" width="76" height="40" rx="6"
            fill={`rgba(${s.color === '#68d391' ? '104,211,145' : s.color === '#f6e05e' ? '246,224,94' : '90,175,255'},0.07)`}
            stroke={`${s.color}40`} strokeWidth="1">
            <animate attributeName="stroke-opacity" values="0.25;0.7;0.25"
              dur={`${2.2 + i * 0.5}s`} repeatCount="indefinite" begin={`${i * 0.2}s`} />
          </rect>
          <text x={s.x} y="98" textAnchor="middle"
            fill={i === 3 ? '#68d391' : i === 1 ? '#f6e05e' : 'rgba(232,237,245,0.82)'}
            fontSize="11" fontFamily="'JetBrains Mono',monospace">
            {s.label}
          </text>
          <text x={s.x} y="150" textAnchor="middle"
            fill="rgba(90,175,255,0.3)" fontSize="10" fontFamily="'JetBrains Mono',monospace">
            0{i + 1}
          </text>
        </g>
      ))}
      <text x="20" y="178" fill="rgba(90,175,255,0.3)" fontSize="9" fontFamily="'JetBrains Mono',monospace">
        deterministic_recovery_engine
      </text>
    </svg>
  )
}

/* ─── Animated Dot Grid (CTA section) ────────────────────────────────── */


/* ─── Feature icons ───────────────────────────────────────────────────── */
const FEATURE_ICONS = [
  /* Monitor */
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  /* Investigate */
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
  /* Recover */
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  /* Guardrails */
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
  /* Audit */
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
]

/* ─── Sticky scroll features ──────────────────────────────────────────── */
function StickyFeatures({ githubUrl }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const sentinelRefs = useRef([])

  useEffect(() => {
    const observers = []
    sentinelRefs.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIdx(i)
            setAnimKey(k => k + 1)
          }
        },
        { threshold: 0.5 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const tab = TABS[activeIdx]

  return (
    <section id="features" className="sf-section">
      {/* Section header */}
      <div className="sf-header">
        <span className="section-tag">DockHeal Engine</span>
        <h2 className="section-title">Everything you need to heal containers</h2>
        <p className="section-desc">
          Five interconnected capabilities that take you from noise to resolution — automatically.
        </p>
      </div>

      <div className="sf-body">
        {/* ── Left sticky pane ── */}
        <div className="sf-sticky-wrap">
          <div className="sf-sticky">
            

            {/* Animated content card */}
            <div className="sf-card" key={animKey}>
              <div className="sf-card-icon">
                {FEATURE_ICONS[activeIdx]}
              </div>
              {tab.badge && (
                <span className="sf-badge">
                  <span className="sf-badge-dot" />
                  {tab.badge}
                </span>
              )}
              <h2 className="sf-title">{tab.title}</h2>
              <p className="sf-desc">{tab.desc}</p>
              <p className="sf-detail">{tab.detail}</p>
            </div>
          </div>
        </div>

        {/* ── Right scroll track ── */}
        <div className="sf-scroll-track">
          {TABS.map((t, i) => (
            <div
              key={t.id}
              className="sf-sentinel"
              ref={el => { sentinelRefs.current[i] = el }}
            >
              {/* Feature label in right column */}
              <div className={`sf-trigger-label${i === activeIdx ? ' active' : ''}`}>
                <span className="sf-trigger-name">{t.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


/* ─── Terminal ───────────────────────────────────────────────────────── */
const TERMINAL_LINES = [
  { type: 'prompt', text: '$ docker ps | grep api-gateway' },
  { type: 'output', text: 'api-gateway   Exited (137)   2 min ago' },
  { type: 'prompt', text: '$ # DockHeal detects incident automatically' },
  { type: 'info', text: '[MONITOR]   Incident → ContainerStopped' },
  { type: 'info', text: '[CONTEXT]   Building investigation packet...' },
  { type: 'info', text: '[CONTEXT]   severity_score=85  id=inv-a3f9' },
  { type: 'ai', text: '[AI]        Invoking Mistral investigation...' },
  { type: 'ai', text: '[AI]        Root cause → OOM kill (exit 137)' },
  { type: 'warn', text: '[GUARDRAIL] oom_block_restart → escalating' },
  { type: 'success', text: '[ALERT]     Human-escalation dispatched ✓' },
]

function Terminal() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count < TERMINAL_LINES.length) {
      const t = setTimeout(() => setCount(c => c + 1), 420)
      return () => clearTimeout(t)
    }
  }, [count])

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="tbar-dot" style={{ background: '#fc8181' }} />
        <div className="tbar-dot" style={{ background: '#f6e05e' }} />
        <div className="tbar-dot" style={{ background: '#68d391' }} />
        <span className="terminal-title">dockheal — monitor</span>
      </div>
      <div className="terminal-body">
        {TERMINAL_LINES.slice(0, count).map((line, i) => (
          <div key={i} className={`t-${line.type}`}>{line.text}</div>
        ))}
        {count < TERMINAL_LINES.length && <span className="t-cursor" />}
      </div>
    </div>
  )
}

/* ─── Feature tabs data ───────────────────────────────────────────────── */
const TABS = [
  {
    id: 'monitor',
    label: 'Monitor',
    badge: 'LIVE',
    title: 'Detect issues before they become outages',
    desc: 'DockHeal runs a continuous 30-second health loop and listens to Docker events in real-time. Container exits, OOM kills, crash loops, and healthcheck failures are detected and triaged automatically.',
    detail: 'Works with any Docker setup — standalone containers or full Compose stacks. DockHeal maps Compose dependency graphs so it understands the blast radius of every incident.',
    cta: 'Read the announcement',
  },
  {
    id: 'investigate',
    label: 'Investigate',
    badge: null,
    title: 'AI-powered root-cause analysis with Mistral',
    desc: 'Every incident triggers an AI investigation. DockHeal aggregates container state, logs, metrics, events, and Compose dependency maps into a structured packet, then streams a chain-of-thought RCA live to your dashboard.',
    detail: 'When initial analysis isn\'t sufficient, a deep loop iteratively gathers more evidence via sandboxed tools — fetch_logs, inspect_container, and custom MCP integrations.',
    cta: 'Read the announcement',
  },
  {
    id: 'recover',
    label: 'Recover',
    badge: null,
    title: 'Deterministic recovery that you can trust',
    desc: 'Before any restart, DockHeal runs pre-flight policy checks, enforces cooldown windows, and validates the recovery action against 12 guardrail rules. Then it polls container health for up to 30 seconds to verify success.',
    detail: 'Phase 2 actions — memory updates and image rollbacks — are registered but hard-blocked until you manually enable them, giving you full control over the blast radius.',
    cta: 'Read the announcement',
  },
  {
    id: 'guardrails',
    label: 'Guardrails',
    badge: null,
    title: '12 layers of safety before any action fires',
    desc: 'AI confidence never overrides policy. Every proposed action passes through sandbox validation and 12 independent rule checks: operator locks, OOM blocks, cooldown windows, cascade guards, and stale packet guards.',
    detail: 'POST /lock/{container} instantly freezes all autonomous healing for that container. One API call, immediate effect — no config changes required.',
    cta: 'Read the announcement',
  },
  {
    id: 'audit',
    label: 'Audit',
    badge: null,
    title: 'Every action is logged, explainable, and reversible',
    desc: 'DockHeal maintains a full immutable audit trail of every incident, investigation, guardrail decision, and recovery action. Stream events in real-time over WebSockets or query the REST API.',
    detail: 'Supports Python, TypeScript, and any HTTP client. All AI reasoning is captured and stored alongside the structured incident data for post-incident review.',
    cta: 'Read the announcement',
  },
]

/* ─── Safety cards ────────────────────────────────────────────────────── */
const SAFETY = [
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    label: 'Phase 2 Hard-Block',
    desc: 'Memory updates and image rollbacks are registered but hard-blocked from autonomous execution until manually enabled by the operator.',
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
    label: 'Operator Lock',
    desc: 'POST /lock/{container} instantly freezes all autonomous healing. One API call, immediate effect — no config changes needed.',
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
    label: 'OOM Block',
    desc: 'Restarting an OOM-killed container won\'t fix the root cause. DockHeal blocks the restart and escalates to a human instead.',
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    label: 'Cooldown Window',
    desc: 'Configurable cooldown prevents repeat-restart storms. Default 5 minutes between remediation attempts per container.',
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>,
    label: 'Cascade Guard',
    desc: 'If 3+ Compose siblings are unhealthy simultaneously, single-container action is blocked — likely an infrastructure-level failure.',
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
    label: 'Stale Packet Guard',
    desc: 'Action is blocked if the investigation packet is older than 60s — forces a fresh context rebuild before any non-safe tool runs.',
  },
]

/* ─── API endpoints ───────────────────────────────────────────────────── */
const ENDPOINTS = [
  { method: 'GET', path: '/containers' },
  { method: 'GET', path: '/incidents' },
  { method: 'GET', path: '/containers/metrics' },
  { method: 'POST', path: '/investigate/{name}' },
  { method: 'GET', path: '/investigate/{name}/stream' },
  { method: 'POST', path: '/lock/{name}' },
  { method: 'POST', path: '/unlock/{name}' },
  { method: 'GET', path: '/audit' },
  { method: 'GET', path: '/policies' },
]

const TOOLS = [
  { name: 'inspect_container', risk: 'safe', riskColor: '#68d391', bg: 'rgba(104,211,145,0.1)', phase: 1 },
  { name: 'fetch_logs', risk: 'safe', riskColor: '#68d391', bg: 'rgba(104,211,145,0.1)', phase: 1 },
  { name: 'send_alert', risk: 'safe', riskColor: '#68d391', bg: 'rgba(104,211,145,0.1)', phase: 1 },
  { name: 'restart_container', risk: 'low', riskColor: '#5aafff', bg: 'rgba(90,175,255,0.1)', phase: 1 },
  { name: 'update_memory_limit', risk: 'medium', riskColor: '#f6e05e', bg: 'rgba(246,224,94,0.1)', phase: 2 },
  { name: 'rollback_image', risk: 'high', riskColor: '#fc8181', bg: 'rgba(252,129,129,0.1)', phase: 2 },
]

/* ─── Steps ───────────────────────────────────────────────────────────── */
const STEPS = [
  { step: '01', title: 'Detect', desc: 'Docker events listener and a 30-second background health loop identify incidents: container stops, OOM kills, crash loops, failing healthchecks.' },
  { step: '02', title: 'Aggregate', desc: 'The Operational Context Aggregator builds a structured investigation packet — container state, metrics, logs, events, and Compose dependency maps.' },
  { step: '03', title: 'Recover', desc: 'Deterministic recovery engine attempts a safe restart with pre-flight policy checks, then polls container health for up to 30 seconds to verify success.' },
  { step: '04', title: 'Investigate', desc: 'Mistral AI streams a root-cause analysis to your dashboard. A deep loop runs if confidence is low — gathering additional evidence via sandboxed tools.' },
  { step: '05', title: 'Guard & Escalate', desc: 'Every proposed action passes through sandbox validation and 12 guardrail checks. Blocked actions and escalations are broadcast in real-time via WebSockets.' },
]

/* ─── Pipeline Flowchart ───────────────────────────────────────────────── */
function PipelineFlowchart() {
  const CX = 380, NW = 200, NH = 52, DH = 52
  const y = { start: 20, detect: 110, agg: 220, oom: 330, recover: 450, conf: 560, inv: 680, guard: 790, end: 900 }
  const escBX = CX + 200, escBY = y.oom + DH - 26
  const loopBX = CX - 200 - 148, loopBY = y.conf + DH - 26
  const oomMid = y.oom + DH
  const confMid = y.conf + DH

  function AnimLine({ x1, y1, x2, y2, begin, color = 'rgba(90,175,255,0.45)', marker = 'url(#ab)' }) {
    const len = Math.round(Math.hypot(x2 - x1, y2 - y1)) + 2
    return (
      <line x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={color} strokeWidth="1.5"
        strokeDasharray={len} strokeDashoffset={len}
        markerEnd={marker}>
        <animate attributeName="stroke-dashoffset" from={len} to="0"
          dur="0.55s" begin={`${begin}s`} fill="freeze" />
      </line>
    )
  }

  function AnimPath({ d, begin, color }) {
    return (
      <path d={d} fill="none" stroke={color} strokeWidth="1.5"
        strokeDasharray="800" strokeDashoffset="800" markerEnd="url(#ay)">
        <animate attributeName="stroke-dashoffset" from="800" to="0"
          dur="0.7s" begin={`${begin}s`} fill="freeze" />
      </path>
    )
  }

  function FadeIn({ begin, children }) {
    return (
      <g opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin={`${begin}s`} fill="freeze" />
        {children}
      </g>
    )
  }

  function Node({ cy, label, sub, accent, begin }) {
    const x = CX - NW / 2
    const textColor = accent ? '#5aafff' : '#e8edf5'
    const stroke = accent ? 'rgba(90,175,255,0.6)' : 'rgba(255,255,255,0.1)'
    const fill = accent ? 'rgba(90,175,255,0.1)' : 'rgba(15,17,23,0.9)'
    return (
      <FadeIn begin={begin}>
        <rect x={x} y={cy} width={NW} height={NH} rx="7" fill={fill} stroke={stroke} strokeWidth="1.2" />
        <text x={CX} y={cy + NH / 2 - (sub ? 6 : 0)} textAnchor="middle"
          fill={textColor} fontSize="13" fontWeight="600" fontFamily="Montserrat,sans-serif">{label}</text>
        {sub && <text x={CX} y={cy + NH / 2 + 12} textAnchor="middle"
          fill="rgba(139,155,180,0.7)" fontSize="10" fontFamily="Montserrat,sans-serif">{sub}</text>}
      </FadeIn>
    )
  }

  function Diamond({ cy, label, begin }) {
    const pts = `${CX},${cy} ${CX + DH},${cy + DH} ${CX},${cy + DH * 2} ${CX - DH},${cy + DH}`
    return (
      <FadeIn begin={begin}>
        <polygon points={pts} fill="rgba(246,224,94,0.07)" stroke="rgba(246,224,94,0.55)" strokeWidth="1.2" />
        <text x={CX} y={cy + DH + 4.5} textAnchor="middle"
          fill="#f6e05e" fontSize="11" fontWeight="700" fontFamily="Montserrat,sans-serif">{label}</text>
      </FadeIn>
    )
  }

  function Pill({ cy, label, begin, color }) {
    const pw = 110, ph = 34
    return (
      <FadeIn begin={begin}>
        <rect x={CX - pw / 2} y={cy} width={pw} height={ph} rx={ph / 2}
          fill={`${color}22`} stroke={`${color}66`} strokeWidth="1.3" />
        <text x={CX} y={cy + ph / 2 + 4.5} textAnchor="middle"
          fill={color} fontSize="11" fontWeight="700" letterSpacing="0.08em"
          fontFamily="'JetBrains Mono',monospace">{label}</text>
      </FadeIn>
    )
  }

  function SideBox({ bx, by, label, sub, color, begin }) {
    const bw = 148, bh = 52
    return (
      <FadeIn begin={begin}>
        <rect x={bx} y={by} width={bw} height={bh} rx="6"
          fill={`${color}14`} stroke={`${color}55`} strokeWidth="1.2" />
        <text x={bx + bw / 2} y={by + bh / 2 - (sub ? 6 : 0)} textAnchor="middle"
          fill={color} fontSize="12" fontWeight="600" fontFamily="Montserrat,sans-serif">{label}</text>
        {sub && <text x={bx + bw / 2} y={by + bh / 2 + 12} textAnchor="middle"
          fill={`${color}99`} fontSize="9.5" fontFamily="Montserrat,sans-serif">{sub}</text>}
      </FadeIn>
    )
  }

  function Tag({ x, y: ty, text, anchor = 'start', color, begin }) {
    return (
      <FadeIn begin={begin}>
        <text x={x} y={ty} textAnchor={anchor}
          fill={color} fontSize="10" fontFamily="'JetBrains Mono',monospace">{text}</text>
      </FadeIn>
    )
  }

  return (
    <svg viewBox="0 0 760 960" width="100%"
      style={{ maxWidth: 760, display: 'block', margin: '0 auto' }}
      aria-label="DockHeal pipeline flowchart">
      <defs>
        <marker id="ab" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,1 L7,4 L0,7 Z" fill="rgba(90,175,255,0.65)" />
        </marker>
        <marker id="ar" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,1 L7,4 L0,7 Z" fill="rgba(252,129,129,0.65)" />
        </marker>
        <marker id="ay" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,1 L7,4 L0,7 Z" fill="rgba(246,224,94,0.65)" />
        </marker>
        <marker id="ag" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,1 L7,4 L0,7 Z" fill="rgba(104,211,145,0.65)" />
        </marker>
      </defs>

      {/* ─── Main vertical arrows ─── */}
      <AnimLine x1={CX} y1={y.start + 34} x2={CX} y2={y.detect - 8} begin={0.2} marker="url(#ab)" />
      <AnimLine x1={CX} y1={y.detect + NH} x2={CX} y2={y.agg - 8} begin={0.65} marker="url(#ab)" />
      <AnimLine x1={CX} y1={y.agg + NH} x2={CX} y2={y.oom - 8} begin={1.1} marker="url(#ab)" />
      <AnimLine x1={CX} y1={y.oom + DH * 2} x2={CX} y2={y.recover - 8} begin={1.75} color="rgba(90,175,255,0.45)" marker="url(#ab)" />
      <AnimLine x1={CX} y1={y.recover + NH} x2={CX} y2={y.conf - 8} begin={2.2} marker="url(#ab)" />
      <AnimLine x1={CX} y1={y.conf + DH * 2} x2={CX} y2={y.inv - 8} begin={2.85} marker="url(#ab)" />
      <AnimLine x1={CX} y1={y.inv + NH} x2={CX} y2={y.guard - 8} begin={3.3} marker="url(#ab)" />
      <AnimLine x1={CX} y1={y.guard + NH} x2={CX} y2={y.end - 8} begin={3.75} color="rgba(104,211,145,0.55)" marker="url(#ag)" />

      {/* ─── OOM branch (right → Escalate) ─── */}
      <AnimLine x1={CX + DH} y1={oomMid} x2={escBX - 4} y2={oomMid} begin={1.55} color="rgba(252,129,129,0.6)" marker="url(#ar)" />

      {/* ─── Confidence Low branch (left → deep loop box) ─── */}
      <AnimLine x1={CX - DH} y1={confMid} x2={loopBX + 148 + 4} y2={confMid} begin={2.65} color="rgba(246,224,94,0.6)" marker="url(#ay)" />

      {/* ─── Deep loop path back up to Investigate ─── */}
      <AnimPath
        d={`M${loopBX + 74},${loopBY + 52} L${loopBX + 74},${y.inv + NH / 2} L${CX - NW / 2 - 4},${y.inv + NH / 2}`}
        begin={2.85} color="rgba(246,224,94,0.4)" />

      {/* ─── Labels ─── */}
      <Tag x={CX + DH + 8} y={oomMid - 8} text="YES" color="rgba(252,129,129,0.7)" begin={1.6} />
      <Tag x={CX + 7} y={y.oom + DH * 2 + 16} text="NO" color="rgba(90,175,255,0.6)" begin={1.8} />
      <Tag x={CX - DH - 8} y={confMid - 8} text="LOW" anchor="end" color="rgba(246,224,94,0.7)" begin={2.7} />
      <Tag x={CX + 7} y={y.conf + DH * 2 + 16} text="HIGH" color="rgba(90,175,255,0.6)" begin={2.9} />

      {/* ─── Nodes ─── */}
      <Pill cy={y.start} label="START" begin={0} color="#5aafff" />
      <Node cy={y.detect} label="01  Detect" sub="events + 30s health loop" begin={0.25} />
      <Node cy={y.agg} label="02  Aggregate" sub="build investigation packet" begin={0.7} />
      <Diamond cy={y.oom} label="OOM Kill?" begin={1.15} />
      <Node cy={y.recover} label="03  Recover" sub="pre-flight checks + restart" begin={1.8} />
      <Diamond cy={y.conf} label="Confidence OK?" begin={2.25} />
      <Node cy={y.inv} label="04  Investigate" sub="Mistral AI · deep loop" accent begin={2.9} />
      <Node cy={y.guard} label="05  Guard & Escalate" sub="12 guardrail checks" begin={3.35} />
      <Pill cy={y.end} label="RESOLVED" begin={3.8} color="#68d391" />

      {/* ─── Side boxes ─── */}
      <SideBox bx={escBX} by={escBY} label="Human Escalation" sub="alert dispatched"
        color="#fc8181" begin={1.6} />
      <SideBox bx={loopBX} by={loopBY} label="Deep Loop" sub="gather more evidence"
        color="#f6e05e" begin={2.7} />
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   APP
═══════════════════════════════════════════════════════════════════════ */
export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      {/* ══════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════ */}
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="/" className="logo">
            <span className="logo-icon"><AnchorIcon size={16} /></span>
            DockHeal
          </a>

          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#safety">Safety</a></li>
            <li><a href="#api">API</a></li>
            <li><a href="#get-started">Docs</a></li>
          </ul>

          <div className="nav-actions">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-outline btn-sm" id="nav-github-btn">
              <GithubIcon size={13} /> GitHub
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-primary btn-sm" id="nav-download-btn">
              Download
            </a>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          HERO — clean centered
      ══════════════════════════════════════════ */}
      <section className="hero">
        <div className="hero-center">


          <h1 className="hero-title anim-2">
            Docker incidents,{' '}
            <span className="accent">diagnosed</span>{' '}
            and healed automatically.
          </h1>

          <p className="hero-tagline anim-3">
            DockHeal monitors your Docker environment, runs AI root-cause analysis
            via Mistral, and recovers containers safely — with guardrails you control.
          </p>

          <div className="hero-cta anim-4">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-primary" id="hero-download-btn">
              <GithubIcon size={14} /> Download on GitHub
            </a>
            <a href="#features" className="btn btn-outline" id="hero-learn-btn">
              How it works <ArrowRight size={14} />
            </a>
          </div>

        </div>

        
      </section>

      {/* ══════════════════════════════════════════
          PRODUCTS — 3-column grid
      ══════════════════════════════════════════ */}
      <section className="products-section">
        <div className="products-header">
          <span className="section-tag">What DockHeal does</span>
          <h2 className="section-title">Three layers of autonomous healing</h2>
          <p className="section-desc">
            From detection to AI investigation to safe recovery — each layer is audited,
            guarded, and explainable.
          </p>
          <div className="product-grid">

          {/* Card 1 — Monitor */}
          <div className="product-card">
            <div className="product-viz"><MonitorViz /></div>
            <div className="product-body">
              <div className="product-icon-row">
                <span className="product-icon-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                </span>
                <span className="product-icon-name">monitor</span>
              </div>
              <h3 className="product-heading">Detect failures before they become outages</h3>
              <p className="product-desc">
                Continuous 30-second health loop and Docker events listener.
                Detects exits, OOM kills, crash loops, and healthcheck failures
                automatically — then builds an investigation packet.
              </p>
              <a href="#features" className="product-link">
                Explore monitoring <ArrowUpRight />
              </a>
            </div>
          </div>

          {/* Card 2 — Investigate */}
          <div className="product-card">
            <div className="product-viz"><InvestigateViz /></div>
            <div className="product-body">
              <div className="product-icon-row">
                <span className="product-icon-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                </span>
                <span className="product-icon-name">investigate</span>
              </div>
              <h3 className="product-heading">AI root-cause analysis with any model provider</h3>
              <p className="product-desc">
                Mistral AI streams chain-of-thought reasoning live to your dashboard.
                A deep investigation loop gathers additional evidence via sandboxed
                tools when confidence is low.
              </p>
              <a href="#features" className="product-link">
                Explore investigation <ArrowUpRight />
              </a>
            </div>
          </div>

          {/* Card 3 — Recover */}
          <div className="product-card">
            <div className="product-viz"><RecoverViz /></div>
            <div className="product-body">
              <div className="product-icon-row">
                <span className="product-icon-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </span>
                <span className="product-icon-name">recover</span>
              </div>
              <h3 className="product-heading">Build reliable recovery with low-level control</h3>
              <p className="product-desc">
                Pre-flight checks, cooldown windows, and 12 guardrail rules before any
                action fires. Health polling verifies success. Phase 2 actions are
                hard-blocked until you enable them.
              </p>
              <a href="#safety" className="product-link">
                Explore guardrails <ArrowUpRight />
              </a>
            </div>
          </div>

        </div>
        </div>

        
      </section>

      {/* ══════════════════════════════════════════
          FEATURE SHOWCASE — sticky scroll
      ══════════════════════════════════════════ */}
      <StickyFeatures githubUrl={GITHUB_URL} />

      {/* ══════════════════════════════════════════
          HOW IT WORKS — flowchart
      ══════════════════════════════════════════ */}
      <section id="how-it-works" className="steps-section">
        <div className="steps-header">
          <span className="section-tag">How it works</span>
          <h2 className="section-title">Five-stage pipeline from noise to resolution</h2>
          <p className="section-desc">Each stage is logged, reversible, and guarded before the next begins.</p>
        </div>
        <div className="flowchart-wrap">
          <PipelineFlowchart />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SAFETY
      ══════════════════════════════════════════ */}
      <section id="safety" className="safety-section">
        <div className="safety-header">
          <div className="safety-left">
            <span className="section-tag">Safety First</span>
            <h2 className="section-title">AI that can't go rogue</h2>
          </div>
          <div className="safety-right">
            <p>
              DockHeal's guardrail engine runs 12 independent rule checks before any
              remediation action is permitted. AI confidence never overrides policy —
              manual stops, cooldowns, and OOM blocks always win.
            </p>
          </div>
        </div>
        <div className="safety-grid">
          {SAFETY.map((s, i) => (
            <div key={i} className="safety-card">
              <div className="safety-card-icon">{s.icon}</div>
              <div className="safety-card-label">{s.label}</div>
              <div className="safety-card-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <Tools TOOLS={TOOLS} ENDPOINTS={ENDPOINTS}/>
      <CTA />
      <QuickStart />
      <Footer />
    </>
  )
}
