import Link from "next/link";

const NAV = [
  { href: "/", label: "홈" },
  { href: "/about", label: "소개" },
  { href: "/guide", label: "가이드" },
  { href: "/contact", label: "문의" },
] as const;

const LEGAL = [
  { href: "/privacy", label: "개인정보처리방침" },
  { href: "/disclaimer", label: "면책조항" },
  { href: "/licenses", label: "오픈소스 라이선스" },
] as const;

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-grid flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:h-16 sm:px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
            Liveon<span className="text-[var(--accent)]">soft</span>
          </Link>
          <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-sm">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[var(--muted)] transition hover:text-[var(--accent)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#download"
              className="rounded-full bg-[var(--accent)] px-3 py-1.5 font-medium text-[var(--background)] transition hover:bg-[var(--accent-dim)] sm:px-4"
            >
              앱 다운로드
            </Link>
          </div>
        </nav>
      </header>
      <div className="flex-1">{children}</div>
      <footer className="border-t border-[var(--border)] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:px-6">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--muted)]">
            {LEGAL.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[var(--accent)]">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-1 text-sm text-[var(--muted)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
            <span>
              © {new Date().getFullYear()} Liveonsoft · Ride the World – Indoor Cycling
            </span>
            <span className="hidden sm:inline">·</span>
            <a href="mailto:liveonsoft@gmail.com" className="hover:text-[var(--accent)]">
              liveonsoft@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function DocArticle({ children }: { children: React.ReactNode }) {
  return (
    <article className="doc-page mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">{children}</article>
  );
}
