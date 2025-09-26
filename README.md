# ScapeSync

![ScapeSync Mockup](https://res.cloudinary.com/ddckuxsjx/image/upload/v1758859196/ScapeSyncMockup_newbw0.png)

## 🚀 Live Website

[ScapeSync Live](https://scapesync-beta.vercel.app/)

## 📂 GitHub Repository

[ScapeSync Repo](https://github.com/arafat22184/ScapeSync)

---

## 📖 Overview

ScapeSync is a modern web application built with **Next.js 15**, **NextAuth.js**, **Tailwind CSS**, and **React 19**.  
It includes authentication, role-based routing, reusable components, and a clean UI.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (Turbopack)
- **Authentication**: NextAuth.js (Google OAuth & Credentials)
- **UI & Styling**: React 19, Tailwind CSS, React Icons, Sonner (notifications)
- **Animation**: Motion
- **Deployment**: Vercel

---

## 📑 Features

- 🔐 Authentication (Google & API-based)
- 👤 User role identification
- 🚫 Protected routes (restrict access for logged-in users on `/login`, `/register`, `/userRole`)
- 📱 Responsive UI with Tailwind CSS
- ✨ Animated components with Motion
- 📦 Component-based clean structure

---

## 📂 Folder Structure

```bash
├── 📜 README.md
├── 📁 app
│ ├── 📁 (Authentication)
│ │ ├── layout.js
│ │ ├── loading.js
│ │ ├── 📁 login
│ │ │ ├── page.js
│ │ ├── 📁 register
│ │ │ ├── page.js
│ │ │ ├── 📁 verify
│ │ │ │ ├── page.js
│ │ │ │ ├── 📁 success
│ │ │ │ │ ├── page.js
│ │ ├── 📁 resetPassword
│ │ │ ├── page.js
│ │ │ ├── 📁 verify
│ │ │ │ ├── page.js
│ │ ├── 📁 updatePassword
│ │ │ ├── page.js
│ │ │ ├── 📁 success
│ │ │ │ ├── page.js
│ ├── 📁 (Identification)
│ │ ├── layout.js
│ │ ├── loading.js
│ │ ├── 📁 userRole
│ │ │ ├── page.js
│ ├── ClientSessionProvider.jsx
│ ├── 📁 api/auth/[...nextauth]/route.js
│ ├── 📁 components
│ │ ├── 📁 Authentication
│ │ │ ├── LoginForm.jsx
│ │ │ ├── Navbar.jsx
│ │ │ ├── RegisterForm.jsx
│ │ │ ├── RegisterVerifyForm.jsx
│ │ │ ├── 📁 ResetPassword
│ │ │ │ ├── ResetPassVerifyForm.jsx
│ │ │ │ ├── ResetPasswordForm.jsx
│ │ │ │ ├── UpdatePasswrodForm.jsx
│ │ ├── 📁 Home
│ │ │ ├── Banner.jsx
│ │ │ ├── 📁 FAQS
│ │ │ │ ├── FAQ.jsx
│ │ │ │ ├── FAQS.jsx
│ │ │ ├── Feature.jsx
│ │ │ ├── Features.jsx
│ │ │ ├── 📁 Footer
│ │ │ │ ├── Footer.jsx
│ │ │ ├── Navbar.jsx
│ │ │ ├── 📁 Reviews
│ │ │ │ ├── Review.jsx
│ │ │ │ ├── Reviews.jsx
│ │ │ ├── 📁 UserFocusedFeatures
│ │ │ │ ├── UserFocusedFeatures.jsx
│ │ ├── ProtectedRoute.js
│ ├── favicon.ico
│ ├── globals.css
│ ├── layout.js
│ ├── loading.js
│ ├── page.js
├── eslint.config.mjs
├── jsconfig.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── 📁 public
│ ├── file.svg
│ ├── globe.svg
│ ├── next.svg
│ ├── vercel.svg
│ ├── window.svg
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add the following:

```bash
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

---

## 🖥️ Installation & Running Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/arafat22184/ScapeSync.git
cd ScapeSync
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Add environment variables

Create `.env.local` file and fill in required keys.

### 4️⃣ Run the development server

```bash
npm run dev
```

### 5️⃣ Build for production

```bash
npm run build
npm start
```

---

## 📦 Build Information

- Optimized with **Next.js Turbopack**
- Static and server-rendered pages
- Deployed on **Vercel**

---

## 📸 Screenshots

![Mockup](https://res.cloudinary.com/ddckuxsjx/image/upload/v1758859196/ScapeSyncMockup_newbw0.png)

---

## 👨‍💻 Author

- **Arafat**  
  🔗 [GitHub](https://github.com/arafat22184)
