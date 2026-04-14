"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

const SCREENSHOT_SRC = "/screenshots/ride-the-world.png";

export function ProductPreview() {
  const [useFallback, setUseFallback] = useState(false);

  const handleError = useCallback(() => {
    setUseFallback(true);
  }, []);

  if (useFallback) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)]/20">
          <svg className="h-8 w-8 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <span className="font-semibold text-[var(--foreground)]">Ride the World</span>
        <span className="text-xs text-[var(--muted)]">Indoor Cycling</span>
        <p className="mt-1 max-w-[200px] text-xs leading-relaxed text-[var(--muted)]">
          스크린샷을 넣으려면 <span className="font-mono text-[var(--foreground)]">public/screenshots/ride-the-world.png</span> 파일을
          추가하세요.
        </p>
        <div className="mt-auto h-24 w-full rounded-lg bg-[var(--border)]/50 flex items-center justify-center">
          <span className="text-xs text-[var(--muted)]">Map Preview</span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={SCREENSHOT_SRC}
      alt="Ride the World — Street View와 지도를 함께 보여 주는 앱 화면 예시"
      fill
      className="object-cover object-top"
      sizes="(max-width: 1024px) 280px, 280px"
      priority
      onError={handleError}
    />
  );
}
