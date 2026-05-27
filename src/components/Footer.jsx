import GITHUB_URL from "../url";
import GithubIcon from "../assets/svgs/GithubIcon";

function Footer() {

    function AnchorIcon({ size = 18 }) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="6" rx="1" />
                <rect x="6" y="10" width="12" height="4" rx="1" />
                <rect x="8" y="14" width="8" height="4" rx="1" />
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