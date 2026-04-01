# Liveonsoft 공식 웹사이트

**liveonsoft.com** — 지도 기반 소프트웨어 및 Ride the World (Indoor Cycling) 앱 소개 사이트.

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속.

## Vercel 배포

1. [Vercel](https://vercel.com)에 로그인 후 **Import** → 이 저장소 연결 (또는 `liveonsoft` 폴더 업로드).
2. **Settings → Domains**에서 `liveonsoft.com` 도메인 추가.
3. 도메인 DNS에서 Vercel이 안내하는 레코드(CNAME 등) 설정.
4. 배포 후 자동으로 `liveonsoft.com`에 반영됩니다.

## 기술 스택

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4

## 콘텐츠

- 개발 보고서(20260131-Dev. Report.md) 및 사용자 매뉴얼 요약 반영.
- Android 앱 **Ride the World - Indoor Cycling** 소개 및 다운로드 CTA.

Google Play 앱이 등록되면 `page.tsx` 내 다운로드 링크(`#download` 섹션)의 URL을 실제 스토어 주소로 수정하면 됩니다.
