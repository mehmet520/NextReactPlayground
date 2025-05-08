import './globals.css'; // Global CSS dosyasını içe aktar

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children} {/* Alt sayfalar burada render edilir */}
      </body>
    </html>
  );
}
