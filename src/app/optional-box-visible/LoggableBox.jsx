'use client'

import { useEffect } from "react";

export default function LoggableBox({ visible }) {
    useEffect(() => {
        const logVisibility = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                component: 'LoggableBox',
                visibility: visible ? 'shown' : 'hidden',
                timestamp: new Date().toISOString(),
              }),
            });
    
            if (!response.ok) throw new Error('Log gönderimi başarısız');
            console.log('✅ Görünürlük sunucuya bildirildi');
          } catch (err) {
            console.error('❌ Görünürlük log hatası:', err);
          }
        };
    
        logVisibility();
      }, [visible]);

    if (!visible) return null

    return (
        <div style={{border: '2px solid #0070f3', padding: '10px', marginTop: '10px' }}>
            <h3>Loggable Details</h3>
            <p>Wenn diese Box sichtbar ist, wird eine Nachricht in die Konsole protokolliert.</p>
        </div>
    )

}