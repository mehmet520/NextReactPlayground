'use client';
import { useState } from 'react';

export default function ProductCreatePage() {
  const [ messageType, setMessageType ] = useState('');

  const [form, setForm] = useState({
    name: '',
    price: '',
    description: ''
  });

    const [ message, setMessage ] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(
          '/api/use-router-query/product',
          {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
          } 
        );

        const data = await res.json();

        if (res.ok) {
            setMessageType('success');
            setMessage(` ${data.message} (ID: ${data.id})`);
            setForm({name: '', price: '', description: ''});
        } else {
          setMessageType('error');
            setMessage(` Hata: ${data.error}`);
        }
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
          <h1>Yeni Ürün Ekle</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Ürün Adı</label><br />
              <input name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div>
              <label>Fiyat</label><br />
              <input name="price" value={form.price} onChange={handleChange} required />
            </div>
            <div>
              <label>Açıklama</label><br />
              <textarea name="description" value={form.description} onChange={handleChange} required />
            </div>
            <button type="submit" style={{ marginTop: '1rem' }}>Ekle</button>
          </form><br />
          <div>
            form nesnesi: {JSON.stringify(form, null, 2)}
          </div>
    
          {message && (
            <div style={{ marginTop: '1rem', color: messageType === 'success' ? 'green' : 'red' }}>
              {message}
            </div>
          )}
        </div>
      );
    }