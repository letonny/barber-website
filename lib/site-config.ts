// Replace these placeholders with approved client details before launch.
export const siteConfig = {
  brand: "YOUR BARBER",
  mark: "YB",
  copyrightYear: "2026",
  tagline: "Clean fades. Sharp tapers. A cut that speaks for itself.",
  intro: "I'm a barber focused on clean details, good energy, and cuts that feel like you. This is a space for the work, the process, and whatever comes next.",
  bookingUrl: "" as string, // Add the real booking URL when it is ready.
  socials: [
    { label: "Instagram", href: "" },
    { label: "TikTok", href: "" },
  ],
  services: [
    { number: "01", name: "Signature Cut", detail: "A tailored cut, finished with the details.", price: "Price TBA", duration: "Time TBA" },
    { number: "02", name: "Fade / Taper", detail: "Clean blends and a finish made to last.", price: "Price TBA", duration: "Time TBA" },
    { number: "03", name: "Lineup", detail: "Sharp edges for a fresh reset.", price: "Price TBA", duration: "Time TBA" },
  ],
  cuts: [
    { category: "Tapers", title: "The clean taper", image: true },
    { category: "Fades", title: "The fresh fade", image: false },
    { category: "Lineups", title: "The sharp lineup", image: false },
    { category: "Other", title: "Your next look", image: false },
  ],
} as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "My Cuts", href: "#cuts" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const bookingHref = siteConfig.bookingUrl || "#booking";
