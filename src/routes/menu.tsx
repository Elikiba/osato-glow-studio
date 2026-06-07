import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Cakes, Pastries & Catering by Osato" },
      { name: "description", content: "A small, seasonal menu of celebration cakes, pastries and Italian-inspired catering by osatobakes." },
      { property: "og:title", content: "Menu — Cakes, Pastries & Catering by Osato" },
      { property: "og:description", content: "Celebration cakes, pastries and Italian-inspired catering." },
    ],
  }),
  component: MenuPage,
});

const sections = [
  {
    title: "Celebration cakes",
    note: "From 4\" intimate to grand tiered. Buttercream, ganache, fondant on request.",
    items: [
      { name: "Berry & gold leaf", desc: "Vanilla sponge, mascarpone cream, fresh berries, edible gold.", price: "from €65" },
      { name: "Pistachio & rose", desc: "Pistachio sponge, white chocolate ganache, rose petals.", price: "from €70" },
      { name: "Chocolate dream", desc: "Dark chocolate sponge, salted caramel, ganache drip.", price: "from €60" },
      { name: "Lemon & olive oil", desc: "Sicilian lemon, olive oil sponge, candied peel.", price: "from €55" },
    ],
  },
  {
    title: "Pastries & small bakes",
    note: "Boxed by the dozen — perfect for gifting or grazing.",
    items: [
      { name: "French macarons", desc: "Rotating seasonal flavours, 12 per box.", price: "€32" },
      { name: "Cornetti", desc: "Italian breakfast pastry, plain or filled.", price: "€24 / 6" },
      { name: "Cantucci", desc: "Almond biscotti, baked twice.", price: "€18" },
      { name: "Fruit tartlets", desc: "Crème pâtissière, glazed seasonal fruit.", price: "€36 / 6" },
    ],
  },
  {
    title: "Family catering",
    note: "Italian-inspired menus for 6–40 guests. Delivered or served.",
    items: [
      { name: "Antipasti grazing board", desc: "Cured meats, cheeses, marinated vegetables, focaccia.", price: "from €18 pp" },
      { name: "Handmade pasta course", desc: "Tagliatelle, ravioli or gnocchi with seasonal sauce.", price: "from €14 pp" },
      { name: "Slow-cooked main", desc: "Osso buco, porchetta or roast chicken with herbs.", price: "from €22 pp" },
      { name: "Sweet finish", desc: "Tiramisù, panna cotta or dessert table styling.", price: "from €9 pp" },
    ],
  },
];

function MenuPage() {
  return (
    <SiteLayout>
      <section className="px-6 lg:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center space-y-6 animate-fade-up">
          <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">The menu</span>
          <h1 className="font-display text-5xl md:text-7xl leading-tight">
            Small, <span className="italic text-gold">seasonal</span>, made for you.
          </h1>
          <p className="text-muted-foreground">
            Prices are guides — every order is quoted personally after a short chat about your day.
          </p>
        </div>
      </section>

      {sections.map((s, i) => (
        <section key={s.title} className="px-6 lg:px-10 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-end justify-between flex-wrap gap-4 border-b border-border pb-6 mb-10">
              <div>
                <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">0{i + 1}</span>
                <h2 className="font-display text-4xl md:text-5xl mt-2">{s.title}</h2>
              </div>
              <p className="text-sm text-muted-foreground italic max-w-sm">{s.note}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {s.items.map((it) => (
                <div key={it.name} className="group">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl">{it.name}</h3>
                    <span className="flex-1 border-b border-dashed border-border/80 mb-1" />
                    <span className="text-sm text-gold font-medium">{it.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </SiteLayout>
  );
}