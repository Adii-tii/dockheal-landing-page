import { useState, useEffect } from 'react'

const GITHUB_URL = 'https://github.com/Adii-tii/dockheal-ai'

/* ─── Icons ──────────────────────────────────────────────────────────── */
function AnchorIcon({ size = 22, color = 'var(--accent)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3"/>
      <line x1="12" y1="22" x2="12" y2="8"/>
      <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
    </svg>
  )
}

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

/* ─── Terminal ───────────────────────────────────────────────────────── */
const TERMINAL_LINES = [
  { type: 'prompt',  text: '$ docker ps | grep api-gateway' },
  { type: 'output',  text: 'api-gateway   Exited (137)   2 min ago' },
  { type: 'prompt',  text: '$ # DockHeal detects incident automatically' },
  { type: 'info',    text: '[MONITOR]   Incident → ContainerStopped' },
  { type: 'info',    text: '[CONTEXT]   Building investigation packet...' },
  { type: 'info',    text: '[CONTEXT]   severity_score=85  id=inv-a3f9' },
  { type: 'ai',      text: '[AI]        Invoking Mistral investigation...' },
  { type: 'ai',      text: '[AI]        Root cause → OOM kill (exit 137)' },
  { type: 'warn',    text: '[GUARDRAIL] oom_block_restart → escalating' },
  { type: 'success', text: '[ALERT]     Human-escalation dispatched ✓' },
]

function Terminal() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count < TERMINAL_LINES.length) {
      const t = setTimeout(() => setCount(c => c + 1), 430)
      return () => clearTimeout(t)
    }
  }, [count])

  return (
    <div className="terminal anim-4">
      <div className="terminal-bar">
        <div className="tbar-dot" style={{ background: 'var(--red)' }} />
        <div className="tbar-dot" style={{ background: 'var(--yellow)' }} />
        <div className="tbar-dot" style={{ background: 'var(--green)' }} />
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

/* ─── Feature data ───────────────────────────────────────────────────── */
const FEATURES = [
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    title: 'Real-Time Monitoring',
    desc: 'Continuous 30-second health loop. Detects exits, OOM kills, crash loops, and healthcheck failures before they become outages.',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/></svg>,
    title: 'Context Aggregation',
    desc: 'Aggregates container state, logs, metrics, events, and Compose dependency graphs into a structured investigation packet for every incident.',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: 'Deterministic Recovery',
    desc: 'Pre-flight checks, cooldown windows, and health polling ensure restarts are safe and verified — not fire-and-forget.',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
    title: 'Mistral AI Investigation',
    desc: 'Streaming RCA with Mistral medium/large models. Chain-of-thought reasoning piped live to your dashboard. Self-corrects on parse failure.',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Multi-Layer Guardrails',
    desc: '12 independent rule checks before any action. AI confidence never overrides policy — manual stops, cooldowns, and OOM blocks always win.',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
    title: 'Deep Investigation Loop',
    desc: 'When quick analysis isn\'t enough, iterative tool-use loops gather additional evidence via fetch_logs, inspect_container, and custom MCP tools.',
  },
]

const STEPS = [
  { step: '01', title: 'Detect', desc: 'Docker events listener and a 30-second background health loop identify incidents: container stops, OOM kills, crash loops, failing healthchecks.' },
  { step: '02', title: 'Aggregate', desc: 'The Operational Context Aggregator builds a structured investigation packet — container state, metrics, logs, events, and Compose dependency maps.' },
  { step: '03', title: 'Recover', desc: 'Deterministic recovery engine attempts a safe restart with pre-flight policy checks, then polls container health for up to 30 seconds to verify success.' },
  { step: '04', title: 'Investigate', desc: 'Mistral AI streams a root-cause analysis to your dashboard. A deep loop runs if confidence is low — gathering additional evidence via sandboxed tools.' },
  { step: '05', title: 'Guard & Escalate', desc: 'Every proposed action passes through sandbox validation and 12 guardrail checks. Blocked actions and escalations are broadcast in real-time via WebSockets.' },
]

const SAFETY = [
  { label: 'Phase 2 Hard-Block', desc: 'Memory updates and image rollbacks are registered but hard-blocked from autonomous execution until manually enabled.' },
  { label: 'Operator Lock', desc: 'POST /lock/{container} instantly freezes all autonomous healing. One API call, immediate effect.' },
  { label: 'OOM Block', desc: 'Restarting an OOM-killed container won\'t fix the root cause. DockHeal blocks the restart and escalates instead.' },
  { label: 'Cooldown Window', desc: 'Configurable cooldown prevents repeat-restart storms. Default 5 minutes between remediation attempts per container.' },
  { label: 'Cascade Guard', desc: 'If 3+ Compose siblings are unhealthy simultaneously, single-container action is blocked — likely an infra-level failure.' },
  { label: 'Stale Packet Guard', desc: 'Action is blocked if the investigation packet is older than 60s — forces a fresh context rebuild before any non-safe tool runs.' },
]

const TOOLS = [
  { name: 'inspect_container', risk: 'safe',   riskColor: 'var(--green)',  bg: 'rgba(129,201,149,0.12)', phase: 1 },
  { name: 'fetch_logs',        risk: 'safe',   riskColor: 'var(--green)',  bg: 'rgba(129,201,149,0.12)', phase: 1 },
  { name: 'send_alert',        risk: 'safe',   riskColor: 'var(--green)',  bg: 'rgba(129,201,149,0.12)', phase: 1 },
  { name: 'restart_container', risk: 'low',    riskColor: 'var(--accent)', bg: 'var(--accent-dim)',      phase: 1 },
  { name: 'update_memory_limit',risk:'medium', riskColor: 'var(--yellow)', bg: 'rgba(253,214,99,0.12)', phase: 2 },
  { name: 'rollback_image',    risk: 'high',   riskColor: 'var(--red)',    bg: 'rgba(242,139,130,0.12)', phase: 2 },
]

const ENDPOINTS = [
  { method: 'GET',  path: '/containers' },
  { method: 'GET',  path: '/incidents' },
  { method: 'GET',  path: '/containers/metrics' },
  { method: 'POST', path: '/investigate/{name}' },
  { method: 'GET',  path: '/investigate/{name}/stream' },
  { method: 'POST', path: '/lock/{name}' },
  { method: 'POST', path: '/unlock/{name}' },
  { method: 'GET',  path: '/audit' },
  { method: 'GET',  path: '/policies' },
]

/* ─── App ────────────────────────────────────────────────────────────── */
export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      {/* ── Navbar ─────────────────────────────────────────────────── */}
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="/" className="logo">
            <AnchorIcon size={20} />
            <span className="logo-text">DockHeal</span>
          </a>

          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How it Works</a></li>
            <li><a href="#safety">Safety</a></li>
            <li><a href="#get-started">Get Started</a></li>
          </ul>

          <div className="nav-actions">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-outline btn-sm">
              <GithubIcon size={14} /> GitHub
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-primary btn-sm" id="nav-download-btn">
              Download
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="hero-eyebrow anim-1">
                <span className="badge">
                  <span className="badge-dot" />
                  Open Source · Phase 1 Release
                </span>
              </div>

              <h1 className="hero-title anim-2">
                Docker failures,{' '}
                <span className="accent">diagnosed</span>{' '}
                and healed automatically.
              </h1>

              <p className="hero-body anim-3">
                DockHeal monitors your Docker environment, runs AI-assisted root-cause
                analysis via Mistral, and recovers containers safely — with multi-layer
                guardrails so nothing runs without your approval.
              </p>

              <div className="hero-cta anim-3">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary" id="hero-download-btn">
                  <GithubIcon size={15} /> Download on GitHub
                </a>
                <a href="#how-it-works" className="btn btn-outline" id="hero-learn-btn">
                  How it works
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>

            <Terminal />
          </div>

          {/* Stats */}
          <div className="stats-bar anim-5">
            {[
              { num: '< 30s', label: 'Incident detection' },
              { num: '12',    label: 'Guardrail checks' },
              { num: '5',     label: 'Deep loop iterations' },
              { num: '100%',  label: 'Audit logged' },
            ].map((s, i) => (
              <div key={i} className="stat-item">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Features ───────────────────────────────────────────────── */}
      <section id="features" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Features</span>
            <h2 className="section-title">Everything you need to stop fighting fires</h2>
            <p className="section-desc">
              Built around the principle that every automated action must be
              explainable, auditable, and safe to roll back.
            </p>
          </div>
          <div className="grid-3">
            {FEATURES.map((f, i) => (
              <div key={i} className="card">
                <div className="card-icon">{f.icon}</div>
                <div className="card-title">{f.title}</div>
                <div className="card-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── How it Works ───────────────────────────────────────────── */}
      <section id="how-it-works" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How it Works</span>
            <h2 className="section-title">Five-stage pipeline from noise to resolution</h2>
            <p className="section-desc">
              Each stage is logged, reversible, and guarded before the next stage begins.
            </p>
          </div>
          <div className="step-list">
            {STEPS.map((s, i) => (
              <div key={i} className="step-row">
                <div className="step-num">{s.step}</div>
                <div>
                  <div className="step-title">{s.title}</div>
                  <div className="step-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Safety ─────────────────────────────────────────────────── */}
      <section id="safety" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Safety First</span>
            <h2 className="section-title">AI that can't go rogue</h2>
            <p className="section-desc">
              DockHeal's guardrail engine runs 12 independent rule checks before any
              remediation action is permitted. AI confidence never overrides policy.
            </p>
          </div>
          <div className="grid-3">
            {SAFETY.map((s, i) => (
              <div key={i} className="safety-card">
                <div className="safety-dot" />
                <div>
                  <div className="safety-label">{s.label}</div>
                  <div className="safety-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Tools + API ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start' }}>

            {/* Tool registry */}
            <div>
              <span className="section-tag">MCP Tool Registry</span>
              <h2 className="section-title">The AI only calls what it's allowed to call</h2>
              <p className="section-desc" style={{ marginBottom: '28px' }}>
                Every tool is registered explicitly. Each call is parameter-whitelisted,
                pre-audited, and sandboxed before guardrails decide whether execution is permitted.
              </p>
              <div>
                {TOOLS.map((t, i) => (
                  <div key={i} className={`tool-row${t.phase === 2 ? ' dimmed' : ''}`}>
                    <span className="tool-name">{t.name}</span>
                    <div className="tool-meta">
                      <span className="risk-badge" style={{
                        color: t.riskColor,
                        background: t.bg,
                        border: `1px solid ${t.riskColor}40`,
                      }}>{t.risk}</span>
                      <span className="phase-label">Phase {t.phase}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '10px' }}>
                Phase 2 tools are registered but hard-blocked until explicitly enabled.
              </p>
            </div>

            {/* API reference */}
            <div>
              <span className="section-tag">REST API</span>
              <h2 className="section-title">Fully controllable via HTTP</h2>
              <p className="section-desc" style={{ marginBottom: '28px' }}>
                Every action the UI can perform, you can also automate. Investigate, lock,
                unlock, or stream AI thoughts from any HTTP client.
              </p>
              <div className="code-block">
                <div className="code-block-bar">API endpoints — :8000</div>
                <div className="code-block-body">
                  {ENDPOINTS.map((ep, i) => (
                    <div key={i} className="endpoint-row">
                      <span className={`method ${ep.method === 'GET' ? 'method-get' : 'method-post'}`}>
                        {ep.method}
                      </span>
                      <span className="endpoint-path">{ep.path}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Get Started ─────────────────────────────────────────────── */}
      <section id="get-started" className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="section-tag">Get Started</span>
              <h2 className="section-title">Up and running in minutes</h2>
              <p className="section-desc" style={{ marginBottom: '32px' }}>
                Requires Docker, Python 3.10+, Node.js 18+, and a Mistral API key.
                Clone the repo, activate your virtual environment, and start healing.
              </p>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
                className="btn btn-primary" id="cta-download-btn">
                <GithubIcon size={15} /> Download on GitHub
              </a>
            </div>

            <div className="code-block">
              <div className="code-block-bar">quick start</div>
              <div className="code-block-body">
                <div className="c-comment"># Clone the repo</div>
                <div><span className="c-prompt">$</span> <span className="c-text">git clone {GITHUB_URL}</span></div>
                <div style={{ height: '8px' }} />
                <div className="c-comment"># Backend</div>
                <div><span className="c-prompt">$</span> <span className="c-text">cd dockheal-ai/backend</span></div>
                <div><span className="c-prompt">$</span> <span className="c-text">python -m venv .venv && .venv\Scripts\activate</span></div>
                <div><span className="c-prompt">$</span> <span className="c-text">pip install -r requirements.txt</span></div>
                <div><span className="c-prompt">$</span> <span className="c-text">echo "API_KEY=sk-..." &gt; .env</span></div>
                <div><span className="c-prompt">$</span> <span className="c-text">uvicorn app.main:app --reload</span></div>
                <div style={{ height: '8px' }} />
                <div className="c-comment"># Client</div>
                <div><span className="c-prompt">$</span> <span className="c-text">cd ../client && npm install && npm run dev</span></div>
                <div style={{ height: '8px' }} />
                <div className="c-success">✓ DockHeal running at http://localhost:5173</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <AnchorIcon size={18} />
            <span className="footer-logo-text">DockHeal</span>
            <span className="footer-sub">— Autonomous Docker Healing</span>
          </div>
          <div className="footer-links">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="footer-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <span className="footer-sub">Open Source · MIT License</span>
          </div>
        </div>
      </footer>
    </>
  )
}
