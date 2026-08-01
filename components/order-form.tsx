"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Loader2,
  Minus,
  Plus,
  ShieldCheck,
  Truck,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import { product } from "@/lib/product";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const MAX_QUANTITY = 10;

export function OrderForm() {
  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [summary, setSummary] = useState<{
    quantity: number;
    total: number;
  } | null>(null);

  const total = product.price * quantity;
  const freeDelivery = quantity >= 2;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("submitting");
    setMessage("");

    const formData = new FormData(e.currentTarget);

    const payload = {
      fullName: formData.get("fullName"),
      mobile: formData.get("mobile"),
      city: formData.get("city"),
      address: formData.get("address"),
      quantity,
    };

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(data.message);
      setSummary(data.orderSummary);
    } catch {
      setStatus("error");
      setMessage(
        "Network error. Please check your internet connection and try again.",
      );
    }
  }
  if (status === "success") {
    return (
      <div className="rounded-3xl border border-primary/30 bg-secondary/50 p-8 text-center shadow-lg">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-green-600 text-white shadow-lg">
          <CheckCircle2 className="size-9" />
        </span>

        <h2 className="mt-5 text-3xl font-bold text-foreground">
          🎉 Order Confirmed!
        </h2>

        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          Thank you for your order.
          <br />
          Our representative will contact you within{" "}
          <strong>15–30 minutes</strong> to confirm your order.
          <br />
          Please keep your phone available.
        </p>

        {summary && (
          <div className="mt-6 rounded-2xl border bg-background p-5 text-left shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>

            <div className="flex justify-between border-b pb-2">
              <span>Product</span>
              <span>{product.name}</span>
            </div>

            <div className="mt-2 flex justify-between border-b pb-2">
              <span>Quantity</span>
              <span>{summary.quantity}</span>
            </div>

            <div className="mt-2 flex justify-between border-b pb-2">
              <span>Payment</span>
              <span>Cash on Delivery</span>
            </div>

            <div className="mt-3 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>
                {site.currency} {summary.total.toLocaleString()}
              </span>
            </div>
          </div>
        )}

        <div className="mt-6 rounded-2xl bg-green-50 p-5 text-left">
          <p className="mb-2">✅ 100% Original Product</p>
          <p className="mb-2">🚚 Delivery in 2–4 Working Days</p>
          <p className="mb-2">💵 Cash on Delivery</p>
          <p>📞 Our team will call you shortly.</p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={`https://wa.me/${site.whatsapp}?text=Hi%20I%20have%20placed%20my%20order.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-green-600 px-6 font-semibold text-white transition hover:bg-green-700"
          >
            <MessageCircle className="size-5" />
            Chat on WhatsApp
          </a>

          <a
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-background px-6 font-semibold transition hover:bg-muted"
          >
            <ArrowLeft className="size-5" />
            Back to Home
          </a>
        </div>
      </div>
    );
  }
  const fieldClass =
    "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8"
    >
      <h2 className="text-3xl font-bold text-foreground">
        Cash on Delivery Order
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">
        Fill in your details below and our representative will contact you
        shortly.
      </p>

      <div className="mt-8 space-y-5">
        <div>
          <label className="text-sm font-semibold">Full Name</label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Muhammad Ali"
            className={fieldClass}
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Mobile Number</label>

          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            inputMode="tel"
            placeholder="03001234567"
            className={fieldClass}
          />
        </div>

        <div>
          <label className="text-sm font-semibold">City</label>

          <input
            id="city"
            name="city"
            type="text"
            required
            placeholder="Lahore"
            className={fieldClass}
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Complete Address</label>

          <textarea
            id="address"
            name="address"
            rows={4}
            required
            placeholder="House No, Street, Area, Landmark..."
            className={cn(fieldClass, "resize-none")}
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Quantity</label>

          <div className="mt-3 flex items-center gap-5">
            <div className="flex items-center rounded-2xl border">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
                className="flex h-11 w-11 items-center justify-center"
              >
                <Minus className="size-4" />
              </button>

              <span className="w-12 text-center font-bold">{quantity}</span>

              <button
                type="button"
                onClick={() =>
                  setQuantity((q) => Math.min(MAX_QUANTITY, q + 1))
                }
                disabled={quantity >= MAX_QUANTITY}
                className="flex h-11 w-11 items-center justify-center"
              >
                <Plus className="size-4" />
              </button>
            </div>

            <span className="text-sm text-muted-foreground">
              {site.currency} {product.price.toLocaleString()} each
            </span>
          </div>
        </div>

        <div className="rounded-2xl bg-secondary/50 p-5">
          <div className="flex justify-between">
            <span>Subtotal</span>

            <span className="font-semibold">
              {site.currency} {total.toLocaleString()}
            </span>
          </div>

          <div className="mt-3 flex justify-between">
            <span>Delivery</span>

            <span
              className={
                freeDelivery ? "font-semibold text-green-600" : "font-semibold"
              }
            >
              {freeDelivery ? "FREE" : `${site.currency} 200`}
            </span>
          </div>

          <div className="mt-4 flex justify-between border-t pt-4 text-lg font-bold">
            <span>Total</span>

            <span>
              {site.currency}{" "}
              {(total + (freeDelivery ? 0 : 200)).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      {status === "error" && (
        <div
          className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          role="alert"
        >
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-base font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            Placing Your Order...
          </>
        ) : (
          "Place Order (Cash on Delivery)"
        )}
      </button>

      <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-secondary/40 p-4 text-sm">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-5 text-primary" />
          <span>100% Secure Order</span>
        </div>

        <div className="flex items-center gap-2">
          <Truck className="size-5 text-primary" />
          <span>2–4 Days Delivery</span>
        </div>
      </div>

      <p className="mt-5 text-center text-xs leading-6 text-muted-foreground">
        By placing this order, you agree to receive a confirmation call from our
        team before dispatch. Cash on Delivery is available all over Pakistan.
      </p>
    </form>
  );
}
