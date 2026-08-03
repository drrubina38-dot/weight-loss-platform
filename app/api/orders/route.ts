import { NextResponse } from "next/server";
import { product } from "@/lib/product";
import { supabaseAdmin } from "@/lib/supabase";

type OrderInput = {
  fullName?: string;
  mobile?: string;
  city?: string;
  address?: string;
  quantity?: number | string;
};

const ALLOWED_QUANTITIES = [2, 4, 6, 8] as const;
async function saveOrder(order: {
  fullName: string;
  mobile: string;
  city: string;
  address: string;
  quantity: number;
  status: string;
}) {
  const supabase = supabaseAdmin();

  console.log("Saving order:", order);

  const { data, error } = await supabase
    .from("orders")
    .insert({
      name: order.fullName,
      phone: order.mobile,
      city: order.city,
      address: order.address,
      quantity: order.quantity,
      status: order.status,
    })
    .select();

  console.log("SUPABASE DATA:", data);
  console.log("SUPABASE ERROR:", error);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function POST(request: Request) {
  console.log("========== ENV ==========");
  console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
  console.log(
    "SERVICE_ROLE_KEY EXISTS:",
    !!process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
  console.log("=========================");

  let body: OrderInput;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Invalid request body.",
      },
      {
        status: 400,
      },
    );
  }

  const fullName = String(body.fullName ?? "").trim();
  const mobile = String(body.mobile ?? "").trim();
  const city = String(body.city ?? "").trim();
  const address = String(body.address ?? "").trim();
  const quantity = Number(body.quantity ?? 2);

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

  if (
    !Number.isInteger(quantity) ||
    !ALLOWED_QUANTITIES.includes(quantity as 2 | 4 | 6 | 8)
  ) {
    errors.push("Quantity must be 2, 4, 6, or 8.");
  }

  if (errors.length > 0) {
    return NextResponse.json(
      {
        ok: false,
        error: errors.join(" "),
      },
      {
        status: 422,
      },
    );
  }

  const total = (product?.price ?? 0) * quantity;

  const order = {
    fullName,
    mobile,
    city,
    address,
    quantity,
    status: "pending",
  };

  try {
    await saveOrder(order);

    return NextResponse.json({
      ok: true,
      message:
        "Order placed successfully! Our team will call you shortly to confirm.",
      orderSummary: {
        quantity,
        total,
      },
    });
  } catch (err: any) {
    console.error("FULL ERROR:", err);

    return NextResponse.json(
      {
        ok: false,
        error: err?.message || "Unknown error",
      },
      {
        status: 500,
      },
    );
  }
}
