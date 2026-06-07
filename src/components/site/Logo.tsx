import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/osato-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-3 leading-none ${className}`}>
      <img
        src={logoAsset.url}
        alt="osatobakes"
        width={48}
        height={48}
        className="h-11 w-11 rounded-full object-cover shadow-soft ring-1 ring-foreground/10 transition-transform group-hover:scale-105"
      />
      <span className="flex flex-col">
        <span className="font-display text-xl tracking-wide text-foreground">
          osato<span className="italic text-gold">bakes</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground mt-1">
          Italia · since love
        </span>
      </span>
    </Link>
  );
}