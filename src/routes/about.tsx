import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import aboutHands from "@/assets/about-hands.jpg";
import catering from "@/assets/catering.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Osato — The Baker Behind the Cakes" },
      { name: "description", content: "Meet Osato — a full-time mum, professional baker and caterer based in Italy, sharing slow-baked cakes and Italian-inspired meals." },
      { property: "og:title", content: "About Osato — The Baker Behind the Cakes" },
      { property: "og:description", content: "Meet Osato — a full-time mum, professional baker and caterer based in Italy." },
      { property: "og:image", content: aboutHands },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative px-6 lg:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8 animate-fade-up">
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">The story</span>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-balance">
              A mother first.<br />
              <span className="italic text-gold">A baker</span> always.
            </h1>
            <div className="space-y-5 text-lg leading-relaxed text-foreground/80 max-w-2xl">
              <p>
                I'm Osato. Between school runs and bedtime stories, I bake. It started — as so many things do — with a tin of butter, a Sunday afternoon, and the wish to make my family smile.
              </p>
              <p>
                Years later, my kitchen in Italy fills with the scent of vanilla pods, browning butter, and slow-simmered ragù. I cake for weddings and birthdays. I cater for the quiet, beautiful dinners other families want to share without lifting a pan.
              </p>
              <p className="font-display italic text-2xl text-foreground">
                Everything I make is made the way I'd make it for my own.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-8 bg-gradient-glow blur-3xl opacity-70 animate-glow-pulse" />
            <img
              src={aboutHands}
              alt="Osato decorating a wedding cake"
              loading="lazy"
              className="relative rounded-[2rem] shadow-soft aspect-[4/5] object-cover w-full"
            />
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-10">
          {[
            { n: "01", t: "Slow & seasonal", d: "Real butter, real fruit, nothing rushed. Most cakes begin the day before they meet you." },
            { n: "02", t: "Italy on the plate", d: "Catering rooted in handmade pasta, roasted vegetables, and the rhythms of an Italian table." },
            { n: "03", t: "Made by one pair of hands", d: "Every order is personal — I write the quote, I bake the cake, I deliver it." },
          ].map((b) => (
            <div key={b.n} className="space-y-3 border-t border-border pt-6">
              <span className="font-display text-3xl text-gold">{b.n}</span>
              <h3 className="font-display text-2xl">{b.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-10 py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] overflow-hidden grid md:grid-cols-2 border border-border/60">
          <img src={catering} alt="An Italian catering spread" loading="lazy" className="aspect-[4/3] md:aspect-auto object-cover w-full h-full" />
          <div className="bg-card p-10 md:p-14 flex flex-col justify-center gap-6">
            <h2 className="font-display text-4xl md:text-5xl">Want me at your table?</h2>
            <p className="text-muted-foreground">Birthdays, anniversaries, baby showers, christenings — or just a Sunday with the people you love most.</p>
            <Link to="/contact" className="self-start inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background text-sm tracking-wide hover:shadow-glow transition-all">
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}