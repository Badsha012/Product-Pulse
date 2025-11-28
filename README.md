# ProductPulse

**ProductPulse** — a clean, responsive mini eCommerce-style application built with **Next.js (App Router)**, **NextAuth.js**, and a simple **Express.js** REST API. It includes public pages, protected pages (via NextAuth), product add/manage features, and a polished UI using Tailwind CSS.

---

## 🚀 Features

* **Public pages**

  * Landing page with hero, features, items preview, testimonials, and CTA banner
  * Sticky Navbar (logo + routes + login/register)
  * Products List page (with search UI)
  * Product Details page

* **Authentication (NextAuth)**

  * Google OAuth login
  * Credentials login (demo mode)
  * Redirect to home after login
  * Navbar switches to user dropdown when logged in

* **Protected pages** (accessible only when logged in)

  * Add Product (form with validation + toast on success)
  * Manage Products (table/grid with View + Delete actions)

* **UI**

  * Tailwind CSS-based design
  * Responsive layout, clean spacing, hover/focus states
  * React Hook Form for forms

---

## 🧰 Technologies

* Next.js (App Router)
* NextAuth.js (Google + Credentials)
* Express.js (simple REST API)
* Tailwind CSS
* React Hook Form
* Fetch API

---

## 📁 Project Structure (high level)

```
/ (root)
├─ /app
│ ├─ /products
│ │ ├─ page.tsx
│ │ └─ [id]/page.tsx
│ ├─ /add-product (protected)
│ ├─ /manage-products (protected)
│ ├─ /api/auth/[...nextauth]
│ └─ layout.tsx
├─ /components
├─ /lib
├─ /server        # Express backend (simple)
│ ├─ index.js
│ └─ data/products.json
├─ next.config.js
└─ README.md
```

---

## ⚙️ Setup & Installation

> The project has two parts: **Backend (Express)** and **Frontend (Next.js)**. Follow the instructions below to run locally.

### 🔧 Backend (Express)

1. Open terminal and go to the `server/` folder:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Start the backend in development:

```bash
npm run dev
```

4. By default (for local dev) the backend runs on:

```
http://localhost:3001/products
```

> **Important:** Vercel is NOT suitable for running a long-lived Express server. Deploy your Express backend to platforms that support persistent Node servers (Render, Railway, Cyclic, Heroku, etc.).

### 🎯 Frontend (Next.js)

1. From the project root install dependencies:

```bash
npm install
```

2. Create `.env.local` in project root and add the environment variables:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_long_secret_key

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXT_PUBLIC_API_BASE=http://localhost:3001/products
```

3. Start the frontend in development:

```bash
npm run dev
```

4. Open the app in your browser:

```
http://localhost:3000
```

---

## 🔐 Authentication (NextAuth)

* **Providers**: Google OAuth + Credentials (demo)
* **Strategy**: JWT sessions
* **Protect pages**: use `useSession()` or NextAuth server helpers to redirect unauthenticated users to `/login`.

Example server-side check (App Router):

```ts
import { getServerSession } from "next-auth";
// or use `useSession()` in client components
```

---

## 🛠 Backend API (Express)

Assuming the backend base URL is `http://localhost:3001` (or your deployed backend URL):

| Method |           Route |       Description |
| ------ | --------------: | ----------------: |
| GET    |     `/products` |  Get all products |
| GET    | `/products/:id` | Get product by ID |
| POST   |     `/products` | Add a new product |
| DELETE | `/products/:id` |  Delete a product |

**Note:** If your frontend is deployed to Vercel and your backend is also attempted to be deployed on Vercel as a full Express server, it will fail — use a proper Node hosting provider for the backend and set `NEXT_PUBLIC_API_BASE` to the deployed backend URL.

---

## 🪄 Deployment Notes

* **Frontend (Next.js)**: works well on **Vercel**. Make sure you add environment variables in Vercel Dashboard (Production & Preview) and set `NEXT_PUBLIC_API_BASE` to the deployed backend URL.

* **Backend (Express)**: deploy to **Railway**, **Render**, **Cyclic**, or similar service. After deployment, update `NEXT_PUBLIC_API_BASE` on Vercel to point at the deployed backend.

* **Logs**: If you get `Application error: a server-side exception has occurred` on Vercel, check the **Vercel Deployments → Logs** to see the exact runtime error.

---

## ✅ Troubleshooting

* **Nothing to commit** in Git: ensure files are saved and run `git status` → `git add .` → `git commit -m "msg"` → `git push`.
* **Vercel server error**: usually caused by trying to run Express on Vercel — move backend to a proper host and update frontend API URL.
* **CORS / API inaccessible**: ensure backend allows requests from frontend origin or use a proper deployed backend URL.

---

## 🧩 Tips & Improvements

* Convert the Express API to serverless functions (if you prefer keeping everything on Vercel) — but that requires code changes (stateless handlers, file storage, etc.).
* Add persistent storage (MongoDB / PostgreSQL) for products instead of a JSON file.
* Add image upload to S3 / Cloudinary.
* Add role-based auth for admin-only actions.

---

## 📜 License

MIT License

---

If you want, I can:

* generate a ready-to-commit `README.md` file in the repo,
* or create deployment scripts for Render/Railway and show exact steps to deploy the backend and update the frontend.

Tell me which one you prefer.
