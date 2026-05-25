import GITHUB_URL from "../url";
import GithubIcon from "../assets/svgs/GithubIcon";

function Footer() {

    function AnchorIcon({ size = 18 }) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="5" r="3" />
                <line x1="12" y1="22" x2="12" y2="8" />
                <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
            </svg>
        )
    }
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-logo">
                    <AnchorIcon size={16} />
                    DockHeal
                    <span className="footer-logo-sub">— Autonomous Docker Healing</span>
                </div>
                <div className="footer-links">
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="footer-link">
                        <GithubIcon size={13} /> GitHub
                    </a>
                    <span className="footer-copy">Open Source · MIT License</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;