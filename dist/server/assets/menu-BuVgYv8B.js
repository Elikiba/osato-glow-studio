import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout } from "./Layout-l-6dvl9g.js";
import "@tanstack/react-router";
import "react";
const sections = [{
  title: "Celebration cakes",
  note: 'From 4" intimate to grand tiered. Buttercream, ganache, fondant on request.',
  items: [{
    name: "Berry & gold leaf",
    desc: "Vanilla sponge, mascarpone cream, fresh berries, edible gold.",
    price: "from €65"
  }, {
    name: "Pistachio & rose",
    desc: "Pistachio sponge, white chocolate ganache, rose petals.",
    price: "from €70"
  }, {
    name: "Chocolate dream",
    desc: "Dark chocolate sponge, salted caramel, ganache drip.",
    price: "from €60"
  }, {
    name: "Lemon & olive oil",
    desc: "Sicilian lemon, olive oil sponge, candied peel.",
    price: "from €55"
  }]
}, {
  title: "Pastries & small bakes",
  note: "Boxed by the dozen — perfect for gifting or grazing.",
  items: [{
    name: "French macarons",
    desc: "Rotating seasonal flavours, 12 per box.",
    price: "€32"
  }, {
    name: "Cornetti",
    desc: "Italian breakfast pastry, plain or filled.",
    price: "€24 / 6"
  }, {
    name: "Cantucci",
    desc: "Almond biscotti, baked twice.",
    price: "€18"
  }, {
    name: "Fruit tartlets",
    desc: "Crème pâtissière, glazed seasonal fruit.",
    price: "€36 / 6"
  }]
}, {
  title: "Family catering",
  note: "Italian-inspired menus for 6–40 guests. Delivered or served.",
  items: [{
    name: "Antipasti grazing board",
    desc: "Cured meats, cheeses, marinated vegetables, focaccia.",
    price: "from €18 pp"
  }, {
    name: "Handmade pasta course",
    desc: "Tagliatelle, ravioli or gnocchi with seasonal sauce.",
    price: "from €14 pp"
  }, {
    name: "Slow-cooked main",
    desc: "Osso buco, porchetta or roast chicken with herbs.",
    price: "from €22 pp"
  }, {
    name: "Sweet finish",
    desc: "Tiramisù, panna cotta or dessert table styling.",
    price: "from €9 pp"
  }]
}];
function MenuPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx("section", { className: "px-6 lg:px-10 py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center space-y-6 animate-fade-up", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.4em] text-muted-foreground", children: "The menu" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-7xl leading-tight", children: [
        "Small, ",
        /* @__PURE__ */ jsx("span", { className: "italic text-gold", children: "seasonal" }),
        ", made for you."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Prices are guides — every order is quoted personally after a short chat about your day." })
    ] }) }),
    sections.map((s, i) => /* @__PURE__ */ jsx("section", { className: "px-6 lg:px-10 py-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4 border-b border-border pb-6 mb-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs uppercase tracking-[0.4em] text-muted-foreground", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl mt-2", children: s.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground italic max-w-sm", children: s.note })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-x-12 gap-y-8", children: s.items.map((it) => /* @__PURE__ */ jsxs("div", { className: "group", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between gap-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl", children: it.name }),
          /* @__PURE__ */ jsx("span", { className: "flex-1 border-b border-dashed border-border/80 mb-1" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gold font-medium", children: it.price })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2 leading-relaxed", children: it.desc })
      ] }, it.name)) })
    ] }) }, s.title))
  ] });
}
export {
  MenuPage as component
};
