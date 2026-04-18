"use client";

import { useEffect, useRef } from "react";

/**
 * 히어로 우측: rider.mp4 + earth_bike.png 포스터
 */
export function HeroPromoVideo() {
  const v = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = v.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (mq.matches) {
        el.pause();
        el.removeAttribute("autoplay");
      } else {
        el.setAttribute("autoplay", "");
        void el.play().catch(() => {});
      }
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <figure className="w-full max-w-[min(100%,380px)] overflow-hidden rounded-2xl border border-[var(--border)] bg-black shadow-[0_28px_80px_-28px_rgba(34,211,238,0.35)]">
      <div className="relative aspect-[9/16] w-full bg-black">
        <video
          ref={v}
          className="absolute inset-0 h-full w-full object-contain"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/brand/earth_bike.png"
        >
          <source src="/video/rider.mp4" type="video/mp4" />
        </video>
      </div>
      <figcaption className="border-t border-[var(--border)] bg-[var(--card)] px-4 py-3 text-center text-xs text-[var(--muted)]">
        제작 프로모션 영상 · 세로 화면 최적화 (rider.mp4)
      </figcaption>
    </figure>
  );
}
