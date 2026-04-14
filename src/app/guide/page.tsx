import type { Metadata } from "next";
import { DocArticle, SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "사용자 가이드 | Liveonsoft — Ride the World",
  description:
    "Ride the World – Indoor Cycling 상세 가이드: 경로 설정, 주행·속도, Street View, 표고 차트, 코칭·음악, 검색·즐겨찾기.",
};

export default function GuidePage() {
  return (
    <SiteChrome>
      <DocArticle>
        <p className="text-sm text-[var(--accent)]">Ride the World – Indoor Cycling · 사용자 상세 가이드 (한국어)</p>
        <h1>사용자 상세 가이드</h1>
        <p>
          실내 자전거나 운동 시, 전 세계 실제 도로 경로를 선택해 고도·거리뷰와 함께 시뮬레이션할 수 있습니다. 데이터 출처:
          지도(OpenStreetMap), 경로(OSRM), 표고(Open-Elevation API) 등.
        </p>

        <h2>1. 앱 소개</h2>
        <ul>
          <li>실제 지도 위에서 자전거/도보/자동차 경로를 계획</li>
          <li>고도(표고) 확인</li>
          <li>거리뷰(Street View)로 실제 풍경을 보며</li>
          <li>실내에서 선택한 속도로 주행 시뮬레이션</li>
        </ul>

        <h2>2. 처음 시작하기</h2>
        <ul>
          <li>앱을 열면 지도가 로드됩니다.</li>
          <li>화면 왼쪽 아래에 경로 설정 패널이 있습니다. (접혀 있으면 경유지 아이콘으로 펼칩니다.)</li>
          <li>출발(Start)과 도착(End) 두 곳을 정하면 경로를 검색할 수 있습니다.</li>
        </ul>
        <p>
          <strong>방법 1:</strong> Start/End 칸에 입력하면 자동완성 추천이 나타납니다. 목록에서 선택하거나 키보드 ↑/↓ 후
          Enter로 선택합니다.
        </p>
        <p>
          <strong>방법 2:</strong> 지도나 경로 위를 클릭하면 주소·좌표·표고 팝업이 뜹니다. 팝업에서 START (A) / WAYPOINT /
          END (B)로 지정합니다.
        </p>

        <h2>3. 경로 설정</h2>
        <h3>3.1 출발·도착·경유지</h3>
        <table>
          <thead>
            <tr>
              <th>입력란</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Start (파란 점)</td>
              <td>출발지. 주소 입력 또는 지도 클릭 후 START (A)</td>
            </tr>
            <tr>
              <td>End (빨간 점)</td>
              <td>도착지. 주소 입력 또는 지도 클릭 후 END (B)</td>
            </tr>
            <tr>
              <td>Waypoint</td>
              <td>경유지. 최대 3개까지. 지도 클릭 후 WAYPOINT로 추가</td>
            </tr>
          </tbody>
        </table>
        <p>각 입력란 오른쪽 X로 삭제합니다. 경유지는 1, 2, 3 번호로 표시됩니다.</p>

        <h3>3.2 경로 모드 (자동차 / 자전거 / 도보)</h3>
        <ul>
          <li>
            <strong>자동차(Car)</strong> — 자동차 경로
          </li>
          <li>
            <strong>자전거(Bike)</strong> — 자전거 경로
          </li>
          <li>
            <strong>도보(Foot)</strong> — 도보 경로
          </li>
        </ul>
        <p>Go를 누르기 전에 원하는 모드를 선택하세요.</p>

        <h3>3.3 기타 경로 버튼</h3>
        <ul>
          <li>
            <strong>↕</strong> — 출발과 도착 스왑 (A↔B)
          </li>
          <li>
            <strong>★</strong> — 현재 경로를 My Routes에 저장. 최대 5개.
          </li>
          <li>
            <strong>휴지통</strong> — 현재 경로와 마커 삭제. 출발/도착 입력은 유지될 수 있습니다.
          </li>
        </ul>

        <h3>3.4 거리·시간</h3>
        <p>경로가 계산되면 거리(km)와 예상 시간이 표시됩니다. 시뮬레이션 속도에 따라 체감 시간이 달라집니다.</p>

        <h2>4. 주행 모드와 속도</h2>
        <p>
          <strong>속도 설정(문서 기준 10~70 km/h):</strong> 숫자 입력, − / + 버튼(1 km/h), 슬라이더로 조절합니다. 시뮬레이션
          주행 속도이며, 실내 자전거에서는 페달 강도로 맞추면 됩니다. (앱 버전에 따라 상한이 다를 수 있습니다.)
        </p>

        <h2>5. 주행 시작과 컨트롤</h2>
        <p>
          출발·도착을 입력하고 경로가 표시된 상태에서 <strong>Go</strong>를 누릅니다. 처음 경로 검색 시: 경로 검색 →
          거리뷰 준비 → <strong>3, 2, 1, Start!</strong> 카운트다운 후 시작됩니다. 같은 경로를 다시 탈 때는 카운트다운만
          진행될 수 있습니다.
        </p>
        <table>
          <thead>
            <tr>
              <th>버튼</th>
              <th>기능</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>▶ Play</td>
              <td>시작 또는 재개</td>
            </tr>
            <tr>
              <td>⏸ Pause</td>
              <td>일시정지</td>
            </tr>
            <tr>
              <td>↺ Restart</td>
              <td>처음부터 다시</td>
            </tr>
            <tr>
              <td>■ Stop</td>
              <td>완전 정지(위치·시간 초기화)</td>
            </tr>
          </tbody>
        </table>

        <h2>6. 거리뷰(Street View)</h2>
        <ul>
          <li>오른쪽 위 거리뷰 아이콘으로 켜기/끄기.</li>
          <li>확대/축소 아이콘으로 전체 화면 ↔ 상단 절반 + 하단 지도 전환. 전체 화면 시 미니 맵 표시.</li>
          <li>경로(라우트) 아이콘으로 거리뷰 가능 도로를 지도에 표시. 일부 구간은 없을 수 있습니다.</li>
          <li>Google 공식 이미지가 없으면 사용자 제작 파노라마가 사용될 수 있습니다.</li>
        </ul>

        <h2>7. 표고 차트와 위치 이동</h2>
        <p>경로가 있으면 표고 차트 패널에서 고도 변화와 현재 주행 위치(흰색 세로선)를 확인합니다.</p>
        <p>차트 양쪽 ◀ / ▶로 경로 상 위치를 앞뒤로 점프할 수 있습니다.</p>

        <h2>8. 스마트 코칭과 음악</h2>
        <ul>
          <li>코칭이 켜져 있으면 경사·속도 등에 맞춰 팁이 표시됩니다.</li>
          <li>마이크 아이콘: 코칭 on/off. 말풍선: 코칭 문구 표시만 on/off.</li>
          <li>음악 아이콘: 배경 음악 on/off.</li>
        </ul>

        <h2>9. 장소 검색과 즐겨찾기</h2>
        <ul>
          <li>왼쪽 위 돋보기로 검색창을 열고 장소명·주소를 입력 후 Enter — Recent에 검색어가 쌓일 수 있습니다.</li>
          <li>My Routes: 패널을 넓히면 목록이 보입니다. 최대 5개 저장, 클릭으로 불러오기, X로 삭제.</li>
        </ul>

        <h2>10. 메뉴와 정보</h2>
        <p>앱 내 메뉴에서 About, 도움말(간단/상세), 법적 고지(Privacy, Terms, Disclaimer, Open Source), Contact 등을 확인할 수 있습니다.</p>

        <h2>11. 주의사항 및 면책</h2>
        <p>
          야외 내비게이션·안전 판단에 앱만 의존하지 마세요. 의료·건강 관련 면책 및 데이터 정확성 한계는{" "}
          <a href="/disclaimer">면책조항</a>을 참고하세요.
        </p>

        <p className="text-xs opacity-80">
          출처: <code className="rounded bg-[var(--card)] px-1">docs/DETAILED_GUIDE_KO.md</code> · 앱 버전에 따라 화면·문구가
          다를 수 있습니다. 내부 메뉴·문서 구조 점검은 <code className="rounded bg-[var(--card)] px-1">MENU_DOCS_APPLY_CHECKLIST.md</code> 등
          개발 문서를 참고했습니다.
        </p>
      </DocArticle>
    </SiteChrome>
  );
}
