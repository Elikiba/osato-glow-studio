import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useState } from "react";
import heroCake from "@/assets/hero-cake.jpg";
import aboutHands from "@/assets/about-hands.jpg";
import catering from "@/assets/catering.jpg";
import bread from "@/assets/gallery-bread.jpg";
import tart from "@/assets/gallery-tart.jpg";
import macarons from "@/assets/gallery-macarons.jpg";
import wedding from "@/assets/gallery-wedding.jpg";
import chocolate from "@/assets/gallery-chocolate.jpg";
import pasta from "@/assets/gallery-pasta.jpg";
import birthday from "@/assets/gallery-birthday.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Osato Bakes" },
      { name: "description", content: "A photo gallery of celebration cakes, pastries and catering by Osato — handcrafted in Italy." },
      { property: "og:title", content: "Gallery — Osato Bakes" },
      { property: "og:description", content: "Cakes, pastries and catering by Osato Bakes." },
      { property: "og:image", content: heroCake },
    ],
  }),
  component: GalleryPage,
});

type Tag = "Cakes" | "Pastries" | "Catering";
type Item = { src: string; alt: string; tag: Tag; span?: string };

const items: Item[] = [
  { src: heroCake, alt: "Berry layer cake with edible flowers", tag: "Cakes", span: "row-span-2" },
  { src: macarons, alt: "Stacked pastel macarons", tag: "Pastries" },
  { src: wedding, alt: "Tiered floral wedding cake at sunset", tag: "Cakes", span: "row-span-2" },
  { src: tart, alt: "Strawberry glazed tart", tag: "Pastries" },
  { src: pasta, alt: "Handmade pasta and antipasti", tag: "Catering" },
  { src: birthday, alt: "Pink rose buttercream birthday cake", tag: "Cakes" },
  { src: chocolate, alt: "Chocolate ganache drip cake", tag: "Cakes" },
  { src: catering, alt: "Italian dinner spread by candlelight", tag: "Catering", span: "row-span-2" },
  { src: bread, alt: "Rustic golden bread loaf", tag: "Pastries" },
  { src: aboutHands, alt: "Hands piping a tiered cake", tag: "Cakes" },
];

const tabs = ["All", "Cakes", "Pastries", "Catering"] as const;

function GalleryPage() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const filtered = active === "All" ? items : items.filter((i) => i.tag === active);

  return (
    <SiteLayout>
      <section className="px-6 lg:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center space-y-6 animate-fade-up">
          <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Gallery</span>
          <h1 className="font-display text-5xl md:text-7xl leading-tight">
            A quiet album of <span className="italic text-gold">small joys</span>.
          </h1>
          <p className="text-muted-foreground">
            Every photograph is a real bake — softly lit, simply styled.
          </p>
        </div>
      </section>

      <div className="px-6 lg:px-10 pb-10">
        <div className="mx-auto max-w-7xl flex justify-center flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.28em] transition-all ${
                active === t
                  ? "bg-foreground text-background"
                  : "border border-border text-muted-foreground hover:border-foreground/60 hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <section className="px-6 lg:px-10 pb-32">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-4">
          {filtered.map((item) => (
            <button
              key={item.alt}
              onClick={() => setLightbox(item)}
              className={`group relative overflow-hidden rounded-2xl bg-card shadow-elegant hover-lift ${item.span ?? ""}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute left-4 bottom-4 text-xs uppercase tracking-[0.3em] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {item.tag}
              </span>
            </button>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] bg-background/90 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-up cursor-zoom-out"
        >
          <img src={lightbox.src} alt={lightbox.alt} className="max-h-[90vh] max-w-[92vw] object-contain rounded-2xl shadow-glow" />
          <button
            className="absolute top-6 right-6 h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </SiteLayout>
  );
}