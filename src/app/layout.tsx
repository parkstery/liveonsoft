import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Liveonsoft | 지도·GIS 기반 소프트웨어",
  description:
    "실시간 고도 분석과 AI 코칭이 있는 웹 기반 사이클 시뮬레이터, Ride the World - Indoor Cycling. 모바일 최적화 지도 소프트웨어를 개발합니다.",
  keywords: ["Liveonsoft", "Ride the World", "Indoor Cycling", "GIS", "지도", "사이클 시뮬레이터"],
  openGraph: {
    title: "Liveonsoft | 지도·GIS 기반 소프트웨어",
    description: "Ride the World - Indoor Cycling. 실내에서 전 세계 경로를 가상 주행하세요.",
    url: "https://liveonsoft.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${outfit.variable} ${jetbrainsMono.variable} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
