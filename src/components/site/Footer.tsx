import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-gradient-warm">
      <div className="absolute inset-0 bg-gradient-glow opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-3">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Handcrafted cakes & Italian-inspired meals, baked with patience from a small kitchen in Italy.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="text-xs uppercase tracking-[0.32em] text-muted-foreground">Explore</h4>
          <Link to="/about" className="block hover:text-gold transition-colors">Our story</Link>
          <Link to="/menu" className="block hover:text-gold transition-colors">Menu</Link>
          <Link to="/gallery" className="block hover:text-gold transition-colors">Gallery</Link>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="block hover:text-gold transition-colors">Order on WhatsApp</a>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="text-xs uppercase tracking-[0.32em] text-muted-foreground">Reach Osato</h4>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="block text-foreground/80 hover:text-gold transition-colors">WhatsApp · all orders</a>
          <p className="text-foreground/80">Based in Italy · Available for events</p>
          <p className="text-foreground/80">Mon – Sat · By appointment</p>
        </div>
      </div>
      <div className="relative border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-muted-foreground flex justify-between">
          <span>© {new Date().getFullYear()} Osato Bakes</span>
          <span className="italic font-display">Baked with love</span>
        </div>
      </div>
    </footer>
  );
}