import Image from "next/image";

const BIKE = "/brand/cycling-racer-silhouette.png";

/**
 * 화면 전체 너비를 왼쪽→오른쪽으로 지나가는 자전거(사용자 제공 실루엣) 루프.
 * 실제 비디오 인코딩 대신 CSS 애니메이션으로 가볍게 동작합니다.
 */
export function BicyclePassLane() {
  return (
    <section
      className="relative w-full overflow-hidden border-y border-[var(--border)] bg-[var(--card)]/55 backdrop-blur-[2px]"
      aria-hidden
    >
      <span className="sr-only">
        장식용 애니메이션: 사이클리스트 실루엣이 왼쪽에서 오른쪽으로 반복 이동합니다. 동영상 파일이 아닌 CSS
        애니메이션입니다.
      </span>
      <div className="bicycle-pass-lane__track h-28 md:h-32">
        <div className="bicycle-pass-lane__rider bicycle-pass-lane__rider--a">
          <div className="relative ml-0.5 h-full w-full rounded-lg bg-white/92 p-1 shadow-[0_12px_36px_-12px_rgba(216,27,96,0.55)] ring-1 ring-white/25">
            <Image src={BIKE} alt="" fill className="object-contain object-left" sizes="144px" />
          </div>
        </div>
        <div className="bicycle-pass-lane__rider bicycle-pass-lane__rider--b">
          <div className="relative ml-0.5 h-full w-full rounded-lg bg-white/92 p-1 shadow-[0_12px_36px_-12px_rgba(216,27,96,0.55)] ring-1 ring-white/25">
            <Image src={BIKE} alt="" fill className="object-contain object-left" sizes="144px" />
          </div>
        </div>
      </div>
    </section>
  );
}
