import { NextResponse } from 'next/server';
import { products, addProduct } from "@/app/api/use-router-query/lib/products-data";

export async function GET(request, {params}) {  // _ => request object
  try {
    // const { searchParams } = new URL(request.url); // URL'den searchParams alınır.
    // const id = searchParams.get("id"); // id parametresi alınır.
    const { id } = params

    if (id && products[id]) {
      return NextResponse.json(products[id]);
    }

    return NextResponse.json({ error: "Ürün bulunamadı." }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}

