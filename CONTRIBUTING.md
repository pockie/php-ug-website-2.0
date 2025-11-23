# Contributing to PHP USERGROUP DRESDEN Website

Vielen Dank für Ihr Interesse, zur PHP USERGROUP DRESDEN Website beizutragen! 🎉

## Wie kann ich beitragen?

### 🐛 Bug Reports
Wenn Sie einen Fehler gefunden haben:
1. Überprüfen Sie, ob der Fehler bereits als [Issue](https://github.com/php-usergroup-dresden/website/issues) gemeldet wurde
2. Falls nicht, erstellen Sie ein neues Issue mit:
   - Beschreibung des Problems
   - Schritte zur Reproduktion
   - Erwartetes vs. tatsächliches Verhalten
   - Screenshots (falls relevant)
   - Browser/OS Informationen

### 💡 Feature Requests
Für neue Features:
1. Erstellen Sie ein Issue mit dem Label "enhancement"
2. Beschreiben Sie das gewünschte Feature und den Anwendungsfall
3. Diskutieren Sie mit der Community

### 🔧 Code Contributions

#### Setup
```bash
# Repository forken und klonen
git clone https://github.com/IHR-USERNAME/php-ug-website-2.0.git
cd php-ug-website-2.0

# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

#### Development Workflow
1. **Fork** des Repositories erstellen
2. **Branch** für Ihr Feature erstellen: `git checkout -b feature/amazing-feature`
3. **Änderungen** committen: `git commit -m 'Add amazing feature'`
4. **Push** zum Branch: `git push origin feature/amazing-feature`
5. **Pull Request** erstellen

#### Code Style Guidelines
- **TypeScript**: Verwenden Sie TypeScript für alle neuen Funktionen
- **Astro Components**: Folgen Sie der bestehenden Komponentenstruktur
- **Formatting**: Code wird automatisch mit Prettier formatiert
- **Linting**: ESLint-Regeln müssen befolgt werden
- **Commits**: Verwenden Sie aussagekräftige Commit-Nachrichten

#### Projektstruktur
```
src/
├── components/    # Wiederverwendbare Astro-Komponenten
├── content/       # Markdown-Content (Events, etc.)
├── layouts/       # Layout-Komponenten
├── pages/         # Routen (file-based routing)
├── styles/        # CSS-Dateien
├── types/         # TypeScript-Typen
└── utils/         # Utility-Funktionen
```

### 📝 Content Contributions

#### Neue Events hinzufügen
Events werden als Markdown-Dateien in `src/content/events/` gespeichert:

```markdown
---
title: "Meetup Titel"
date: "2024-MM-DDTHH:MM:SS"
location:
  name: "Veranstaltungsort"
  address: "Adresse"
  mapsUrl: "Google Maps Link"
program:
  - time: "19:00 Uhr"
    title: "Talk Titel"
    speaker: "Speaker Name"
    # ... weitere Program-Items
---

# Event Beschreibung
Markdown-Content für die Event-Detailseite.
```

#### Bilder und Assets
- Bilder in `public/images/` speichern
- Optimierte Formate verwenden (WebP bevorzugt)
- Alt-Texte für Barrierefreiheit hinzufügen

### 🧪 Testing
```bash
# Build testen
npm run build

# Preview der Production-Version
npm run preview

# Type Checking
npx astro check
```

### 📋 Pull Request Checklist
- [ ] Code läuft lokal ohne Fehler
- [ ] Neue Features sind dokumentiert
- [ ] Breaking Changes sind dokumentiert
- [ ] Tests laufen durch (falls vorhanden)
- [ ] PR-Beschreibung erklärt die Änderungen
- [ ] Screenshots für UI-Änderungen beigefügt

### 🤝 Community Guidelines
- Seien Sie respektvoll und konstruktiv
- Verwenden Sie eine klare, verständliche Sprache
- Helfen Sie anderen Community-Mitgliedern
- Folgen Sie dem [Code of Conduct](CODE_OF_CONDUCT.md)

### 📞 Kontakt
- **Issues**: GitHub Issues für technische Fragen
- **Community**: [PHP USERGROUP DRESDEN](https://phpug-dresden.org)
- **E-Mail**: Siehe Website für Kontaktdaten

Vielen Dank für Ihren Beitrag zur PHP-Community in Dresden! 🚀