import { jsx, jsxs } from "react/jsx-runtime";
import { S as SiteLayout, W as WHATSAPP_NUMBER, w as whatsappLink } from "./Layout-l-6dvl9g.js";
import "@tanstack/react-router";
import "react";
function ContactPage() {
  return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsx("section", { className: "px-6 lg:px-10 py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl grid lg:grid-cols-2 gap-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-fade-up", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.4em] text-muted-foreground", children: "Place an order" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-7xl leading-[1.05]", children: [
        "Tell me about",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic text-gold", children: "your day" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg leading-relaxed max-w-md", children: "All orders are placed via WhatsApp. Send me a quick message — the date, the occasion, a flavour you love — and I'll reply personally, usually within a day." }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 pt-4 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "WhatsApp" }),
          /* @__PURE__ */ jsxs("p", { className: "font-display text-xl mt-1", children: [
            "+",
            WHATSAPP_NUMBER
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Based in" }),
          /* @__PURE__ */ jsx("p", { className: "font-display text-xl mt-1", children: "Italy · Available for events nearby" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Hours" }),
          /* @__PURE__ */ jsx("p", { className: "font-display text-xl mt-1", children: "Mon – Sat · By appointment" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -inset-6 bg-gradient-glow blur-3xl opacity-70 animate-glow-pulse" }),
      /* @__PURE__ */ jsxs("div", { className: "relative bg-card border border-border/60 rounded-[2rem] p-8 md:p-12 shadow-soft space-y-6 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto h-16 w-16 rounded-full bg-gradient-gold flex items-center justify-center text-2xl text-white shadow-glow", children: "✦" }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl md:text-4xl", children: "Order on WhatsApp" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "One tap opens a chat with me. Share your date, occasion and any flavour ideas — I'll send back a personal quote." }),
        /* @__PURE__ */ jsxs("a", { href: whatsappLink(), target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-foreground text-background text-sm tracking-wide hover:shadow-glow transition-all", children: [
          /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-400 animate-pulse" }),
          "Open WhatsApp chat →"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground italic pt-2", children: "Replies usually within a day · Mon – Sat" })
      ] })
    ] })
  ] }) }) });
}
export {
  ContactPage as component
};
