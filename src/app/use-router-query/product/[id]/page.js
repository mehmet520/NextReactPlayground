export default async function ProductDetailPage({ params }) {
  const { id } = params;

  const res = await fetch(
    `http://localhost:3000/api/use-router-query/product/${id}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    return (
      <div>
        <h1>Ürün Bulunamadı</h1>
        <p>Geçersiz ürün ID: {id}</p>
      </div>
    );
  }

  const product = await res.json();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <p><strong>Fiyat:</strong> {product.price}</p>
      <p><strong>Açıklama:</strong> {product.description}</p>
    </div>
  );
}
