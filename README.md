# # Letter Lab 🧰

Free online text transformation and analysis tools built for speed, privacy, and simplicity. All manipulations run locally in the browser — no data is sent to external servers.

🌐 **Live Website:** [https://letterlab.netlify.app](https://letterlab.netlify.app](https://letterlab.netlify.app))

---

## 🛠️ Tech Stack & Analytics

- **Framework:** [Astro]([https://astro.build/](https://astro.build/)) (Static Site Generation / SSG)
- **Styling:** Tailwind CSS (via CDN)
- **Integrations:** `@astrojs/sitemap`
- **Analytics & Tag Management:** Google Tag Manager (GTM), Google Analytics 4 (GA4), Yandex Metrika
- **Hosting / Deployment:** Netlify (Automated CI/CD via GitHub)

---

## 🚀 Key Features

- **20 Text Tools:** Case converters (Uppercase, Lowercase, Title Case, CamelCase, Kebab-case, etc.), text cleaners (Trim, Remove Spaces/Duplicates/Numbers/Punctuation), Encoders (Base64, URL Encode), Word Counter.
- **100% Client-Side:** Fast processing with zero backend latency.
- **SEO Optimized:** Automated XML sitemap generation, canonical URLs, structured data ([Schema.org](http://Schema.org)), dynamic page titles, and meta descriptions.
- **Fully Responsive:** Clean UI built with Tailwind CSS.

---

## 📁 Project Structure

```text

/

├── public/

│   ├── favicon.svg

│   ├── favicon.ico

│   └── yandex_dbfe0b465e0f0b25.html   # Yandex verification

├── src/

│   ├── layouts/

│   │   └── Layout.astro               # Base layout with GTM & Yandex scripts

│   ├── pages/

│   │   ├── index.astro                # Home page listing all tools

│   │   ├── about.astro                # About & Creator info (with [Schema.org](http://Schema.org))

│   │   ├── privacy.astro              # Privacy Policy

│   │   ├── terms.astro                # Terms of Service

│   │   └── tools/                     # Individual tool pages (20 tools)

│   └── styles/

│       └── style.css

├── astro.config.mjs                   # Astro config with Sitemap integration

├── robots.txt                         # Crawler directives

└── package.json
```

---

## 💻 Local Development

1. **Clone the repository:**
  Bash
  ```
  git clone [https://github.com/Sidspirit/letterlab.git](https://github.com/Sidspirit/letterlab.git)
  cd letterlab
  ```
2. **Install dependencies:**
  Bash
  ```
  npm install
  ```
3. **Start the development server:**
  Bash
  ```
  npm run dev
  ```
4. **Build for production:**
  Bash
  ```
  npm run build
  ```

---

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).