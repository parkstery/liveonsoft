"use client";

import { useEffect, useRef } from "react";

/**
 * rtw_bike.mp4 · rider.mp4 — 제작 영상을 좌우 패널로 배치.
 * prefers-reduced-motion 시 자동 재생을 멈춥니다.
 */
export function BicyclePassLane() {
  const a = useRef<HTMLVideoElement>(null);
  const b = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vids = [a.current, b.current].filter(Boolean) as HTMLVideoElement[];
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      vids.forEach((v) => {
        if (mq.matches) {
          v.pause();
          v.removeAttribute("autoplay");
        } else {
          v.setAttribute("autoplay", "");
          void v.play().catch(() => {});
        }
      });
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden border-y border-[var(--border)] bg-black/80"
      aria-hidden
    >
      <span className="sr-only">
        장식용 동영상 배너: Ride the World 자전거 클립과 라이더 클립. 동작 줄임 설정 시 재생이 멈출 수 있습니다.
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-[var(--border)]">
        <div className="relative aspect-[21/9] min-h-[140px] w-full bg-black md:aspect-auto md:min-h-[160px]">
          <video
            ref={a}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/video/rtw_bike.mp4" type="video/mp4" />
          </video>
          <span className="pointer-events-none absolute bottom-2 left-2 rounded bg-black/55 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/90">
            RTW Bike
          </span>
        </div>
        <div className="relative aspect-[21/9] min-h-[140px] w-full bg-black md:aspect-auto md:min-h-[160px]">
          <video
            ref={b}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/video/rider.mp4" type="video/mp4" />
          </video>
          <span className="pointer-events-none absolute bottom-2 left-2 rounded bg-black/55 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/90">
            Rider
          </span>
        </div>
      </div>
    </section>
  );
}
