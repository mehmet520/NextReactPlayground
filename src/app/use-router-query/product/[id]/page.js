export default async function ProductDetailPage({ params }) {
  const { id } = params;

  const res = await fetch(
    `http://localhost:3000/api/use-router-query/product/${id}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    return (
      <div>
        <h1>Produkt nicht gefunden</h1>
        <p>Ungültige Produkt-ID: {id}</p>
      </div>
    );
  }

  const product = await res.json();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <p><strong>Preis:</strong> {product.price}</p>
      <p><strong>Beschreibung:</strong> {product.description}</p>
    </div>
  );
}
