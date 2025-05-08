export const products = {
    1: { name: 'Kahve Makinesi', price: '₺1500', description: 'Sabahlar için mükemmel!' },
    2: { name: 'Kablosuz Kulaklık', price: '₺700', description: 'Müzik her yerde seninle.' },
    3: { name: 'Laptop', price: '₺10.000', description: 'İş ve oyun için güçlü bir bilgisayar.' },
  };

  export let lastId = Math.max(...Object.keys(products).map(Number));

  export function addProduct({ name, price, description }) {
    const newId = ++lastId;
    products[newId] = { name, price, description };
    return { id: newId };
  }
  