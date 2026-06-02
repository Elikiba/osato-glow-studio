import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex flex-col leading-none ${className}`}>
      <span className="font-display text-2xl tracking-wide text-foreground">
        Osato <span className="italic text-gold">bakes</span>
      </span>
      <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground mt-1">
        Italia · since love
      </span>
    </Link>
  );
}