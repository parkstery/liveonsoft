import type { Metadata } from "next";
import { DocArticle, SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "오픈소스 라이선스 | Liveonsoft — Ride the World",
  description: "Ride the World – Indoor Cycling에서 사용하는 지도·데이터 서비스 및 오픈소스 패키지 라이선스 안내.",
};

export default function LicensesPage() {
  return (
    <SiteChrome>
      <DocArticle>
        <p className="text-sm text-[var(--accent)]">Ride the World – Indoor Cycling · 최종 업데이트: 2026년 3월</p>
        <h1>오픈소스 라이선스 (Open Source Licenses)</h1>

        <h2>1. 개요</h2>
        <p>
          본 앱(<strong>Ride the World – Indoor Cycling</strong>)은 여러 오픈소스 소프트웨어 구성 요소와 지도·데이터
          서비스를 사용하여 제작되었습니다.
        </p>

        <h2>2. 지도·데이터 서비스 (Map &amp; Data Services)</h2>
        <table>
          <thead>
            <tr>
              <th>서비스</th>
              <th>용도</th>
              <th>라이선스 / 이용 조건</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>OpenStreetMap (OSM)</td>
              <td>지도 타일, 지리 데이터</td>
              <td>
                ©{" "}
                <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">
                  OpenStreetMap contributors
                </a>
                . ODbL 및 기타 OSM 정책.
              </td>
            </tr>
            <tr>
              <td>Nominatim</td>
              <td>주소·장소 검색(지오코딩)</td>
              <td>
                <a href="https://operations.osmfoundation.org/policies/nominatim/" target="_blank" rel="noopener noreferrer">
                  Nominatim 사용 정책
                </a>
              </td>
            </tr>
            <tr>
              <td>OSRM</td>
              <td>자동차/자전거/도보 경로 계산</td>
              <td>OSM 기반. 해당 배포·서비스의 이용 약관.</td>
            </tr>
            <tr>
              <td>Open-Elevation</td>
              <td>경로 상 표고 데이터</td>
              <td>해당 API 제공자의 이용 조건·고지.</td>
            </tr>
            <tr>
              <td>Google Maps / Street View</td>
              <td>지도 표시, 거리뷰 이미지 (사용 시)</td>
              <td>
                © Google.{" "}
                <a href="https://cloud.google.com/maps-platform/terms" target="_blank" rel="noopener noreferrer">
                  Maps Platform 이용약관
                </a>
                ,{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  개인정보처리방침
                </a>
                .
              </td>
            </tr>
          </tbody>
        </table>

        <h2>3. 사용 중인 오픈소스 소프트웨어 (패키지)</h2>
        <h3>3.1 실행/런타임 의존성 (dependencies)</h3>
        <table>
          <thead>
            <tr>
              <th>패키지</th>
              <th>설명</th>
              <th>라이선스</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>react</td>
              <td>사용자 인터페이스 라이브러리</td>
              <td>MIT</td>
            </tr>
            <tr>
              <td>react-dom</td>
              <td>React용 DOM 렌더러</td>
              <td>MIT</td>
            </tr>
            <tr>
              <td>lucide-react</td>
              <td>아이콘 컴포넌트 라이브러리</td>
              <td>ISC</td>
            </tr>
            <tr>
              <td>recharts</td>
              <td>차트 및 데이터 시각화</td>
              <td>MIT</td>
            </tr>
          </tbody>
        </table>

        <h3>3.2 개발 의존성 (devDependencies)</h3>
        <table>
          <thead>
            <tr>
              <th>패키지</th>
              <th>설명</th>
              <th>라이선스</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>typescript</td>
              <td>TypeScript 언어 및 컴파일러</td>
              <td>Apache-2.0</td>
            </tr>
            <tr>
              <td>vite</td>
              <td>프론트엔드 빌드 도구</td>
              <td>MIT</td>
            </tr>
            <tr>
              <td>@vitejs/plugin-react</td>
              <td>Vite React 플러그인</td>
              <td>MIT</td>
            </tr>
            <tr>
              <td>@types/node</td>
              <td>Node.js 타입 정의</td>
              <td>MIT</td>
            </tr>
            <tr>
              <td>tailwindcss</td>
              <td>유틸리티 기반 CSS 프레임워크</td>
              <td>MIT</td>
            </tr>
            <tr>
              <td>postcss</td>
              <td>CSS 변환 도구</td>
              <td>MIT</td>
            </tr>
            <tr>
              <td>autoprefixer</td>
              <td>CSS 벤더 접두사 자동 추가</td>
              <td>MIT</td>
            </tr>
          </tbody>
        </table>

        <h2>4. 주요 라이선스 요약</h2>
        <ul>
          <li>
            <strong>MIT</strong> — 사용·복제·수정·배포·상업적 이용 가능. 라이선스 문구와 저작권 표시 유지.
          </li>
          <li>
            <strong>Apache-2.0</strong> — 사용·수정·배포·특허 사용 허여. 변경 시 고지 및 라이선스 문구 포함.
          </li>
          <li>
            <strong>ISC</strong> — 관대한 조건, 저작권 표시와 라이선스 문구 유지.
          </li>
        </ul>

        <h2>5. 고지 및 준수</h2>
        <p>본 앱은 위 오픈소스 라이선스 조건을 준수합니다. 정확한 전문은 각 패키지 공식 저장소 또는 npm 페이지를 참고하세요.</p>

        <h2>6. 문의</h2>
        <p>
          오픈소스 라이선스 관련 문의: <a href="mailto:liveonsoft@gmail.com">liveonsoft@gmail.com</a>
        </p>

        <p className="text-xs opacity-80">
          출처: <code className="rounded bg-[var(--card)] px-1">docs/OPEN_SOURCE_LICENSES_KO.md</code>
        </p>
      </DocArticle>
    </SiteChrome>
  );
}
