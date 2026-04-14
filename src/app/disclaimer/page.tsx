import type { Metadata } from "next";
import { DocArticle, SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "면책조항 | Liveonsoft — Ride the World",
  description:
    "Ride the World – Indoor Cycling 면책조항: 앱 목적, 의료·건강, 데이터 정확성, 야외 사용 금지, 책임의 한계.",
};

export default function DisclaimerPage() {
  return (
    <SiteChrome>
      <DocArticle>
        <p className="text-sm text-[var(--accent)]">Ride the World – Indoor Cycling · 최종 업데이트: 2026년 3월</p>
        <h1>면책조항 (Disclaimer)</h1>

        <h2>1. 앱의 목적과 성격</h2>
        <p>
          1.1 <strong>Ride the World – Indoor Cycling</strong>(이하 &quot;앱&quot;)은{" "}
          <strong>실내 사이클링 경로 시뮬레이션</strong> 및 <strong>엔터테인먼트</strong> 목적으로만 제공됩니다.
        </p>
        <p>
          1.2 앱에서 제공하는 지도·경로·표고·거리뷰·주행 시뮬레이션 등은 <strong>참고·체험·동기 부여</strong>를 위한
          것이며, 실제 도로 주행·경기·훈련 계획의 공식적 근거나 권고로 사용되어서는 안 됩니다.
        </p>

        <h2>2. 의료·건강 관련 면책</h2>
        <p>
          2.1 앱은 <strong>전문 의료·건강·운동 상담의 대체가 아닙니다.</strong> 앱에 표시되는 코칭·저항·강도 등은
          일반적인 참고용이며, 개인의 건강 상태·질병·연령·체력에 맞는 운동 처방이 아닙니다.
        </p>
        <p>
          2.2 새로운 운동을 시작하거나, 기존 운동 강도·방법을 바꾸기 전에는 반드시 의사 또는 적격 건강·운동 전문가와
          상담하시기 바랍니다.
        </p>
        <p>
          2.3 앱 사용 중 어지러움·호흡 곤란·가슴 통증·근육·관절 통증 등 이상이 있으면 즉시 운동을 중단하고 필요한 경우
          의료 기관을 이용하세요. 앱 개발·운영자는 이러한 증상이나 그로 인한 손해에 대해 어떠한 책임도 지지 않습니다.
        </p>

        <h2>3. 데이터의 정확성</h2>
        <p>
          3.1 앱에 표시되는 경로·거리·고도(표고)·소요 시간 등은 <strong>근사치</strong>이며, 실제 도로·지형·통제·공사·교통
          상황과 다를 수 있습니다.
        </p>
        <p>
          3.2 해당 데이터는 제3자(지도·경로·표고 API 등)가 제공하는 정보를 기반으로 하며, 오류·지연·갱신 부재가 있을 수
          있습니다. 실제 야외 주행·등반·산행 계획이나 거리·고도 측정에는 이 앱만을 근거로 삼지 마세요.
        </p>

        <h2>4. 야외 사용 및 안전</h2>
        <p>
          4.1 앱은 <strong>실내 시뮬레이션용</strong>으로 설계되었습니다.{" "}
          <strong>실제 도로·산길·자전거도로에서의 내비게이션·경로 안내·안전 관련 결정에는 사용하지 마세요.</strong>
        </p>
        <p>
          4.2 야외에서 자전거·도보 등으로 이동할 때는 공식 내비게이션·지도·현지 안내판·교통 규칙을 우선하여 이용하고,
          자신과 타인의 안전을 직접 확인하시기 바랍니다.
        </p>

        <h2>5. 책임의 한계</h2>
        <p>
          5.1 앱의 사용 또는 사용 불능, 앱에 표시된 데이터·코칭·음악 등에 의존한 결과로 발생한 신체적 상해·사망·재산상
          손실·정신적 피해·간접·부수·특별·결과적 손해에 대해 개발자·운영자(LiveOnSoft) 및 관련 당사자는 법령에서 허용하는
          범위 내에서 어떠한 책임도 지지 않습니다.
        </p>
        <p>5.2 이용자는 앱을 자기 책임 하에 이용하는 것으로, 위 면책 내용을 이해하고 동의한 것으로 봅니다.</p>

        <h2>6. 기타</h2>
        <p>
          6.1 본 면책조항은 <a href="/privacy">개인정보처리방침</a> 등과 함께 적용됩니다. 충돌 시 이용자 보호에 더 유리한
          조항이 우선 적용될 수 있습니다.
        </p>
        <p>6.2 본 면책조항은 수정될 수 있으며, 수정 시 앱 또는 문서에 반영·공지됩니다.</p>

        <p>
          <strong>Ride the World – Indoor Cycling</strong> © 2026 LiveOnSoft
        </p>
        <p className="text-xs opacity-80">
          출처: <code className="rounded bg-[var(--card)] px-1">docs/DISCLAIMER_KO.md</code>
        </p>
      </DocArticle>
    </SiteChrome>
  );
}
