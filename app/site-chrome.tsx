"use client";

import Link from "next/link";

function LanguageToggle() {
  function toggleLanguage() {
    const current = document.documentElement.dataset.language === "zh" ? "zh" : "en";
    const next = current === "en" ? "zh" : "en";
    document.documentElement.dataset.language = next;
    document.documentElement.lang = next === "zh" ? "zh-Hans" : "en";
    try { window.localStorage.setItem("aerowisp-language", next); } catch { /* optional */ }
  }

  return <button className="language-toggle" type="button" onClick={toggleLanguage} aria-label="Toggle language / 切换语言"><span data-lang="en">中文</span><span data-lang="zh">EN</span></button>;
}

export function SiteHeader() {
  return <><a className="skip-link" href="#main-content"><span data-lang="en">Skip to content</span><span data-lang="zh">跳到正文</span></a><header className="site-header"><nav className="nav-wrap" aria-label="Primary navigation"><Link className="brand" href="/" aria-label="AeroWisp home"><span className="brand-mark" aria-hidden="true"><i /></span><span>Aero<b>Wisp</b></span></Link><div className="nav-links"><Link href="/#features"><span data-lang="en">Features</span><span data-lang="zh">功能</span></Link><Link href="/support/"><span data-lang="en">Support</span><span data-lang="zh">支持</span></Link><Link href="/privacy/"><span data-lang="en">Privacy</span><span data-lang="zh">隐私</span></Link><LanguageToggle /></div></nav></header></>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-wrap"><div className="footer-copy"><div className="brand footer-brand"><span className="brand-mark small" aria-hidden="true"><i /></span><span>Aero<b>Wisp</b></span></div><p>© 2026 guogxy. <span data-lang="en">All rights reserved.</span><span data-lang="zh">保留所有权利。</span></p></div><div className="footer-links"><Link href="/support/"><span data-lang="en">Support</span><span data-lang="zh">支持</span></Link><Link href="/privacy/"><span data-lang="en">Privacy</span><span data-lang="zh">隐私政策</span></Link><Link href="/terms/"><span data-lang="en">Terms</span><span data-lang="zh">使用条款</span></Link><Link href="/licenses/"><span data-lang="en">Data &amp; licenses</span><span data-lang="zh">数据与许可</span></Link></div></div></footer>;
}
