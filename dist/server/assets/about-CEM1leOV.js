import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout, w as whatsappLink } from "./Layout-l-6dvl9g.js";
import { a as aboutHands } from "./router-wtcvlUuZ.js";
import "@tanstack/react-router";
import "react";
import "@tanstack/react-query";
const catering = "/assets/catering-DAg55_dI.jpg";
function AboutPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx("section", { className: "relative px-6 lg:px-10 py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl grid lg:grid-cols-12 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-8 animate-fade-up", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.4em] text-muted-foreground", children: "The story" }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-7xl leading-[1.05] text-balance", children: [
          "A mother first.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "italic text-gold", children: "A baker" }),
          " always."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-lg leading-relaxed text-foreground/80 max-w-2xl", children: [
          /* @__PURE__ */ jsx("p", { children: "I'm Osato. Between school runs and bedtime stories, I bake. It started — as so many things do — with a tin of butter, a Sunday afternoon, and the wish to make my family smile." }),
          /* @__PURE__ */ jsx("p", { children: "Years later, my kitchen in Italy fills with the scent of vanilla pods, browning butter, and slow-simmered ragù. I cake for weddings and birthdays. I cater for the quiet, beautiful dinners other families want to share without lifting a pan." }),
          /* @__PURE__ */ jsx("p", { className: "font-display italic text-2xl text-foreground", children: "Everything I make is made the way I'd make it for my own." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-8 bg-gradient-glow blur-3xl opacity-70 animate-glow-pulse" }),
        /* @__PURE__ */ jsx("img", { src: aboutHands, alt: "Osato decorating a wedding cake", loading: "lazy", className: "relative rounded-[2rem] shadow-soft aspect-[4/5] object-cover w-full" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 lg:px-10 py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl grid md:grid-cols-3 gap-10", children: [{
      n: "01",
      t: "Slow & seasonal",
      d: "Real butter, real fruit, nothing rushed. Most cakes begin the day before they meet you."
    }, {
      n: "02",
      t: "Italy on the plate",
      d: "Catering rooted in handmade pasta, roasted vegetables, and the rhythms of an Italian table."
    }, {
      n: "03",
      t: "Made by one pair of hands",
      d: "Every order is personal — I write the quote, I bake the cake, I deliver it."
    }].map((b) => /* @__PURE__ */ jsxs("div", { className: "space-y-3 border-t border-border pt-6", children: [
      /* @__PURE__ */ jsx("span", { className: "font-display text-3xl text-gold", children: b.n }),
      /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl", children: b.t }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: b.d })
    ] }, b.n)) }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 lg:px-10 py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl rounded-[2rem] overflow-hidden grid md:grid-cols-2 border border-border/60", children: [
      /* @__PURE__ */ jsx("img", { src: catering, alt: "An Italian catering spread", loading: "lazy", className: "aspect-[4/3] md:aspect-auto object-cover w-full h-full" }),
      /* @__PURE__ */ jsxs("div", { className: "bg-card p-10 md:p-14 flex flex-col justify-center gap-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "Want me at your table?" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Birthdays, anniversaries, baby showers, christenings — or just a Sunday with the people you love most." }),
        /* @__PURE__ */ jsxs("a", { href: whatsappLink(), target: "_blank", rel: "noopener noreferrer", className: "self-start inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background text-sm tracking-wide hover:shadow-glow transition-all", children: [
          /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-400 animate-pulse" }),
          "Message me on WhatsApp →"
        ] })
      ] })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
