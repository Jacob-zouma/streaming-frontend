
# 🎥 Streaming Frontend

Interface frontend pour une plateforme de streaming vidéo, construite avec **Vite**, **React** et **Tailwind CSS**.

---

## 🚀 Stack utilisée

- [Vite](https://vitejs.dev/) — Build tool ultra rapide
- [React](https://reactjs.org/) — Bibliothèque JavaScript pour les interfaces
- [Tailwind CSS](https://tailwindcss.com/) — Framework CSS utilitaire
- [Netlify](https://www.netlify.com/) — Déploiement et hébergement

---

## 📦 Installation locale

```bash
git clone https://github.com/Jacob-zouma/streaming-frontend.git
cd streaming-frontend
npm install
npm run dev
```

---

## 🧪 Structure du projet

```
├── public/              # Contenus publics (favicon, vite.svg, etc.)
├── src/                 # Code source principal
│   ├── assets/          # Images et médias
│   ├── components/      # Composants réutilisables
│   ├── pages/           # Pages (Login, Register, Home)
│   ├── App.jsx          # Composant principal
│   ├── index.css        # Fichier Tailwind
│   └── main.jsx         # Point d'entrée React
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml         # Configuration Netlify
└── README.md
```

---

## 🖌️ Tailwind CSS

Les classes utilitaires sont utilisées via Tailwind. N'oubliez pas d'ajouter ces directives dans `index.css` :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🧾 Script de build

Pour produire une version optimisée du projet :

```bash
npm run build
```

La sortie sera dans le dossier `dist/`.

---

## 🚀 Déploiement sur Netlify

### 1. Pré-requis

Assurez-vous d’avoir :

- Un compte [Netlify](https://netlify.com)
- Le projet hébergé sur GitHub

### 2. Étapes

1. Aller sur [https://app.netlify.com](https://app.netlify.com)
2. **"Add new site" > "Import from Git"**
3. Sélectionner le repo **`streaming-frontend`**
4. Vérifier les paramètres :

   - **Build command** : `npm run build`
   - **Publish directory** : `dist`

5. Cliquer sur **"Deploy site"**

### 3. Redirections SPA (React Router)

Netlify respecte `netlify.toml` :

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Cela évite les erreurs 404 quand on rafraîchit une page.

---

## 📎 Liens utiles

- 🔗 Déploiement : [https://ton-app.netlify.app](https://ton-app.netlify.app) *(à remplacer avec ton lien réel)*
- 💬 Auteur : [@Jacob-zouma](https://github.com/Jacob-zouma)

---

## ✅ À faire

- [ ] Connexion à l'API backend
- [ ] Gestion des vidéos en base de données
- [ ] Authentification avec jeton (JWT)
- [ ] Responsive complet

---
