import GITHUB_URL from "../url";

export default function Tools({TOOLS, ENDPOINTS}){
    return(
        <section id="api" className="api-section">
        <div className="api-inner">

          {/* Tool registry */}
          <div>
            <span className="section-tag">MCP Tool Registry</span>
            <h2 className="section-title" style={{ marginBottom: '12px' }}>The AI only calls what it's allowed to call</h2>
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
                      color: t.riskColor, background: t.bg,
                      border: `1px solid ${t.riskColor}40`,
                    }}>{t.risk}</span>
                    <span className="phase-label">Phase {t.phase}</span>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '12px' }}>
              Phase 2 tools are registered but hard-blocked until explicitly enabled.
            </p>
          </div>

          {/* REST API */}
          <div>
            <span className="section-tag">REST API</span>
            <h2 className="section-title" style={{ marginBottom: '12px' }}>Fully controllable via HTTP</h2>
            <p className="section-desc" style={{ marginBottom: '28px' }}>
              Every action the UI can perform, you can also automate. Investigate, lock,
              unlock, or stream AI reasoning from any HTTP client.
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
      </section>
    )
}