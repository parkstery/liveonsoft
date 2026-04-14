import Image from "next/image";

/** 로드 사이클리스트 실루엣 (마젠타) */
const CYCLIST_SILHOUETTE = "/brand/cycling-racer-silhouette.png";
/** 앱 메인 로고 — 파란 배경·지구본 뒷바퀴 (cycle1024) */
const APP_BICYCLE_LOGO = "/brand/ride-the-world-bicycle-logo.png";

/**
 * 화면 전체 너비를 왼쪽→오른쪽으로 지나가는 자전거 루프.
 * 실루엣과 앱 메인 로고를 서로 다른 위상으로 교차 배치합니다.
 */
export function BicyclePassLane() {
  return (
    <section
      className="relative w-full overflow-hidden border-y border-[var(--border)] bg-[var(--card)]/55 backdrop-blur-[2px]"
      aria-hidden
    >
      <span className="sr-only">
        장식용 애니메이션: 사이클리스트 실루엣과 Ride the World 로고 자전거가 왼쪽에서 오른쪽으로 번갈아 지나갑니다. CSS
        애니메이션입니다.
      </span>
      <div className="bicycle-pass-lane__track h-28 md:h-32">
        <div className="bicycle-pass-lane__rider bicycle-pass-lane__rider--a">
          <div className="relative ml-0.5 h-full w-full rounded-lg bg-white/92 p-1 shadow-[0_12px_36px_-12px_rgba(216,27,96,0.55)] ring-1 ring-white/25">
            <Image
              src={CYCLIST_SILHOUETTE}
              alt=""
              fill
              className="object-contain object-left"
              sizes="144px"
            />
          </div>
        </div>
        <div className="bicycle-pass-lane__rider bicycle-pass-lane__rider--b">
          <div className="relative ml-0.5 h-full w-full overflow-hidden rounded-xl shadow-[0_14px_40px_-12px_rgba(34,211,238,0.45)] ring-2 ring-cyan-400/35">
            <Image src={APP_BICYCLE_LOGO} alt="" fill className="object-cover object-center" sizes="144px" />
          </div>
        </div>
      </div>
    </section>
  );
}
