import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <Link className="site-footer-brand" href="/">
          Chef <span>Wars</span>
        </Link>
        <nav className="site-footer-nav" aria-label="Legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/cookies">Cookies</Link>
        </nav>
        <p className="site-footer-copy">&copy; 2026 Chef Wars. All rights reserved.</p>
      </div>
    </footer>
  );
}
