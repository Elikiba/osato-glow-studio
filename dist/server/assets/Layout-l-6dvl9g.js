import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
const logoAsset = "/assets/osato-logo-BjSqLuKE.png";
function Logo({ className = "" }) {
  return /* @__PURE__ */ jsxs(Link, { to: "/", className: `group inline-flex items-center gap-3 leading-none ${className}`, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: logoAsset,
        alt: "osatobakes",
        width: 48,
        height: 48,
        className: "h-11 w-11 rounded-full object-cover shadow-soft ring-1 ring-foreground/10 transition-transform group-hover:scale-105"
      }
    ),
    /* @__PURE__ */ jsxs("span", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsxs("span", { className: "font-display text-xl tracking-wide text-foreground", children: [
        "osato",
        /* @__PURE__ */ jsx("span", { className: "italic text-gold", children: "bakes" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.32em] text-muted-foreground mt-1", children: "Italia · since love" })
    ] })
  ] });
}
const WHATSAPP_NUMBER = "393000000000";
function whatsappLink(message = "Ciao Osato! I'd love to place an order ✨") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-background/75 border-b border-border/60" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20", children: [
          /* @__PURE__ */ jsx(Logo, {}),
          /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-10", children: nav.map((n) => /* @__PURE__ */ jsx(
            Link,
            {
              to: n.to,
              className: "text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-foreground after:transition-all hover:after:w-full",
              activeProps: { className: "text-foreground after:w-full" },
              activeOptions: { exact: n.to === "/" },
              children: n.label
            },
            n.to
          )) }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: whatsappLink(),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] px-5 py-3 rounded-full border border-foreground/20 hover:border-foreground/60 hover:bg-foreground hover:text-background transition-all",
              children: [
                /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
                "Order on WhatsApp"
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setOpen((v) => !v),
              className: "md:hidden p-2 text-foreground",
              "aria-label": "Menu",
              children: /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: `block h-px w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}` }),
                /* @__PURE__ */ jsx("span", { className: `block h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}` }),
                /* @__PURE__ */ jsx("span", { className: `block h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}` })
              ] })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl animate-fade-up", children: /* @__PURE__ */ jsx("div", { className: "px-6 py-6 flex flex-col gap-4", children: nav.map((n) => /* @__PURE__ */ jsx(
          Link,
          {
            to: n.to,
            onClick: () => setOpen(false),
            className: "text-lg font-display",
            children: n.label
          },
          n.to
        )) }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative mt-32 border-t border-border/60 bg-gradient-warm", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-glow opacity-60 pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(Logo, {}),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground max-w-xs leading-relaxed", children: "Handcrafted cakes & Italian-inspired meals, baked with patience from a small kitchen in Italy." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xs uppercase tracking-[0.32em] text-muted-foreground", children: "Explore" }),
        /* @__PURE__ */ jsx(Link, { to: "/about", className: "block hover:text-gold transition-colors", children: "Our story" }),
        /* @__PURE__ */ jsx(Link, { to: "/menu", className: "block hover:text-gold transition-colors", children: "Menu" }),
        /* @__PURE__ */ jsx(Link, { to: "/gallery", className: "block hover:text-gold transition-colors", children: "Gallery" }),
        /* @__PURE__ */ jsx("a", { href: whatsappLink(), target: "_blank", rel: "noopener noreferrer", className: "block hover:text-gold transition-colors", children: "Order on WhatsApp" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xs uppercase tracking-[0.32em] text-muted-foreground", children: "Reach Osato" }),
        /* @__PURE__ */ jsx("a", { href: whatsappLink(), target: "_blank", rel: "noopener noreferrer", className: "block text-foreground/80 hover:text-gold transition-colors", children: "WhatsApp · all orders" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80", children: "Based in Italy · Available for events" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80", children: "Mon – Sat · By appointment" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative border-t border-border/40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-muted-foreground flex justify-between", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " osatobakes"
      ] }),
      /* @__PURE__ */ jsx("span", { className: "italic font-display", children: "Baked with love" })
    ] }) })
  ] });
}
function Preloader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setHidden(true), 500);
          return 100;
        }
        return p + 2;
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "aria-hidden": hidden,
      className: `fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-warm transition-opacity duration-700 ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-glow animate-glow-pulse" }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center", children: [
          /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-7xl text-balance animate-fade-up", children: [
            "Osato ",
            /* @__PURE__ */ jsx("span", { className: "italic text-gold", children: "Bakes" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-10 w-56 h-[2px] rounded-full bg-foreground/10 overflow-hidden", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "h-full bg-gradient-gold transition-[width] duration-100 ease-out",
              style: { width: `${progress}%` }
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-xs uppercase tracking-[0.4em] text-muted-foreground", children: "Warming the oven" })
        ] })
      ]
    }
  );
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col relative overflow-x-clip", children: [
    /* @__PURE__ */ jsx(Preloader, {}),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-glow blur-3xl animate-glow-pulse" }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed -bottom-40 -right-40 h-[700px] w-[700px] rounded-full bg-gradient-glow blur-3xl animate-glow-pulse", style: { animationDelay: "2s" } }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1 pt-20", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  SiteLayout as S,
  WHATSAPP_NUMBER as W,
  whatsappLink as w
};
