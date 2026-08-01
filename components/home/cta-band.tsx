import { ShieldCheck, Truck, MessageCircle } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { site } from "@/lib/site";
import { product } from "@/lib/product";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-green-700 via-green-600 to-green-500 px-8 py-16 text-center text-white shadow-2xl">
        <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
          🌿 Dr. Rubina Official
        </span>

        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
          Begin Your Healthy Lifestyle Journey Today
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
          Order <strong>{product.name}</strong> with Cash on Delivery anywhere
          in Pakistan. Enjoy trusted service, free diet guidance, and secure
          nationwide delivery.
        </p>

        {/* Trust Badges */}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" />
            100% Herbal Formula
          </div>

          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            Fast Delivery
          </div>

          <div className="flex items-center gap-2">
            ⭐ 4.9/5 Customer Rating
          </div>
        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <LinkButton
            href="/product#order"
            variant="white"
            size="lg"
            className="min-w-[240px] justify-center"
          >
            🛒 Order Now – Cash on Delivery
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
