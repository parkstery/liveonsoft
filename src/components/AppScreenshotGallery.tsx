import Image from "next/image";
import Link from "next/link";
import { APP_GALLERY } from "@/content/gallery";

export function AppScreenshotGallery() {
  const portraits = APP_GALLERY.filter((g) => g.layout === "portrait");
  const landscapes = APP_GALLERY.filter((g) => g.layout === "landscape");

  return (
    <section id="gallery" className="border-t border-[var(--border)] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-medium text-[var(--accent)]">실제 앱 화면</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">세로 · 가로 캡처 갤러리</h2>
        <p className="mt-4 max-w-3xl text-[var(--muted)]">
          휴대폰에서 촬영한 지도·위성·Street View·표고·My Routes 등 화면을 그대로 모았습니다. 세로 UI는 한 손 조작에
          맞춘 패널 구성, 가로 UI는 넓은 지도와 경로 확인에 유리합니다.
        </p>

        <h3 className="mt-12 text-lg font-semibold text-[var(--foreground)]">세로 (Portrait)</h3>
        <div className="mt-4 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {portraits.map((item) => (
            <figure
              key={item.src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-lg"
            >
              <div className="relative aspect-[9/16] w-full bg-black">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={88}
                />
              </div>
              <figcaption className="px-3 py-2 text-xs text-[var(--muted)]">{item.label}</figcaption>
            </figure>
          ))}
        </div>

        <h3 className="mt-14 text-lg font-semibold text-[var(--foreground)]">가로 (Landscape)</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {landscapes.map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full bg-black">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  quality={88}
                />
              </div>
              <figcaption className="px-3 py-2 text-xs text-[var(--muted)]">{item.label}</figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[var(--muted)]">
          사용 흐름은 <Link href="/guide" className="text-[var(--accent)] underline underline-offset-2">사용자 상세 가이드</Link>와
          함께 보시면 이해에 도움이 됩니다.
        </p>
      </div>
    </section>
  );
}
