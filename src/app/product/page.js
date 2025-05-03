'use client';

import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import CardContainer from "./components/CardContainer";
import './product.css'; // Import updated CSS for styling

export default function Product() {
  const handleAddToCart = (productName) => {
    alert(`Produkt in den Warenkorb gelegt: ${productName}`);
  };

  const handleSendEmail = (email) => {
    alert(`E-Mail gesendet an: ${email}`);
  };

  return (
    <div className="product-page">
      <h1>Produktseite</h1>
      <p>
        Diese Seite demonstriert die komponentenbasierte Architektur von React durch die Wiederverwendung von Komponenten wie ProductCard und UserCard.
      </p>
      <CardContainer>
        <ProductCard
          title="T-Shirt"
          price={10}
          image="/images/manzara1.jpg"
          onAddToCart={handleAddToCart}
        />
        <UserCard
          name="Ali"
          email="ali@example"
          image="/images/manzara2.jpg"
          onSendEmail={handleSendEmail}
        />
      </CardContainer>
    </div>
  );
}
