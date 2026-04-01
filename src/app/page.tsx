import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-grid min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
            Liveon<span className="text-[var(--accent)]">soft</span>
          </Link>
          <div className="flex items-center gap-6">
            <a href="#product" className="text-sm text-[var(--muted)] transition hover:text-[var(--accent)]">
              제품
            </a>
            <a href="#features" className="text-sm text-[var(--muted)] transition hover:text-[var(--accent)]">
              기능
            </a>
            <a href="#download" className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--background)] transition hover:bg-[var(--accent-dim)]">
              앱 다운로드
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 pt-24 pb-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 via-transparent to-transparent" />
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            Map & GIS Software
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            실시간 고도 분석과
            <br />
            <span className="gradient-text">AI 코칭</span>으로
            <br />
            전 세계를 실내에서 주행하세요
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--muted)]">
            모바일 최적화 웹 기반 사이클 시뮬레이터. Google Maps와 AI가 만드는 가상 라이딩 경험.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 font-medium text-[var(--background)] transition hover:bg-[var(--accent-dim)]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5S3 21.33 3 20.5zM20.5 10H8.83l3.09-3.09L10.5 5.5 3 13l7.5 7.5 1.41-1.41L8.83 12H20.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
              </svg>
              Android 앱 다운로드
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)]/10"
            >
              기능 보기
            </a>
          </div>
        </section>

        {/* Product: Ride the World */}
        <section id="product" className="relative border-t border-[var(--border)] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-medium text-[var(--accent)]">Android App</span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Ride the World
                  <br />
                  <span className="text-[var(--muted)]">Indoor Cycling</span>
                </h2>
                <p className="mt-4 text-[var(--muted)] leading-relaxed">
                  Fitness Pro Mobile GIS (Cycle Simulator). 장소 검색부터 START/WAYPOINT/END 설정, 실시간 스트리트 뷰
                  주행, 고도 차트와 AI 코칭까지. 실내 자전거에서 전 세계 코스를 경험하세요.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-[var(--muted)]">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    Google Maps 기반 경로 및 고도
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    Double Buffering 스트리트 뷰 (끊김 없는 주행)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    Gemini AI 실시간 라이딩 코칭
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-[9/16] max-h-[480px] w-full max-w-[280px] rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl mx-auto lg:mx-0">
                  <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)]/20">
                      <svg className="h-8 w-8 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <span className="font-semibold text-[var(--foreground)]">Ride the World</span>
                    <span className="text-xs text-[var(--muted)]">Indoor Cycling</span>
                    <div className="mt-auto h-24 w-full rounded-lg bg-[var(--border)]/50 flex items-center justify-center">
                      <span className="text-xs text-[var(--muted)]">Map Preview</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-t border-[var(--border)] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-medium text-[var(--accent)]">핵심 구현 사양</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              개발 보고서 기반 핵심 기능
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--muted)]">
              하이브리드 경로 탐색, 끊김 없는 스트리트 뷰, AI 코칭, 반응형 UI까지.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "하이브리드 경로 탐색",
                  desc: "Google Directions API 우선, 실패 시 OSRM으로 안정적 경로 생성.",
                  icon: "🛣️",
                },
                {
                  title: "Double Buffering Street View",
                  desc: "두 개의 파노라마 인스턴스 교차 렌더링으로 Black-out 없는 부드러운 주행.",
                  icon: "🔄",
                },
                {
                  title: "AI 사이클링 코치",
                  desc: "Gemini가 고도·속도 분석 후 맞춤 저항 단계·페달링 전략을 음성·텍스트로 제공.",
                  icon: "🤖",
                },
                {
                  title: "반응형 UI/UX",
                  desc: "접이식 패널 구조로 지도 가독성 극대화, 모바일 최적화.",
                  icon: "📱",
                },
                {
                  title: "지형 정보 강화",
                  desc: "Elevation Service 고도 차트, 지도 축척바로 거리감·경사도 파악.",
                  icon: "📊",
                },
                {
                  title: "경로 저장 (My Routes)",
                  desc: "즐겨찾기로 자주 쓰는 경로 저장 후 즉시 불러오기.",
                  icon: "⭐",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 transition hover:border-[var(--accent)]/50"
                >
                  <span className="text-2xl" aria-hidden>{f.icon}</span>
                  <h3 className="mt-3 font-semibold text-[var(--foreground)]">{f.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="border-t border-[var(--border)] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-medium text-[var(--accent)]">Tech Stack</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              기술 스택
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "React 19",
                "TypeScript",
                "Tailwind CSS",
                "Google Maps JS API",
                "Places · Directions · Elevation · Street View",
                "Google Gemini 1.5 Flash",
                "Recharts",
                "Lucide-React",
                "OSRM",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* How to use (Manual summary) */}
        <section className="border-t border-[var(--border)] py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-medium text-[var(--accent)]">사용자 매뉴얼 요약</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              시작하기 &amp; 제어
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
                <h3 className="font-semibold text-[var(--foreground)]">경로 설정</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  검색창 또는 지도 클릭으로 목적지·핀 설정. START(A), WAYPOINT, END(B)로 경로 구성 후 Go.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
                <h3 className="font-semibold text-[var(--foreground)]">시뮬레이션 제어</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Play/Pause, 스트리트 뷰 온/오프·전체화면, 슬라이더로 속도 10~100km/h 조절.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
                <h3 className="font-semibold text-[var(--foreground)]">AI 코칭 &amp; 지형</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  고도 변화 시 AI 코치가 라이딩 팁·음성 안내. 고도 차트·축척바로 경사·거리 확인.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Download */}
        <section id="download" className="border-t border-[var(--border)] py-24">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ride the World로
              <br />
              실내에서 전 세계를 달리세요
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              Android 앱을 다운로드하고 Google Play에서 만나보세요.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.liveonsoft.ridetheworld"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[var(--accent)] px-8 py-4 font-semibold text-[var(--background)] transition hover:bg-[var(--accent-dim)]"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5S3 21.33 3 20.5zM20.5 10H8.83l3.09-3.09L10.5 5.5 3 13l7.5 7.5 1.41-1.41L8.83 12H20.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
              </svg>
              Google Play에서 다운로드
            </a>
            <p className="mt-4 text-xs text-[var(--muted)]">
              앱 ID: com.liveonsoft.ridetheworld (등록 후 링크 업데이트 가능)
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[var(--border)] py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[var(--foreground)]">Liveon<span className="text-[var(--accent)]">soft</span></span>
              <span className="text-[var(--muted)]">·</span>
              <a href="https://liveonsoft.com" className="text-sm text-[var(--muted)] hover:text-[var(--accent)]">
                liveonsoft.com
              </a>
              <span className="text-[var(--muted)]">·</span>
              <span className="text-sm text-[var(--muted)]">contact email liveonsoft@gmail.com</span>
            </div>
            <p className="text-sm text-[var(--muted)]">
              © {new Date().getFullYear()} Liveonsoft. 지도·GIS 기반 소프트웨어.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
