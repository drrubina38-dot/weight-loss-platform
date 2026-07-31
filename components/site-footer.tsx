import Link from "next/link";
import {
  Leaf,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Music2,
} from "lucide-react";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/product", label: "Product" },
      { href: "/diet-plans", label: "Diet Plans" },
      { href: "/blog", label: "Blog" },
      { href: "/success-stories", label: "Success Stories" },
    ],
  },
  {
    title: "Tools",
    links: [
      { href: "/calorie-calculator", label: "Calorie Calculator" },
      { href: "/bmi-calculator", label: "BMI Calculator" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact Us" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Conditions" },
      { href: "/shipping-policy", label: "Shipping Policy" },
      { href: "/refund-policy", label: "Refund Policy" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Leaf className="size-5" />
              </span>

              <span className="text-lg font-bold text-foreground">
                {site.name}
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href="tel:03048557141"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Phone className="size-4 text-primary" />
                0304-8557141
              </a>

              <a
                href="https://wa.me/923048557141"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <MessageCircle className="size-4 text-green-600" />
                WhatsApp Support
              </a>

              <a
                href="mailto:support@drrubinaofficial.site"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail className="size-4 text-primary" />
                support@drrubinaofficial.site
              </a>

              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                Pakistan
              </p>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/drrubina06"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border p-2 transition hover:bg-pink-100"
              >
                <Instagram className="size-5 text-pink-600" />
              </a>

              <a
                href="https://www.tiktok.com/@drrubina06"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border p-2 transition hover:bg-gray-100"
              >
                <Music2 className="size-5" />
              </a>

              <a
                href="https://wa.me/923048557141"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border p-2 transition hover:bg-green-100"
              >
                <MessageCircle className="size-5 text-green-600" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>

              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 text-center md:grid-cols-4">
          <div>
            <h4 className="font-semibold">🚚 Fast Delivery</h4>
            <p className="text-xs text-muted-foreground">Across Pakistan</p>
          </div>

          <div>
            <h4 className="font-semibold">💵 Cash on Delivery</h4>
            <p className="text-xs text-muted-foreground">Pay After Delivery</p>
          </div>

          <div>
            <h4 className="font-semibold">🌿 Herbal Formula</h4>
            <p className="text-xs text-muted-foreground">Premium Quality</p>
          </div>

          <div>
            <h4 className="font-semibold">⭐ Customer Support</h4>
            <p className="text-xs text-muted-foreground">
              24/7 WhatsApp Support
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {site.name}. All Rights Reserved.
          </p>

          <p className="mt-2">Cash on Delivery Available All Over Pakistan.</p>

          <p className="mt-3 max-w-3xl mx-auto leading-6">
            Disclaimer: This herbal supplement is intended to support a healthy
            lifestyle. Individual results may vary depending on diet, exercise
            and body condition. Please consult your healthcare professional
            before use if you are pregnant, nursing or have any medical
            condition.
          </p>
        </div>
      </div>
    </footer>
  );
}
