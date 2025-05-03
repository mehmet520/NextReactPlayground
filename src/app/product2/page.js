"use client";
import Repeat from "./Repeat";

function ProductList() {
  return (
  <Repeat numTimes={3}>
    {
        (i) => (
            <div
                key={i}
                style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "12px",
                marginBottom: "10px",
                width: "200px",
          }}
            >
                <h3>Urun {i + 1}</h3>
                <p>Urun Aciklamasi #{i + 1}</p>
            </div>
        )
    }

  </Repeat>
  );
}

export default ProductList;
