📘 ProductPulse – Next.js App Router + NextAuth + Express Backend

A clean, responsive mini eCommerce-style application built with Next.js (App Router), NextAuth.js, and a simple Express.js REST API.
Includes public pages, protected pages, authentication, add/manage items, and polished UI.

🚀 Features
🏠 Public Pages

Landing Page

Sticky Navbar (logo + 4 routes + login/register)

Hero section

4 additional sections (features, items preview, testimonials, banner/CTA)

Responsive design, clean spacing

Products List Page (with search UI)

Product Details Page

🔐 Authentication

Google Login (OAuth)

Credentials Login (demo mode)

Redirect to Home after login

Navbar changes to User Dropdown when logged in

🔒 Protected Pages

Accessible only when logged in via NextAuth:

Add Product (form with toast)

Manage Products (table/grid with View + Delete actions)

🎨 UI

Tailwind CSS

Clean typography & colors

Hover/focus states

Responsive grid & layout

📁 Technologies Used

Next.js (App Router)

NextAuth.js (Google + Credentials)

Express.js (simple REST API)

Tailwind CSS

React Hook Form / Fetch API

📂 Project Structure
/ (root)
├─ /app
│  ├─ /products
│  │  ├─ page.tsx
│  │  └─ [id]/page.tsx
│  ├─ /add-product    (protected)
│  ├─ /manage-products (protected)
│  ├─ /api/auth/[...nextauth]
│  └─ layout.tsx
├─ /components
├─ /lib
├─ /server
│  ├─ index.js
│  └─ data/products.json
├─ next.config.js
└─ README.md

⚙️ Setup & Installation
🔧 Backend Setup (Express)

Go to server/

Install dependencies:

npm install


Start server:

npm run dev


Backend will run on:

http://localhost:5000

🎯 Frontend Setup (Next.js)

In project root:

npm install


Create .env.local:

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_long_secret_key

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXT_PUBLIC_API_BASE=http://localhost:5000


Start project:

npm run dev


Open in browser:

http://localhost:3000

🔑 Authentication (NextAuth.js)

Social Login: Google

Credentials Login: simple demo email+password

Session strategy: JWT

Protect pages using useSession() + redirect

🧭 Routes Summary
Public Routes
Route	Description
/	Landing Page
/products	All Products List
/products/[id]	Product Details
/login	Login/Register
Protected Routes
Route	Description
/add-product	Add New Product
/manage-products	View/Delete Products
Backend Routes (Express API)
Method	Route	Description
GET	/products	Get all products
GET	/products/:id	Get product by ID
POST	/products	Add product
DELETE	/products/:id	Delete a product
