/** 실제 앱 캡처 — public/gallery 에 복사된 파일명과 동일 */
export type GalleryItem = {
  src: string;
  label: string;
  layout: "portrait" | "landscape";
};

export const APP_GALLERY: GalleryItem[] = [
  { src: "/gallery/land_map1.jpg", label: "도로 지도 — 넓은 시야", layout: "landscape" },
  { src: "/gallery/land_map_half.jpg", label: "지도 + 경로 패널 (가로)", layout: "landscape" },
  { src: "/gallery/land_map_route.jpg", label: "경로가 강조된 지도", layout: "landscape" },
  { src: "/gallery/land_route_view1.jpg", label: "경로 뷰 / 진행", layout: "landscape" },
  { src: "/gallery/land_search_places.jpg", label: "장소 검색", layout: "landscape" },
  { src: "/gallery/land_sat_route.jpg", label: "위성 + 경로", layout: "landscape" },
  { src: "/gallery/land_sat_route_setting.jpg", label: "위성 — 출발·도착 설정", layout: "landscape" },
  { src: "/gallery/land_sat_route_waypoints.jpg", label: "위성 — 경유 포함 경로", layout: "landscape" },
  { src: "/gallery/land_road_coverage.jpg", label: "거리뷰 커버리지 레이어", layout: "landscape" },
  { src: "/gallery/land_streetview_full.jpg", label: "Street View 전체 화면", layout: "landscape" },
  { src: "/gallery/land_streetview_full2.jpg", label: "Street View + 지도 분할", layout: "landscape" },
  { src: "/gallery/land_myroutes1.jpg", label: "My Routes 목록", layout: "landscape" },
  { src: "/gallery/portrait_sat_full.jpg", label: "위성 전체 (세로)", layout: "portrait" },
  { src: "/gallery/portrait_sat_route.jpg", label: "위성 + 경로 (세로)", layout: "portrait" },
  { src: "/gallery/portrait_sat_half_route_setting.jpg", label: "경로 설정 패널 (세로)", layout: "portrait" },
  { src: "/gallery/portrait_sat_half_elevation.jpg", label: "표고 패널 (세로)", layout: "portrait" },
  { src: "/gallery/portrait_map_route_view.jpg", label: "도로 지도 + 경로 (세로)", layout: "portrait" },
  { src: "/gallery/portrait_map_location_pointing.jpg", label: "지도 위치 지정", layout: "portrait" },
  { src: "/gallery/portrait_sv_full_elevation.jpg", label: "Street View + 표고 (세로)", layout: "portrait" },
  { src: "/gallery/portratir_sat_road_coverage.jpg", label: "위성 + 커버리지 (세로)", layout: "portrait" },
];

/** 제품 카드 옆 캐러셀에 우선 노출할 고해상도 샷 */
export const PRODUCT_CAROUSEL_SOURCES = [
  "/gallery/portrait_sv_full_elevation.jpg",
  "/gallery/land_streetview_full2.jpg",
  "/gallery/portrait_sat_half_elevation.jpg",
  "/gallery/land_sat_route_waypoints.jpg",
  "/gallery/portrait_map_route_view.jpg",
] as const;
