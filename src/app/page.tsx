import Link from "next/link";
import { ProductPreview } from "@/components/ProductPreview";

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
            모바일 최적화 PWA·웹 GIS. Google Maps·Street View로 몰입감을 주고, OSRM·Nominatim·오픈 고도로
            경로를 계산하며, 경사 기반 로컬 코칭과 TTS로 라이딩을 안내합니다.
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
                  패키지명 <span className="text-[var(--foreground)]">fitness-pro-mobile-gis</span> — 장소 검색·출발/도착/경유(최대
                  3)·경로 스왑부터 Street View 연동 주행, 고도 프로필, 코칭·TTS까지 한 흐름으로 제공합니다. 웹(PWA)과
                  Capacitor 기반 Android 빌드(<span className="font-mono text-xs">com.liveonsoft.cycle</span>)를
                  지원하며, Vercel에 SPA와 Serverless API로 배포할 수 있습니다.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-[var(--muted)]">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    지도·거리뷰: Google Maps / Street View (roadmap·hybrid, 풀스크린·미니맵·커버리지 레이어)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    경로·검색·고도: OSRM(cycling/foot), Nominatim, Open-Elevation — Google 의존은 지도·Street View로 한정
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    Street View: 더블 버퍼·점진 로딩·prefetch·캐시 우선, 실내 파노 필터 및 커버리지 안내
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    코칭: 경사→저항 규칙 + phraseManifest + 브라우저 TTS (Gemini 등 외부 LLM 미사용, 무료·오프라인 대응)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    부가: My Routes(최대 5)·교통 레이어·Dropbox MP3 배경음·코칭/배경음 토글
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="relative aspect-[9/16] max-h-[480px] w-full max-w-[280px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl mx-auto lg:mx-0">
                  <ProductPreview />
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
              2026년 3월 개발 완료 보고서 기준—WEB GIS, Street View 시뮬, 로컬 코칭·TTS, PWA·Android까지.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "OSRM 경로 탐색",
                  desc: "자전거·도보 프로필로 경로 계산(Vercel Serverless 프록시), 2m 보간·폴리라인·거리·시간 표시.",
                  icon: "🛣️",
                },
                {
                  title: "Nominatim 검색",
                  desc: "장소 검색·역지오코딩, 최근 검색 5건 저장. 결과를 지도 중심·마커에 반영.",
                  icon: "🔎",
                },
                {
                  title: "Street View 주행 품질",
                  desc: "더블 버퍼·점진 로딩·400m prefetch, RUNNING 중 불필요한 getPanorama 호출 제거(Phase 설계).",
                  icon: "🔄",
                },
                {
                  title: "고도 프로필 (Recharts)",
                  desc: "Open-Elevation로 경로당 샘플링·캐시, AreaChart와 시뮬레이션 위치 ReferenceLine 동기화.",
                  icon: "📊",
                },
                {
                  title: "로컬 AI 코칭 + TTS",
                  desc: "경사도→저항 밴드·phraseManifest·예측 코칭(21스텝 주기). 브라우저 Speech Synthesis, 외부 LLM 없음.",
                  icon: "🤖",
                },
                {
                  title: "주행 시뮬레이션",
                  desc: "10~100km/h, 재생/일시정지/정지, 3-2-1 카운트다운 후 자동 시작, 완주 시 TTS 안내.",
                  icon: "▶️",
                },
                {
                  title: "반응형 패널",
                  desc: "접이식 검색·경로·고도·히스토리 패널로 지도 가독성 확보, 풀스크린 대응.",
                  icon: "📱",
                },
                {
                  title: "My Routes",
                  desc: "현재 경로 최대 5개를 localStorage에 저장·로드·삭제.",
                  icon: "⭐",
                },
                {
                  title: "PWA · Capacitor · 배포",
                  desc: "manifest·Service Worker, Android(appId com.liveonsoft.cycle), Vercel 정적 SPA + /api 라우트.",
                  icon: "🚀",
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
            <p className="mt-2 max-w-3xl text-sm text-[var(--muted)]">
              본 페이지는 Next.js로 운영되며, 아래는 제품(Cycle Simulator / Ride the World) 기준 스택입니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "React 18 · TypeScript 5",
                "Vite 5 · Tailwind CSS 3",
                "Google Maps JS (지도·Street View)",
                "OSRM · Nominatim (Vercel API 프록시)",
                "Open-Elevation",
                "Recharts · Lucide React",
                "Capacitor 8 · Android",
                "PWA (manifest · SW)",
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
                  텍스트 검색(Nominatim) 또는 지도 클릭으로 출발/도착·경유(최대 3) 설정, 출발·도착 스왑. OSRM으로
                  자전거·도보 경로를 계산한 뒤 Go.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
                <h3 className="font-semibold text-[var(--foreground)]">시뮬레이션 제어</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  재생·일시정지·정지, 속도 10~100km/h. Go 후 3→2→1→Start! 카운트다운, 동일 입력이면 경로 재요청 없이
                  시뮬만 재시작. Street View 풀스크린·미니맵·교통 레이어 토글.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
                <h3 className="font-semibold text-[var(--foreground)]">코칭·고도·미디어</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  경사 기반 로컬 멘트·TTS, 코칭/배경음 on/off. Open-Elevation 기반 고도 차트 커서가 주행 위치와
                  동기화. 선택 시 Dropbox MP3 플레이리스트 랜덤 재생(페이드 인/아웃).
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
              웹(PWA)으로도 이용할 수 있으며, Android는 Capacitor 빌드 패키지{" "}
              <span className="font-mono text-[var(--foreground)]">com.liveonsoft.cycle</span> 기준입니다. 스토어
              공개 시 아래 링크가 활성화됩니다.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.liveonsoft.cycle"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[var(--accent)] px-8 py-4 font-semibold text-[var(--background)] transition hover:bg-[var(--accent-dim)]"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5S3 21.33 3 20.5zM20.5 10H8.83l3.09-3.09L10.5 5.5 3 13l7.5 7.5 1.41-1.41L8.83 12H20.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
              </svg>
              Google Play에서 다운로드
            </a>
            <p className="mt-4 text-xs text-[var(--muted)] leading-relaxed">
              실시간 GPS 추적은 미구현이며, 가상 주행(시뮬레이션) 중심입니다. 스토어 식별자가 다르면 링크의{" "}
              <span className="font-mono">id=</span> 값만 실제 패키지명으로 바꿔 주세요.
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
