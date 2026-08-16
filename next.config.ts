import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const inferredBasePath =
  process.env.GITHUB_ACTIONS === "true" && repository && !repository.endsWith(".github.io")
    ? `/${repository}`
    : "";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? inferredBasePath;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  typescript: {
    tsconfigPath: process.env.NEXT_TS_CONFIG ?? "tsconfig.json",
  },
};

export default nextConfig;
