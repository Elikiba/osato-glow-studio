import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import aboutHands from "@/assets/about-hands.jpg";
import galleryTart from "@/assets/gallery-tart.jpg";
import galleryMacarons from "@/assets/gallery-macarons.jpg";
import galleryWedding from "@/assets/gallery-wedding.jpg";
import founderAsset from "@/assets/osato-founder.png.asset.json";
import heroCakeAsset from "@/assets/hero-cake-pink.jpg.asset.json";
import realJollofChicken from "@/assets/real-jollof-chicken.jpg.asset.json";
import realCakePink from "@/assets/real-cake-pink.jpg.asset.json";
import realCakeRoses from "@/assets/real-cake-roses.jpg.asset.json";
import { whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Osato Bakes — Handcrafted Cakes & Italian Catering" },
      { name: "description", content: "Premium handcrafted cakes and Italian-inspired meals from Osato, a passionate baker and caterer based in Italy." },
      { property: "og:title", content: "Osato Bakes — Handcrafted Cakes & Italian Catering" },
      { property: "og:description", content: "Premium handcrafted cakes and Italian-inspired meals from Osato, baked with patience and love." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCakeAsset.url}
            alt="Pink celebration cake by Osato"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80" />
          <div className="absolute inset-0 bg-background/20" />
          <div className="absolute inset-0 bg-gradient-glow animate-glow-pulse opacity-60" />
        </div>
        <div className="relative mx-auto max-w-3xl w-full text-center space-y-8 animate-fade-up pt-12 pb-24">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            <span className="h-px w-10 bg-foreground/40" /> A baker's quiet kitchen <span className="h-px w-10 bg-foreground/40" />
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[6rem] leading-[1.02] text-balance drop-shadow-sm">
            Slow baked,<br />
            <span className="italic text-gold">softly</span> shared.
          </h1>
          <p className="text-lg text-foreground/80 max-w-xl mx-auto leading-relaxed">
            I'm Osato — a mother, a baker, a caterer. From my small kitchen in Italy, I make cakes worth lingering over and meals that feel like a long embrace.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 justify-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background text-sm tracking-wide hover:shadow-glow transition-all"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Order on WhatsApp
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center px-7 py-4 rounded-full border border-foreground/30 bg-background/40 backdrop-blur-sm text-sm tracking-wide hover:border-foreground/60 transition-all"
            >
              Explore the menu
            </Link>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative px-6 lg:px-10 py-32">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Our philosophy</span>
          <p className="font-display text-3xl md:text-5xl leading-tight text-balance">
            "Every cake begins the night before — with quiet hands, good butter, and a little patience."
          </p>
          <p className="text-sm text-muted-foreground italic">— Osato</p>
        </div>
      </section>

      {/* MEET THE FOUNDER */}
      <section className="relative px-6 lg:px-10 py-24">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-8 bg-gradient-glow blur-3xl opacity-80 animate-glow-pulse" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft">
              <img
                src={founderAsset.url}
                alt="Osato, founder and baker"
                loading="lazy"
                width={1200}
                height={1500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2rem]" />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 animate-fade-up">
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Meet the founder</span>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              Hello, I'm <span className="italic text-gold">Osato</span>.
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-foreground/80 max-w-xl">
              <p>
                A full-time mum and professional baker living in Italy. In between school runs and bedtime stories, I bake — slowly, with real butter, real fruit, and a quiet kind of love.
              </p>
              <p>
                I cake for birthdays and weddings, and I cater intimate, Italian-inspired meals for the families and private events I'm lucky to be invited to.
              </p>
              <p className="font-display italic text-2xl text-foreground">
                Everything is made the way I'd make it for my own.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-foreground/30 text-sm tracking-wide hover:bg-foreground hover:text-background transition-all"
              >
                Read my story →
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background text-sm tracking-wide hover:shadow-glow transition-all"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="relative px-6 lg:px-10 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">What I make</span>
              <h2 className="font-display text-4xl md:text-6xl mt-3">A small, loving menu</h2>
            </div>
            <Link to="/menu" className="text-sm underline underline-offset-8 decoration-foreground/30 hover:decoration-foreground transition">
              See everything →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: realCakePink.url, title: "Celebration cakes", text: "Tiered, buttercream, fondant & florals — for weddings, birthdays and quiet milestones." },
              { img: realJollofChicken.url, title: "Family catering", text: "Soulful, slow-cooked dishes for intimate dinners and family gatherings." },
              { img: realCakeRoses.url, title: "Event styling", text: "From a single cake to a full dessert table — softly styled for your day." },
            ].map((card) => (
              <article key={card.title} className="group relative overflow-hidden rounded-3xl bg-card hover-lift shadow-elegant">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="relative px-6 lg:px-10 py-24">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={galleryTart} alt="" loading="lazy" className="rounded-2xl aspect-[3/4] object-cover translate-y-6 hover-lift" />
            <img src={galleryMacarons} alt="" loading="lazy" className="rounded-2xl aspect-[3/4] object-cover hover-lift" />
          </div>
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">The gallery</span>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              A quiet album of <span className="italic text-gold">small joys</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Cakes, tablescapes and stolen moments from kitchens, weddings and family Sundays. Each photograph is a real bake — no styling tricks.
            </p>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 text-sm tracking-wide group"
            >
              <span className="px-7 py-4 rounded-full border border-foreground/30 group-hover:bg-foreground group-hover:text-background transition-all">
                Open the gallery
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 lg:px-10 py-32">
        <div className="mx-auto max-w-5xl relative overflow-hidden rounded-[2.5rem] bg-gradient-warm border border-border/60 px-8 md:px-16 py-20 text-center">
          <div className="absolute inset-0 bg-gradient-glow opacity-70 animate-glow-pulse" />
          <div className="relative space-y-6">
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Have something to celebrate?</span>
            <h2 className="font-display text-4xl md:text-6xl text-balance">
              Let's bake it <span className="italic text-gold">together</span>.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              All orders are placed via WhatsApp — tell me about your day and I'll write back personally.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background text-sm tracking-wide hover:shadow-glow transition-all"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Message Osato on WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
