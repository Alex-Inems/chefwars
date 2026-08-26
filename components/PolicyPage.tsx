import Link from "next/link";
import type { ReactNode } from "react";

type PolicyPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function PolicyPage({ title, updated, children }: PolicyPageProps) {
  return (
    <div className="policy">
      <header className="policy-nav">
        <Link className="nav-mark" href="/">
          ChefWars
        </Link>
        <nav className="policy-nav-links" aria-label="Policies">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/cookies">Cookies</Link>
        </nav>
      </header>

      <article className="policy-article">
        <p className="policy-kicker">Policies</p>
        <h1 className="policy-title">{title}</h1>
        <p className="policy-updated">Last updated {updated}</p>
        <div className="policy-body">{children}</div>
      </article>

      <footer className="policy-footer">
        <Link href="/">Back to ChefWars</Link>
        <div className="policy-footer-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/cookies">Cookies</Link>
        </div>
      </footer>
    </div>
  );
}
