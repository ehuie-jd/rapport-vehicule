# 🚗 Rapport Flotte Pro

Application web de gestion de flotte de véhicules — rapports quotidiens, suivi des recettes, dépenses et arriérés.

---

## 🚀 Déploiement en 3 étapes

### ÉTAPE 1 — Mettre sur GitHub

1. Va sur **https://github.com** et connecte-toi (ou crée un compte gratuit)
2. Clique sur le bouton vert **"New"** pour créer un nouveau dépôt
3. Nom du repo : `rapport-flotte-pro`
4. Laisse-le en **Public**, clique **Create repository**
5. Sur la page qui s'affiche, copie l'URL du repo (ex: `https://github.com/TON_NOM/rapport-flotte-pro.git`)

**Sur ton ordinateur**, ouvre un terminal dans le dossier du projet et exécute :

```bash
git init
git add .
git commit -m "🚗 Initial commit — Rapport Flotte Pro"
git branch -M main
git remote add origin https://github.com/TON_NOM/rapport-flotte-pro.git
git push -u origin main
```

---

### ÉTAPE 2 — Déployer sur Vercel

1. Va sur **https://vercel.com** et clique **"Sign Up with GitHub"**
2. Clique **"Add New Project"**
3. Sélectionne ton repo `rapport-flotte-pro`
4. Vercel détecte automatiquement Next.js — clique **Deploy** !
5. En ~2 minutes, ton app est en ligne sur une URL comme `https://rapport-flotte-pro.vercel.app`

✅ **C'est tout !** À chaque fois que tu fais un `git push`, Vercel redéploie automatiquement.

---

### ÉTAPE 3 — Installer sur smartphone (PWA)

**Sur iPhone (Safari) :**
1. Ouvre l'URL de ton app dans Safari
2. Appuie sur l'icône **Partager** (carré avec flèche vers le haut)
3. Fais défiler et tape **"Sur l'écran d'accueil"**
4. Tape **"Ajouter"** — l'app apparaît comme une vraie app !

**Sur Android (Chrome) :**
1. Ouvre l'URL dans Chrome
2. Appuie sur les **3 points** en haut à droite
3. Tape **"Ajouter à l'écran d'accueil"**
4. Confirme — l'app s'installe !

---

## 🛠️ Développement local

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

---

## ⚙️ Configuration Firebase

Les clés Firebase sont déjà intégrées dans le code (`src/components/RapportApp.tsx`).

Pour activer la sauvegarde cloud, active dans la console Firebase :
- **Authentication** → Sign-in method → **Anonyme** ✓
- **Firestore Database** → Créer une base de données

---

## 📁 Structure du projet

```
rapport-flotte/
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Layout avec meta PWA
│   │   ├── page.tsx      # Page principale
│   │   └── globals.css   # Styles Tailwind
│   └── components/
│       └── RapportApp.tsx  # Application complète
├── public/
│   ├── manifest.json     # Config PWA
│   ├── icon-192.png      # Icône app
│   └── icon-512.png      # Icône app grande
└── package.json
```
