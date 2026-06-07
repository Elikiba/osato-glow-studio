import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/assets/styles-B5pWiyrt.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "osatobakes — Handcrafted Cakes & Italian Catering" },
      { name: "description", content: "Premium handcrafted cakes and Italian-inspired meals from Osato, baked with love in Italy." },
      { name: "author", content: "osatobakes" },
      { property: "og:title", content: "osatobakes — Handcrafted Cakes & Italian Catering" },
      { property: "og:description", content: "Premium handcrafted cakes and Italian-inspired meals from Osato, baked with love in Italy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.png",
        type: "image/png"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const BASE_URL = "";
const Route$5 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = ["/", "/about", "/menu", "/gallery", "/contact"];
        const urls = paths.map(
          (p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$4 = () => import("./menu-BuVgYv8B.js");
const Route$4 = createFileRoute("/menu")({
  head: () => ({
    meta: [{
      title: "Menu — Cakes, Pastries & Catering by Osato"
    }, {
      name: "description",
      content: "A small, seasonal menu of celebration cakes, pastries and Italian-inspired catering by osatobakes."
    }, {
      property: "og:title",
      content: "Menu — Cakes, Pastries & Catering by Osato"
    }, {
      property: "og:description",
      content: "Celebration cakes, pastries and Italian-inspired catering."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const heroCake = "/assets/hero-cake-Ct5StLS2.jpg";
const $$splitComponentImporter$3 = () => import("./gallery-BOeR_jkA.js");
const Route$3 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — osatobakes"
    }, {
      name: "description",
      content: "A photo gallery of celebration cakes, pastries and catering by Osato — handcrafted in Italy."
    }, {
      property: "og:title",
      content: "Gallery — osatobakes"
    }, {
      property: "og:description",
      content: "Cakes, pastries and catering by osatobakes."
    }, {
      property: "og:image",
      content: heroCake
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-D91TrAHA.js");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Order with osatobakes"
    }, {
      name: "description",
      content: "Place a custom order or enquire about catering with Osato — a baker and caterer based in Italy."
    }, {
      property: "og:title",
      content: "Contact — Order with osatobakes"
    }, {
      property: "og:description",
      content: "Place a custom order or enquire about catering with osatobakes."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const aboutHands = "/assets/about-hands-XxNYj6oY.jpg";
const $$splitComponentImporter$1 = () => import("./about-CEM1leOV.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Osato — The Baker Behind the Cakes"
    }, {
      name: "description",
      content: "Meet Osato — a full-time mum, professional baker and caterer based in Italy, sharing slow-baked cakes and Italian-inspired meals."
    }, {
      property: "og:title",
      content: "About Osato — The Baker Behind the Cakes"
    }, {
      property: "og:description",
      content: "Meet Osato — a full-time mum, professional baker and caterer based in Italy."
    }, {
      property: "og:image",
      content: aboutHands
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CXicF6b7.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "osatobakes — Handcrafted Cakes & Italian Catering"
    }, {
      name: "description",
      content: "Premium handcrafted cakes and Italian-inspired meals from Osato, a passionate baker and caterer based in Italy."
    }, {
      property: "og:title",
      content: "osatobakes — Handcrafted Cakes & Italian Catering"
    }, {
      property: "og:description",
      content: "Premium handcrafted cakes and Italian-inspired meals from Osato, baked with patience and love."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$5.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$6
});
const MenuRoute = Route$4.update({
  id: "/menu",
  path: "/menu",
  getParentRoute: () => Route$6
});
const GalleryRoute = Route$3.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  GalleryRoute,
  MenuRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  aboutHands as a,
  router as r
};
