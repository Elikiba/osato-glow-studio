import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout } from "./Layout-l-6dvl9g.js";
import { useState } from "react";
import { a as aboutHands } from "./router-wtcvlUuZ.js";
import { r as realCakePink, a as realJollofChicken, b as realCakeRoses, g as galleryMacarons, c as galleryTart } from "./real-jollof-chicken-Bng5dDI3.js";
import "@tanstack/react-router";
import "@tanstack/react-query";
const wedding = "/assets/gallery-wedding-CdQ4ftzB.jpg";
const realCakeBible = "/assets/real-cake-bible-GbU6U7sT.jpg";
const realJollofTurkey = "/assets/gallery-macarons-B_eHoj9f.jpg";
const realPlantainEfo = "/assets/gallery-tart-CIif4pzY.jpg";
const realNoodles = "/assets/real-noodles-DI8Xvnf0.jpg";
const items = [{
  src: realCakePink,
  alt: "Two-tier pink buttercream birthday cake",
  tag: "Cakes",
  span: "row-span-2"
}, {
  src: realJollofChicken,
  alt: "Jollof rice with grilled chicken and coleslaw",
  tag: "Catering"
}, {
  src: realCakeRoses,
  alt: "White fondant birthday cake with red roses",
  tag: "Cakes",
  span: "row-span-2"
}, {
  src: realPlantainEfo,
  alt: "Fried plantain with efo riro stew",
  tag: "Catering"
}, {
  src: realCakeBible,
  alt: "Holy Bible themed celebration cake",
  tag: "Cakes"
}, {
  src: realJollofTurkey,
  alt: "Jollof rice with turkey and coleslaw",
  tag: "Catering"
}, {
  src: realNoodles,
  alt: "Stir-fried noodles with vegetables",
  tag: "Catering"
}, {
  src: galleryMacarons,
  alt: "Stacked pastel macarons",
  tag: "Pastries"
}, {
  src: galleryTart,
  alt: "Strawberry glazed tart",
  tag: "Pastries"
}, {
  src: wedding,
  alt: "Tiered floral wedding cake at sunset",
  tag: "Cakes"
}, {
  src: aboutHands,
  alt: "Hands piping a tiered cake",
  tag: "Cakes"
}];
const tabs = ["All", "Cakes", "Pastries", "Catering"];
function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const filtered = active === "All" ? items : items.filter((i) => i.tag === active);
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx("section", { className: "px-6 lg:px-10 py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center space-y-6 animate-fade-up", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.4em] text-muted-foreground", children: "Gallery" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-7xl leading-tight", children: [
        "A quiet album of ",
        /* @__PURE__ */ jsx("span", { className: "italic text-gold", children: "small joys" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Every photograph is a real bake — softly lit, simply styled." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 lg:px-10 pb-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl flex justify-center flex-wrap gap-2", children: tabs.map((t) => /* @__PURE__ */ jsx("button", { onClick: () => setActive(t), className: `px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.28em] transition-all ${active === t ? "bg-foreground text-background" : "border border-border text-muted-foreground hover:border-foreground/60 hover:text-foreground"}`, children: t }, t)) }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 lg:px-10 pb-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-4", children: filtered.map((item) => /* @__PURE__ */ jsxs("button", { onClick: () => setLightbox(item), className: `group relative overflow-hidden rounded-2xl bg-card shadow-elegant hover-lift ${item.span ?? ""}`, children: [
      /* @__PURE__ */ jsx("img", { src: item.src, alt: item.alt, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
      /* @__PURE__ */ jsx("span", { className: "absolute left-4 bottom-4 text-xs uppercase tracking-[0.3em] text-white opacity-0 group-hover:opacity-100 transition-opacity", children: item.tag })
    ] }, item.alt)) }) }),
    lightbox && /* @__PURE__ */ jsxs("div", { onClick: () => setLightbox(null), className: "fixed inset-0 z-[60] bg-background/90 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-up cursor-zoom-out", children: [
      /* @__PURE__ */ jsx("img", { src: lightbox.src, alt: lightbox.alt, className: "max-h-[90vh] max-w-[92vw] object-contain rounded-2xl shadow-glow" }),
      /* @__PURE__ */ jsx("button", { className: "absolute top-6 right-6 h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center", "aria-label": "Close", children: "×" })
    ] })
  ] });
}
export {
  GalleryPage as component
};
