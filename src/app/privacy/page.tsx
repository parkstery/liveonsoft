import type { Metadata } from "next";
import { DocArticle, SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "개인정보처리방침 | Liveonsoft — Ride the World",
  description:
    "Ride the World – Indoor Cycling 개인정보처리방침: 수집 정보, 기기 내 저장, 제3자 서비스, 이용자 권리.",
};

export default function PrivacyPage() {
  return (
    <SiteChrome>
      <DocArticle>
        <p className="text-sm text-[var(--accent)]">Ride the World – Indoor Cycling · 최종 업데이트: 2026년 3월</p>
        <h1>개인정보처리방침 (한국어)</h1>
        <p>
          <strong>개발·운영:</strong> LiveOnSoft · <strong>연락처:</strong>{" "}
          <a href="mailto:liveonsoft@gmail.com">liveonsoft@gmail.com</a>
          <br />
          <strong>앱 유형:</strong> 클라이언트 중심 동작, 자체 서버에 개인정보를 저장하지 않음.
        </p>

        <h2>1. 개요</h2>
        <p>
          Ride the World – Indoor Cycling(이하 &quot;앱&quot;)은 실내 사이클링 경로 시뮬레이션 및 지도·경로 탐색 서비스를
          제공합니다. 본 개인정보처리방침은 앱이 수집·이용·저장하는 정보와 제3자 서비스에 대해 설명합니다.
        </p>

        <h2>2. 수집·이용하는 정보</h2>
        <h3>2.1 사용자가 직접 입력하는 정보</h3>
        <ul>
          <li>
            <strong>경로 검색 입력:</strong> 출발지, 도착지, 경유지 주소 또는 장소명 — 경로 검색, 지도 표시, 표고·거리
            계산. 저장 시에만 아래 &quot;저장 데이터&quot;에 포함될 수 있습니다.
          </li>
          <li>
            <strong>장소 검색어:</strong> 검색창에 입력한 장소명·주소 — 검색 결과 표시. 최근 검색 목록에 검색어만 기기 내에
            저장될 수 있습니다.
          </li>
        </ul>
        <h3>2.2 기기·브라우저에서 자동으로 사용되는 정보</h3>
        <ul>
          <li>
            <strong>위치 정보(선택):</strong> Geolocation API를 통해 사용자 동의 시 현재 위치를 한 번 읽을 수 있습니다.
            서버로 전송되지 않으며, 동의하지 않으면 사용되지 않습니다.
          </li>
          <li>
            <strong>기술 정보:</strong> 브라우저 종류, 화면 크기 등이 제3자(지도·경로·표고 API) 요청 시 일반적인 방식으로
            전달될 수 있습니다.
          </li>
        </ul>
        <h3>2.3 수집하지 않는 정보</h3>
        <p>
          이름, 이메일, 전화번호, 계정 정보, 결제 정보 등 식별 가능한 개인정보는 수집하지 않습니다. 앱은 로그인·회원가입을
          요구하지 않습니다.
        </p>

        <h2>3. 저장 데이터 (기기 내)</h2>
        <p>앱은 자체 서버에 사용자 데이터를 저장하지 않습니다. 아래 데이터는 사용자 기기의 브라우저 저장소(localStorage)에만 저장됩니다.</p>
        <table>
          <thead>
            <tr>
              <th>저장 항목</th>
              <th>내용</th>
              <th>목적</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>favorite_routes</td>
              <td>저장한 경로(출발지, 도착지, 경유지, 경로 지오메트리 등)</td>
              <td>My Routes(즐겨찾기) 복원</td>
            </tr>
            <tr>
              <td>recent_places</td>
              <td>최근 장소 검색어 목록</td>
              <td>검색 편의</td>
            </tr>
          </tbody>
        </table>

        <h2>4. 제3자 서비스 및 전달되는 정보</h2>
        <table>
          <thead>
            <tr>
              <th>서비스</th>
              <th>전달될 수 있는 정보</th>
              <th>이용 목적</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>OpenStreetMap / Nominatim</td>
              <td>검색어, 좌표(역지오코딩)</td>
              <td>주소·장소 검색, 좌표↔주소 변환</td>
            </tr>
            <tr>
              <td>OSRM</td>
              <td>출발·도착·경유지 좌표</td>
              <td>자동차/자전거/도보 경로 계산</td>
            </tr>
            <tr>
              <td>Open-Elevation</td>
              <td>경로 상 좌표</td>
              <td>고도(표고) 데이터 조회</td>
            </tr>
            <tr>
              <td>Google Maps / Street View</td>
              <td>지도 표시용 좌표, 거리뷰 요청</td>
              <td>지도 렌더링, 거리뷰 이미지</td>
            </tr>
          </tbody>
        </table>
        <p>
          정책 참고:{" "}
          <a href="https://operations.osmfoundation.org/policies/" target="_blank" rel="noopener noreferrer">
            OSM Foundation Policies
          </a>
          ,{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google 개인정보처리방침
          </a>
        </p>
        <p>앱은 광고 네트워크나 데이터 브로커에 데이터를 판매·공유하지 않습니다.</p>

        <h2>5. 보관 기간</h2>
        <p>기기 내 저장 데이터는 사용자가 삭제하거나 기기·브라우저 저장소를 초기화할 때까지 유지됩니다.</p>

        <h2>6. 이용자의 권리</h2>
        <ul>
          <li>My Routes에서 항목별 삭제</li>
          <li>최근 검색은 앱에서 제공되는 삭제 기능 또는 브라우저 저장소 비우기</li>
          <li>위치 정보: 브라우저/기기 설정에서 권한 거부</li>
          <li>문의: <a href="mailto:liveonsoft@gmail.com">liveonsoft@gmail.com</a></li>
        </ul>

        <h2>7. 보안</h2>
        <p>HTTPS 등 통신 구간 암호화가 적용된 환경에서의 사용을 권장합니다.</p>

        <h2>8. 아동</h2>
        <p>만 13세(또는 해당 국가 법령상 연령) 미만 아동을 대상으로 개인정보를 의도적으로 수집하지 않습니다.</p>

        <h2>9. 정책 변경</h2>
        <p>본 방침은 법령·서비스 변경에 따라 수정될 수 있으며, 변경 후에도 앱을 계속 이용하시면 변경된 정책에 동의한 것으로 봅니다.</p>

        <h2>10. 적용 법령 및 관할</h2>
        <p>대한민국 이용자의 경우 개인정보 보호법 등 관련 법령이 적용될 수 있습니다.</p>

        <p>
          <strong>Ride the World – Indoor Cycling</strong> © 2026 LiveOnSoft
        </p>
        <p className="text-xs opacity-80">
          출처: <code className="rounded bg-[var(--card)] px-1">docs/PRIVACY_POLICY_KO.md</code> · 앱 내{" "}
          <code className="rounded bg-[var(--card)] px-1">PRIVACY_POLICY.html</code> 과 함께 참고할 수 있습니다.
        </p>
      </DocArticle>
    </SiteChrome>
  );
}
