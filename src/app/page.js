import Link from 'next/link';
import './homePage.css'; // Import CSS for styling

export default function HomePage() {
  return (
    <>
      <h1>Willkommen zur Anwendung</h1>
      <p className="description">
        Diese Anwendung ist eine Sammlung einfacher Module, die entwickelt wurden, um das Verständnis von React-Konzepten während des Lernens zu erleichtern. 
        Jedes Modul demonstriert spezifische Funktionen von React, wie z. B. Zustandsverwaltung, Hooks und Komponentenkomposition.
      </p>
      <ul>
        <li>
          <Link href="/product">
            Produktseite - Erkunden Sie Produkte und interagieren Sie mit Produkt- und Benutzerkarten.
          </Link>
        </li>
        <li>
          <Link href="/formControl">
            Formularsteuerungsseite - Verwalten und Vorschau von Benutzerdaten dynamisch.
          </Link>
        </li>
        <li>
          <Link href="/layout">
            Layout-Modul - Demonstriert die Komposition und Layoutverwaltung in React.
          </Link>
        </li>
        <li>
          <Link href="/meals">
            Mahlzeiten-Modul - Erklärt die Zustandsverwaltung und das dynamische Rendern von Listen in React.
          </Link>
        </li>
        <li>
          <Link href="/product2">
            Produkt2-Modul - Konzentriert sich auf die Wiederverwendung von Komponenten und die Handhabung von Props in React.
          </Link>
        </li>
        <li>
          <Link href="/timeShow">
            TimeShow-Modul - Hebt den useEffect-Hook in React zur Verwaltung von Nebeneffekten hervor.
          </Link>
        </li>
        <li>
          <Link href="/useContext">
            UseContent-Modul - Erforscht die Context-API von React zur Verwaltung globaler Zustände.
          </Link>
        </li>
        <li>
          <Link href="/optional-box-visible">
            OptionalBox-Modul - Demonstriert die bedingte Anzeige von Komponenten in React.
          </Link>
        </li>
        <li>
          <Link href="/use-router-query">
            useRouter.Query-Modul - Demonstriert die Verwendung von Routenparametern und API-Interaktionen in React.
          </Link>
        </li>
      </ul>
    </>
  );
}
