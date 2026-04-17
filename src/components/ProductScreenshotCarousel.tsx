"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { PRODUCT_CAROUSEL_SOURCES } from "@/content/gallery";

const labels: Record<string, string> = {
  "/gallery/portrait_sv_full_elevation.jpg": "Street View + 표고",
  "/gallery/land_streetview_full2.jpg": "Street View 분할 레이아웃",
  "/gallery/portrait_sat_half_elevation.jpg": "위성 + 표고 패널",
  "/gallery/land_sat_route_waypoints.jpg": "위성 · 경유 경로",
  "/gallery/portrait_map_route_view.jpg": "도로 지도 + 경로",
};

export function ProductScreenshotCarousel() {
  const sources = useMemo(() => [...PRODUCT_CAROUSEL_SOURCES], []);
  const [index, setIndex] = useState(0);
  const src = sources[index];
  const alt = labels[src] ?? "Ride the World 앱 화면";

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + sources.length) % sources.length);
  }, [sources.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % sources.length);
  }, [sources.length]);

  return (
    <div className="flex h-full min-h-[420px] flex-col">
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl bg-black">
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 320px"
          priority
          quality={92}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-12">
          <p className="text-center text-xs font-medium text-white/95">{alt}</p>
          <p className="mt-1 text-center text-[10px] text-white/70">
            {index + 1} / {sources.length} — 실제 기기 캡처
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={prev}
          className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-sm text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          이전
        </button>
        <div className="flex flex-1 justify-center gap-1.5">
          {sources.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`${i + 1}번째 스크린샷`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${i === index ? "bg-[var(--accent)]" : "bg-[var(--border)] hover:bg-[var(--muted)]"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-sm text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          다음
        </button>
      </div>
    </div>
  );
}
