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
    "Ride the World - Indoor Cycling: OSRM·Nominatim·Open-Elevation 기반 경로·고도, Google Maps·Street View 시각화, 로컬 규칙·TTS AI 코칭. PWA 및 Capacitor Android 지원.",
  keywords: [
    "Liveonsoft",
    "Ride the World",
    "Indoor Cycling",
    "GIS",
    "지도",
    "사이클 시뮬레이터",
    "OSRM",
    "Street View",
    "PWA",
  ],
  openGraph: {
    title: "Liveonsoft | 지도·GIS 기반 소프트웨어",
    description:
      "전 세계 코스를 실내에서—오픈 데이터 경로·고도와 Street View, 로컬 AI 코칭(TTS)으로 가상 라이딩.",
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
