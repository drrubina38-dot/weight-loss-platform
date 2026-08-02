import Link from "next/link";
import { Leaf, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Truck } from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
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
    <footer className="border-t border-border bg-secondary/35">
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
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-primary"
              >
                <Phone className="size-4 text-primary" />
                {site.phone}
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <MessageCircle className="size-4 text-green-600" />
                WhatsApp Support
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail className="size-4 text-primary" />
                {site.email}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                {site.address}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border p-2 transition hover:bg-pink-100"
                aria-label="Visit Dr. Rubina Official on Instagram"
              >
                <FaInstagram className="size-5 text-pink-600" />
              </a>
              <a
                href={site.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border p-2 transition hover:bg-gray-100"
                aria-label="Visit Dr. Rubina Official on TikTok"
              >
                <FaTiktok className="size-5" />
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border p-2 transition hover:bg-green-100"
                aria-label="Chat with Dr. Rubina Official on WhatsApp"
              >
                <MessageCircle className="size-5 text-green-600" />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
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

        <div className="mt-10 grid gap-4 rounded-[1.75rem] border border-border bg-card p-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Truck className="mx-auto size-5 text-primary" />
            <h4 className="mt-3 font-semibold">Fast delivery</h4>
            <p className="text-xs text-muted-foreground">Across Pakistan</p>
          </div>
          <div>
            <ShieldCheck className="mx-auto size-5 text-primary" />
            <h4 className="mt-3 font-semibold">Cash on Delivery</h4>
            <p className="text-xs text-muted-foreground">Pay on arrival</p>
          </div>
          <div>
            <Leaf className="mx-auto size-5 text-primary" />
            <h4 className="mt-3 font-semibold">Herbal formula</h4>
            <p className="text-xs text-muted-foreground">Lifestyle support</p>
          </div>
          <div>
            <MessageCircle className="mx-auto size-5 text-primary" />
            <h4 className="mt-3 font-semibold">Customer support</h4>
            <p className="text-xs text-muted-foreground">WhatsApp assistance</p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="mt-2">Cash on Delivery available all over Pakistan.</p>
          <p className="mx-auto mt-3 max-w-3xl leading-6">
            Disclaimer: This herbal supplement is intended to support a healthy
            lifestyle. Individual results vary based on diet, activity, sleep,
            and other personal factors. Please consult a healthcare
            professional before use if you are pregnant, nursing, taking
            medication, or managing a medical condition.
          </p>
        </div>
      </div>
    </footer>
  );
}
