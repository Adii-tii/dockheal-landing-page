import DotGrid from "../assets/svgs/DotGrid";
import GITHUB_URL from "../url";
import GithubIcon from "../assets/svgs/GithubIcon";

function CTA() {


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
    return (
        <section id="get-started" className="cta-section">
            <div className="cta-inner container">
                <div className="cta-viz">
                    <DotGrid />
                </div>
                <div className="cta-content">
                    <h2 className="cta-title">
                        Get started with{' '}
                        <span className="accent">DockHeal</span>
                    </h2>
                    <div className="cta-buttons">
                        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
                            className="btn btn-primary" id="cta-github-btn">
                            <GithubIcon size={14} /> Download on GitHub
                        </a>
                        <a href="#how-it-works" className="btn btn-outline" id="cta-learn-btn">
                            Get a demo <ArrowUpRight size={14} />
                        </a>
                    </div>
                    <p className="cta-note">
                        Use DockHeal, the autonomous Docker healing engine, to improve every
                        step of your container incident lifecycle.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CTA;