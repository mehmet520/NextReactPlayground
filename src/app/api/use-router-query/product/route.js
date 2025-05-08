import { NextResponse } from "next/server";
import { products, addProduct } from "@/app/api/use-router-query/lib/products-data";

export async function GET() {
  try {
    return NextResponse.json(products);

  } catch (error) {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}

export async function POST(request) {
  const body = await request.json();

  const { name, price, description } = body;

  if (!name || !price || !description) {
    return NextResponse.json({ error: "Eksik bilgi " }, { status: 400 });
  }

  const result = addProduct({ name, price, description });

  return NextResponse.json({ id: result.id, message: "Urun eklendi" });
}
