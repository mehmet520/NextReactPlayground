'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch('/api/use-router-query/product');
      const data = await res.json();

      // obje donerse objeyi diziye cevir
      const productArray = Object.entries(data).map(([id, value]) => ({
        id,
        ...value,
      }));
      setProducts(productArray);
    };

    fetchProduct();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Produktliste</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/use-router-query/product/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/use-router-query/product/create">
        <button>Produkt hinzufügen</button>
      </Link>
    </div>
  );
}
