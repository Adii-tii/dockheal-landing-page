import GITHUB_URL from "../url";
import GithubIcon from "../assets/svgs/GithubIcon";

function QuickStart(){
    return(
        <section className="getstarted-section">
        <div className="getstarted-inner">
          <div>
            <span className="section-tag">Quick Start</span>
            <h2 className="section-title" style={{ marginBottom: '12px' }}>Up and running in minutes</h2>
            <p className="section-desc" style={{ marginBottom: '32px' }}>
              Requires Docker, Python 3.10+, Node.js 18+, and a Mistral API key.
              Clone the repo, activate your virtual environment, and start healing.
            </p>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-primary" id="qs-download-btn">
              <GithubIcon size={14} /> Clone on GitHub
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
              <div><span className="c-prompt">$</span> <span className="c-text">python -m venv .venv &amp;&amp; .venv\Scripts\activate</span></div>
              <div><span className="c-prompt">$</span> <span className="c-text">pip install -r requirements.txt</span></div>
              <div><span className="c-prompt">$</span> <span className="c-text">echo "MISTRAL_API_KEY=sk-..." &gt; .env</span></div>
              <div><span className="c-prompt">$</span> <span className="c-text">uvicorn app.main:app --reload</span></div>
              <div style={{ height: '8px' }} />
              <div className="c-comment"># Client</div>
              <div><span className="c-prompt">$</span> <span className="c-text">cd ../client &amp;&amp; npm install &amp;&amp; npm run dev</span></div>
              <div style={{ height: '8px' }} />
              <div className="c-success">✓ DockHeal running at http://localhost:5173</div>
            </div>
          </div>
        </div>
      </section>
    )
}


export default QuickStart;