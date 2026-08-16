import type { Metadata, Viewport } from "next";
import "./globals.css";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "aerowisp";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.GITHUB_ACTIONS === "true" && !repository.endsWith(".github.io") ? `/${repository}` : "");
const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://guogxy.github.io/aerowisp/");
const socialImageUrl = new URL("aerowisp-icon.png", siteUrl);

export const viewport: Viewport = { themeColor: "#05080f", colorScheme: "dark" };
export const metadata: Metadata = { metadataBase: siteUrl, title: { default: "AeroWisp — A living radar for the sky", template: "%s — AeroWisp" }, description: "A cinematic live-airspace instrument and ambient display for iPhone and iPad.", applicationName: "AeroWisp", robots: { index: true, follow: true }, icons: { icon: `${basePath}/favicon.svg`, shortcut: `${basePath}/favicon.svg` }, openGraph: { type: "website", siteName: "AeroWisp", title: "AeroWisp — A living radar for the sky", description: "See the airspace around you as a calm, cinematic instrument.", images: [{ url: socialImageUrl, width: 1024, height: 1024, alt: "AeroWisp app icon" }] } };

const languageBootScript = `try { const saved = localStorage.getItem("aerowisp-language"); const language = saved === "zh" || saved === "en" ? saved : navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en"; document.documentElement.dataset.language = language; document.documentElement.lang = language === "zh" ? "zh-Hans" : "en"; } catch (_) {}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" data-language="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: languageBootScript }} /></head><body>{children}</body></html>; }
