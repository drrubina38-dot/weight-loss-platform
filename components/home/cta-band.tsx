import { MessageCircle, ShieldCheck, Truck } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { product } from "@/lib/product";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#185c35_0%,#1f7a45_48%,#5aa86e_100%)] px-8 py-16 text-center text-white shadow-[0_24px_80px_rgba(24,92,53,0.28)]">
        <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em]">
          Dr. Rubina Official
        </span>
        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
          Build healthier routines with support that feels practical
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
          Order <strong>{product.name}</strong> with Cash on Delivery anywhere
          in Pakistan and pair it with diet guidance, calculators, and helpful
          blog content.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" />
            Supports healthy lifestyle habits
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            Fast delivery across Pakistan
          </div>
          <div className="flex items-center gap-2">4.9/5 customer rating</div>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <LinkButton
            href="/product#order"
            variant="white"
            size="lg"
            className="min-w-[240px] justify-center"
          >
            Order Now with COD
          </LinkButton>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[240px] items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-green-700"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
