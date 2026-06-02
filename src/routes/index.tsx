import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import heroCake from "@/assets/hero-cake.jpg";
import aboutHands from "@/assets/about-hands.jpg";
import catering from "@/assets/catering.jpg";
import galleryTart from "@/assets/gallery-tart.jpg";
import galleryMacarons from "@/assets/gallery-macarons.jpg";
import galleryWedding from "@/assets/gallery-wedding.jpg";

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
      <section className="relative min-h-[92vh] flex items-center px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-warm" />
        <div className="relative mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center w-full pt-12 pb-24">
          <div className="lg:col-span-6 space-y-8 animate-fade-up">
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">
              <span className="h-px w-10 bg-foreground/40" /> A baker's quiet kitchen
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-balance">
              Slow baked,<br />
              <span className="italic text-gold">softly</span> shared.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              I'm Osato — a mother, a baker, a caterer. From my small kitchen in Italy, I make cakes worth lingering over and meals that feel like a long embrace.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/menu"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background text-sm tracking-wide hover:shadow-glow transition-all"
              >
                Explore the menu
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center px-7 py-4 rounded-full border border-foreground/20 text-sm tracking-wide hover:border-foreground/60 transition-all"
              >
                View the gallery
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-10 bg-gradient-glow blur-3xl opacity-80 animate-glow-pulse" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft animate-float">
              <img
                src={heroCake}
                alt="A floral berry layer cake by Osato"
                className="w-full h-full object-cover"
                width={1536}
                height={1920}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2rem]" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-card/80 backdrop-blur-xl border border-border/60 rounded-2xl px-5 py-4 shadow-elegant max-w-[14rem]">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Signature</p>
              <p className="font-display text-lg leading-tight mt-1">Berry & gold leaf</p>
            </div>
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
              { img: aboutHands, title: "Celebration cakes", text: "Tiered, buttercream, fruit & flower — for weddings, birthdays and quiet milestones." },
              { img: catering, title: "Family catering", text: "Slow-cooked Italian dishes for intimate dinners and family gatherings." },
              { img: galleryWedding, title: "Event styling", text: "From a single cake to a full dessert table — softly styled for your day." },
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
              Custom orders open monthly. Tell me about your day and I'll write back personally.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background text-sm tracking-wide hover:shadow-glow transition-all"
            >
              Begin a conversation →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
