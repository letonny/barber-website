"use client";

import { useState } from "react";
import { bookingHref, navItems, siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="site-header">
    <div className="container header-inner">
      <a className="brand" href="#home" aria-label={`${siteConfig.brand} home`} onClick={() => setMenuOpen(false)}><span className="brand-mark">{siteConfig.mark}<span className="brand-dot">.</span></span><span className="brand-name">{siteConfig.brand}<small>BARBER / PORTFOLIO</small></span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
      <a className="button button-lime header-book" href={bookingHref}>Book now <span aria-hidden="true">↗</span></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
    </div>
    {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{navItems.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<span aria-hidden="true">↗</span></a>)}<a className="button button-lime" href={bookingHref} onClick={() => setMenuOpen(false)}>Book now <span aria-hidden="true">↗</span></a></nav>}
  </header>;
}
