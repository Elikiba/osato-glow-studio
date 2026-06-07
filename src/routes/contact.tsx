import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { whatsappLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Order with osatobakes" },
      { name: "description", content: "Place a custom order or enquire about catering with Osato — a baker and caterer based in Italy." },
      { property: "og:title", content: "Contact — Order with osatobakes" },
      { property: "og:description", content: "Place a custom order or enquire about catering with osatobakes." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="px-6 lg:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16">
          <div className="space-y-8 animate-fade-up">
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Place an order</span>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
              Tell me about<br /><span className="italic text-gold">your day</span>.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              All orders are placed via WhatsApp. Send me a quick message — the date, the occasion, a flavour you love — and I'll reply personally, usually within a day.
            </p>
            <div className="space-y-4 pt-4 text-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">WhatsApp</p>
                <p className="font-display text-xl mt-1">+{WHATSAPP_NUMBER}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Based in</p>
                <p className="font-display text-xl mt-1">Italy · Available for events nearby</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Hours</p>
                <p className="font-display text-xl mt-1">Mon – Sat · By appointment</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-glow blur-3xl opacity-70 animate-glow-pulse" />
            <div className="relative bg-card border border-border/60 rounded-[2rem] p-8 md:p-12 shadow-soft space-y-6 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-gold flex items-center justify-center text-2xl text-white shadow-glow">
                ✦
              </div>
              <h3 className="font-display text-3xl md:text-4xl">Order on WhatsApp</h3>
              <p className="text-muted-foreground leading-relaxed">
                One tap opens a chat with me. Share your date, occasion and any flavour ideas — I'll send back a personal quote.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-foreground text-background text-sm tracking-wide hover:shadow-glow transition-all"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Open WhatsApp chat →
              </a>
              <p className="text-xs text-muted-foreground italic pt-2">
                Replies usually within a day · Mon – Sat
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}