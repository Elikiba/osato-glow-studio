import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Order with Osato Bakes" },
      { name: "description", content: "Place a custom order or enquire about catering with Osato — a baker and caterer based in Italy." },
      { property: "og:title", content: "Contact — Order with Osato Bakes" },
      { property: "og:description", content: "Place a custom order or enquire about catering with Osato Bakes." },
    ],
  }),
  component: ContactPage,
});

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.28em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-b border-border/80 py-2 outline-none focus:border-foreground transition-colors"
      />
    </div>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="px-6 lg:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16">
          <div className="space-y-8 animate-fade-up">
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Get in touch</span>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
              Tell me about<br /><span className="italic text-gold">your day</span>.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Every order begins with a conversation. Share a few details and I'll reply personally — usually within a day.
            </p>
            <div className="space-y-4 pt-4 text-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Email</p>
                <p className="font-display text-xl mt-1">hello@osatobakes.it</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Based in</p>
                <p className="font-display text-xl mt-1">Italy · Available for events nearby</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Hours</p>
                <p className="font-display text-xl mt-1">Mon – Sat · By appointment</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-glow blur-3xl opacity-70 animate-glow-pulse" />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="relative bg-card border border-border/60 rounded-[2rem] p-8 md:p-10 shadow-soft space-y-5"
            >
              {sent ? (
                <div className="py-16 text-center space-y-4">
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-gold flex items-center justify-center text-2xl text-white shadow-glow">✓</div>
                  <h3 className="font-display text-3xl">Grazie!</h3>
                  <p className="text-muted-foreground">Your message landed softly. I'll write back within a day.</p>
                </div>
              ) : (
                <>
                  <Field label="Your name" name="name" />
                  <Field label="Email" name="email" type="email" />
                  <Field label="Occasion" name="occasion" placeholder="Birthday, wedding, dinner…" />
                  <Field label="Date" name="date" type="date" />
                  <div>
                    <label className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Tell me more</label>
                    <textarea
                      name="message"
                      rows={4}
                      className="mt-2 w-full bg-transparent border-b border-border/80 py-2 outline-none focus:border-foreground transition-colors resize-none"
                      placeholder="Servings, flavours, dreams…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 w-full inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-foreground text-background text-sm tracking-wide hover:shadow-glow transition-all"
                  >
                    Send to Osato →
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}