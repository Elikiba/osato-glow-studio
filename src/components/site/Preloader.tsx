import { useEffect, useState } from "react";

export function Preloader() {
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

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-warm transition-opacity duration-700 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-glow animate-glow-pulse" />
      <div className="relative flex flex-col items-center">
        <h1 className="font-display text-5xl md:text-7xl text-balance animate-fade-up">
          Osato <span className="italic text-gold">Bakes</span>
        </h1>
        <div className="mt-10 w-56 h-[2px] rounded-full bg-foreground/10 overflow-hidden">
          <div
            className="h-full bg-gradient-gold transition-[width] duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Warming the oven
        </p>
      </div>
    </div>
  );
}