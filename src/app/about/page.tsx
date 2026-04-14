import type { Metadata } from "next";
import { DocArticle, SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "소개 | Liveonsoft — Ride the World",
  description:
    "Ride the World – Indoor Cycling 앱 소개, 주요 기능, 데이터 출처(OSM·OSRM·Nominatim·Open-Elevation·Street View) 및 면책 안내.",
};

export default function AboutPage() {
  return (
    <SiteChrome>
      <DocArticle>
        <p className="text-sm text-[var(--accent)]">Ride the World – Indoor Cycling · 최종 업데이트: 2026년 3월</p>
        <h1>소개 (About)</h1>

        <h2>1. 앱 소개</h2>
        <p>
          <strong>Ride the World – Indoor Cycling</strong>은 실제 지도 위에서 자전거 경로를 계획하고, 고도(표고)를
          확인하며, 선택한 경로를 실내에서 시뮬레이션할 수 있는 앱입니다. 전 세계 어디든 경로를 설정해 실내 자전거로 그
          구간을 타는 듯한 경험을 제공합니다.
        </p>

        <h2>2. 주요 기능</h2>
        <ul>
          <li>
            <strong>실제 지도 기반 경로 계획</strong> — 출발지·도착지·경유지를 입력하거나 지도에서 지정해 자전거·도보·자동차
            경로를 검색합니다.
          </li>
          <li>
            <strong>고도(표고) 분석</strong> — 경로 구간의 표고 차트를 보고 오르막·내리막 구간을 미리 확인할 수 있습니다.
          </li>
          <li>
            <strong>주행 시뮬레이션</strong> — 선택한 경로를 따라 속도를 조절하며 실내에서 주행을 시뮬레이션합니다.
          </li>
          <li>
            <strong>거리뷰(Street View)</strong> — 경로 상의 실제 풍경을 거리뷰로 재생하며 주행감을 더할 수 있습니다.
          </li>
          <li>
            <strong>코칭·배경 음악</strong> — 주행 중 코칭 및 배경 음악 등 부가 기능을 이용할 수 있습니다.
          </li>
        </ul>

        <h2>3. 이런 분들에게</h2>
        <ul>
          <li>새로운 자전거 코스를 계획하고 싶은 사이클리스트</li>
          <li>낯선 지역의 자전거 경로를 미리 살펴보고 싶은 이용자</li>
          <li>오르막·내리막을 확인한 뒤 라이딩을 계획하고 싶은 이용자</li>
          <li>실내에서 전 세계 경로를 시뮬레이션하며 운동하고 싶은 이용자</li>
        </ul>

        <h2>4. 기술 스택</h2>
        <ul>
          <li>
            <strong>프론트엔드</strong> — React 18, TypeScript, Vite, Tailwind CSS
          </li>
          <li>
            <strong>지도·데이터</strong> — 지도 렌더링, 경로·표고·거리뷰 등은 외부 API를 통해 제공됩니다.
          </li>
        </ul>

        <h2>5. 데이터 출처 및 크레딧</h2>
        <table>
          <thead>
            <tr>
              <th>구분</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>지도 데이터</td>
              <td>OpenStreetMap 기반. Map data © OpenStreetMap contributors.</td>
            </tr>
            <tr>
              <td>경로 검색(라우팅)</td>
              <td>OSRM(Open Source Routing Machine). Data © OpenStreetMap contributors.</td>
            </tr>
            <tr>
              <td>주소·장소 검색(지오코딩)</td>
              <td>Nominatim(OpenStreetMap). Data © OpenStreetMap contributors.</td>
            </tr>
            <tr>
              <td>표고(고도) 데이터</td>
              <td>Open-Elevation API</td>
            </tr>
            <tr>
              <td>거리뷰</td>
              <td>Google Maps Street View 등 해당 서비스의 이용 약관 및 저작권 표시를 따릅니다.</td>
            </tr>
            <tr>
              <td>아이콘</td>
              <td>Lucide Icons (Lucide React)</td>
            </tr>
          </tbody>
        </table>
        <p>각 서비스의 이용 조건·저작권·면책 사항은 해당 제공처의 정책을 따릅니다.</p>

        <h2>6. 면책</h2>
        <p>
          본 앱은 <strong>경로 탐색·시뮬레이션·피트니스 엔터테인먼트</strong> 목적으로만 제공됩니다. 지도·경로·표고 정보는
          근사치이며 실제 도로·통제·공사 등과 다를 수 있으므로,{" "}
          <strong>실제 야외 주행·내비게이션·안전 판단에는 사용하지 마세요.</strong> 이용은 <strong>자기 책임</strong> 하에
          하시며, 운동 시작 전 필요 시 의사 또는 건강·운동 전문가와 상담하시기 바랍니다. 자세한 내용은{" "}
          <a href="/disclaimer">면책조항</a>을 참고하세요.
        </p>

        <h2>7. 제작·저작권</h2>
        <p>
          <strong>Ride the World – Indoor Cycling</strong> © 2026 <strong>LiveOnSoft</strong>
        </p>
        <p className="text-xs opacity-80">
          본 페이지는 cycle 프로젝트의 <code className="rounded bg-[var(--card)] px-1">docs/ABOUT_KO.md</code> 내용을
          웹사이트용으로 정리·반영한 것입니다.
        </p>
      </DocArticle>
    </SiteChrome>
  );
}
