import { NextResponse } from "next/server";
import { product } from "@/lib/product";
import { supabaseAdmin } from "@/lib/supabase";

/**
 * COD Order endpoint — persists orders to Supabase.
 * Matches the actual `orders` table columns:
 * id, created_at, name, phone, city, address, quantity, status.
 */

type OrderInput = {
  fullName?: string;
  mobile?: string;
  city?: string;
  address?: string;
  quantity?: number | string;
};

const MAX_QUANTITY = 10;

async function saveOrder(order: {
  fullName: string;
  mobile: string;
  city: string;
  address: string;
  quantity: number;
  status: string;
}) {
  // Handle both function or object export safely for Supabase client
  const supabase =
    typeof supabaseAdmin === "function"
      ? (supabaseAdmin as any)()
      : supabaseAdmin;

  const { error } = await supabase.from("orders").insert({
    name: order.fullName,
    phone: order.mobile,
    city: order.city,
    address: order.address,
    quantity: order.quantity,
    status: order.status,
  });

  if (error) {
    console.log("[v0] Supabase insert error:", error.message);
    throw error;
  }
}

export async function POST(request: Request) {
  let body: OrderInput;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const fullName = String(body.fullName ?? "").trim();
  const mobile = String(body.mobile ?? "").trim();
  const city = String(body.city ?? "").trim();
  const address = String(body.address ?? "").trim();
  const quantity = Number(body.quantity ?? 1);

  const errors: string[] = [];
  if (fullName.length < 3) errors.push("Please enter your full name.");
  if (!/^(\+?92|0)3\d{9}$/.test(mobile.replace(/[\s-]/g, ""))) {
    errors.push(
      "Please enter a valid Pakistani mobile number (e.g. 03001234567).",
    );
  }
  if (city.length < 2) errors.push("Please enter your city.");
  if (address.length < 10)
    errors.push("Please enter your complete delivery address.");
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QUANTITY) {
    errors.push(`Quantity must be between 1 and ${MAX_QUANTITY}.`);
  }

  if (errors.length > 0) {
    return NextResponse.json(
      { ok: false, error: errors.join(" ") },
      { status: 422 },
    );
  }

  const total = (product?.price ?? 0) * quantity;

  const order = {
    fullName,
    mobile,
    city,
    address,
    quantity,
    product: product?.name ?? "Product",
    unitPrice: product?.price ?? 0,
    total,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  try {
    await saveOrder(order);
  } catch (err: any) {
    console.log("[v0] Failed to save order:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Something went wrong saving your order. Please try again.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      "Order placed successfully! Our team will call you shortly to confirm.",
    orderSummary: { quantity, total },
  });
}
