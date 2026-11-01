import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { bookingHref, navItems, siteConfig } from "@/lib/site-config";

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p><h2>{title}</h2></div>{copy && <p className="section-copy">{copy}</p>}</div>;
}

function Placeholder({ label, compact = false }: { label: string; compact?: boolean }) {
  return <div className={`photo-placeholder ${compact ? "photo-placeholder-compact" : ""}`} role="img" aria-label={`${label} photo placeholder`}>
    <span className="placeholder-orbit" aria-hidden="true" /><span className="placeholder-cross" aria-hidden="true">+</span>
    <span className="placeholder-caption">PHOTO PLACEHOLDER <span>—</span> {label}</span>
  </div>;
}

export default function Home() {
  return <>
    <SiteHeader />
    <main id="home">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" />THE NEXT CUT STARTS HERE</p>
          <h1 id="hero-title">FRESH CUTS.<br /><em>NO COMPROMISE.</em></h1>
          <p className="hero-description">{siteConfig.tagline} Book your seat and leave looking different.</p>
          <div className="hero-actions"><a className="button button-lime" href={bookingHref}>Book now <span aria-hidden="true">↗</span></a><a className="button button-outline" href="#cuts">View my cuts <span aria-hidden="true">↗</span></a></div>
          <div className="hero-footnote"><span className="footnote-spark" aria-hidden="true">✳</span><span>YOUR LOOK. YOUR RULES.<br />THE DETAILS MATTER.</span></div>
        </div>
        <div className="hero-visual">
          <Image src="/editorial-cut-placeholder.jpg" alt="Editorial sample of a taper haircut; replace with the barber's own photo" fill priority sizes="(max-width: 800px) 100vw, 48vw" className="hero-image" />
          <span className="visual-stamp">CUT<br />ABOVE<span>↗</span></span>
          <span className="photo-disclaimer">EDITORIAL PLACEHOLDER · REPLACE WITH CLIENT PHOTO</span>
          <span className="visual-side-label">PRECISION IN EVERY DETAIL — 001</span>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="down-arrow" aria-hidden="true">↓</span><span>EST. YOUR NEXT MOVE</span></div>
      </section>

      <section id="cuts" className="section cuts-section"><div className="container">
        <SectionHeading eyebrow="01 / THE WORK" title="CUTS THAT TALK." copy="Every detail makes the difference. Real portfolio photos are coming soon — here’s a preview of the work to expect." />
        <div className="cut-grid">{siteConfig.cuts.map((cut, index) => <article className="cut-card" key={cut.category}>
          <div className="cut-image">
            {cut.image ? <Image src="/editorial-cut-placeholder.jpg" alt="Editorial sample taper haircut; not client portfolio work" fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw" /> : <Placeholder label={cut.category.toUpperCase()} compact />}
            <span className="cut-number">0{index + 1} / 04</span>
            {cut.image && <span className="cut-sample-label">SAMPLE IMAGE</span>}
          </div>
          <div className="cut-meta"><div><span>{cut.category}</span><h3>{cut.title}</h3></div><span className="cut-arrow" aria-hidden="true">↗</span></div>
        </article>)}</div>
        <p className="portfolio-note">Portfolio imagery is placeholder content until approved client photos are added.</p>
      </div></section>

      <section id="services" className="section services-section"><div className="container">
        <SectionHeading eyebrow="02 / THE MENU" title="FIND YOUR FIT." copy="From the everyday reset to a whole new look. Final services, prices, and times will be confirmed before launch." />
        <div className="service-grid">{siteConfig.services.map((service) => <article className="service-card" key={service.number}>
          <div className="service-top"><span>{service.number} / SERVICE</span><span aria-hidden="true">↗</span></div>
          <div><h3>{service.name}</h3><p>{service.detail}</p></div>
          <div className="service-bottom"><span>{service.price}</span><span>{service.duration}</span></div>
        </article>)}</div>
        <a className="text-link" href={bookingHref}>Ready for the chair? Book now <span aria-hidden="true">↗</span></a>
      </div></section>

      <section id="about" className="section about-section"><div className="container about-grid">
        <div className="about-photo"><Placeholder label="BARBER PORTRAIT" /><span className="about-photo-tag">THE PERSON BEHIND THE CUT</span></div>
        <div className="about-copy"><p className="eyebrow"><span className="eyebrow-line" />03 / BEHIND THE CHAIR</p><h2>MORE THAN<br /><em>A HAIRCUT.</em></h2><p>{siteConfig.intro}</p><p className="editable-note">Introduction is placeholder copy. Add the barber’s real story here.</p><div className="about-socials"><span>FIND ME ON</span>{siteConfig.socials.map((social) => social.href ? <a className="social-placeholder" key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">{social.label} ↗</a> : <span className="social-placeholder" key={social.label}>{social.label} <small>COMING SOON</small></span>)}</div></div>
      </div></section>

      <section id="booking" className="booking-section"><div className="container booking-inner"><div><p className="eyebrow"><span className="eyebrow-line" />04 / MAKE YOUR MOVE</p><h2>YOUR NEXT CUT<br />IS <em>CALLING.</em></h2><p>{siteConfig.bookingUrl ? "Ready to make it happen? Claim your spot." : "Ready to make it happen? Booking details are coming soon."}</p></div><div className="booking-action">{siteConfig.bookingUrl ? <a className="button button-dark" href={siteConfig.bookingUrl}>Book your appointment <span aria-hidden="true">↗</span></a> : <span className="button button-dark" aria-disabled="true">Booking opens soon <span aria-hidden="true">↗</span></span>}<small>{siteConfig.bookingUrl ? "Booking is handled by the barber’s booking provider." : "Booking link placeholder — add a real URL in site config."}</small></div></div></section>
    </main>
    <footer id="contact" className="site-footer"><div className="container"><div className="footer-main"><div><a className="brand footer-brand" href="#home"><span className="brand-mark">{siteConfig.mark}<span className="brand-dot">.</span></span><span className="brand-name">{siteConfig.brand}<small>BARBER / PORTFOLIO</small></span></a><p>Good cuts. Good energy.<br />See you in the chair.</p></div><nav aria-label="Footer navigation">{navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav><div className="footer-social"><span>FOLLOW THE WORK</span>{siteConfig.socials.map((social) => social.href ? <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">{social.label} ↗</a> : <span key={social.label}>{social.label} <small>COMING SOON</small></span>)}</div></div><div className="footer-bottom"><span>© {siteConfig.copyrightYear} {siteConfig.brand}. ALL RIGHTS RESERVED.</span><span>BUILT FOR THE NEXT LOOK ↗</span></div></div></footer>
  </>;
}
