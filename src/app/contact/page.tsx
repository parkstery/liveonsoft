import type { Metadata } from "next";
import { DocArticle, SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "문의 | Liveonsoft — Ride the World",
  description: "Ride the World – Indoor Cycling 앱 문의, 응답 안내, 운영자(LiveOnSoft) 연락처.",
};

export default function ContactPage() {
  return (
    <SiteChrome>
      <DocArticle>
        <p className="text-sm text-[var(--accent)]">Ride the World – Indoor Cycling · 최종 업데이트: 2026년 3월</p>
        <h1>문의 및 연락 (Contact)</h1>

        <h2>1. 개요</h2>
        <p>
          <strong>Ride the World – Indoor Cycling</strong>(이하 &quot;앱&quot;)의 개발·운영은 <strong>LiveOnSoft</strong>가
          담당합니다. 앱 이용, 개인정보, 이용약관, 오픈소스 라이선스, 버그·제안 등에 관한 문의는 아래 안내에 따라 주시기
          바랍니다.
        </p>

        <h2>2. 연락처 안내</h2>
        <p>
          앱 관련 문의 사항은 아래 이메일로 연락 주시기 바랍니다.
          <br />
          <a href="mailto:liveonsoft@gmail.com">liveonsoft@gmail.com</a>
        </p>

        <h2>3. 응답에 관한 안내</h2>
        <ul>
          <li>문의에 대해 가능한 범위에서 답변을 드리나, 응답 시일·방식·응답 여부를 보장하지 않습니다.</li>
          <li>개인정보 관련 요청(열람·정정·삭제 등)은 관련 법령 및 개인정보처리방침에 따라 처리합니다.</li>
          <li>
            앱은 <strong>회원가입·로그인을 요구하지 않으며</strong>, 서버에 계정 정보를 저장하지 않습니다. 계정 관련 문의는
            해당 스토어(Google Play 등) 정책을 참고해 주세요.
          </li>
        </ul>

        <h2>4. 운영자</h2>
        <p>
          <strong>LiveOnSoft</strong>
          <br />
          Ride the World – Indoor Cycling 개발·운영
        </p>
        <p>© 2026 LiveOnSoft</p>

        <p className="text-xs opacity-80">
          출처: <code className="rounded bg-[var(--card)] px-1">docs/CONTACT_KO.md</code>
        </p>
      </DocArticle>
    </SiteChrome>
  );
}
