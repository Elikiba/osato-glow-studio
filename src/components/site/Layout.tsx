import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Preloader } from "./Preloader";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-clip">
      <Preloader />
      <div className="pointer-events-none fixed -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-glow blur-3xl animate-glow-pulse" />
      <div className="pointer-events-none fixed -bottom-40 -right-40 h-[700px] w-[700px] rounded-full bg-gradient-glow blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}