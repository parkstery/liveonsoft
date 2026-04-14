import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** 상위 디렉터리에 다른 lockfile이 있을 때 Turbopack이 프로젝트 루트를 오인하지 않도록 고정 */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
