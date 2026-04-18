"use client";

import { useEffect, useRef } from "react";

/**
 * rtw_bike.mp4 단일 트랙. object-contain으로 세로·가로 잘림 없이 전체 프레임이 보이도록 배치.
 * rider.mp4는 히어로(HeroPromoVideo)에서만 재생합니다.
 */
export function BicyclePassLane() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
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
    <section
      className="relative w-full overflow-hidden border-y border-[var(--border)] bg-black"
      aria-hidden
    >
      <span className="sr-only">
        장식용 동영상: Ride the World 자전거 클립(rtw_bike). 동작 줄임 설정 시 재생이 멈출 수 있습니다.
      </span>
      {/* 가운데 정렬 + letterbox: cover 대신 contain */}
      <div className="mx-auto flex w-full max-w-6xl justify-center px-2 py-4 sm:px-4 sm:py-6">
        <video
          ref={videoRef}
          className="mx-auto block max-h-[min(70vh,680px)] w-full object-contain [aspect-ratio:auto]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/video/rtw_bike.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
