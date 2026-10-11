<div align="center">

# 🏥 MediCare — Hospital Management System

**A full-stack, production-grade healthcare platform** with real-time appointment booking, online payments, dual-panel administration, and role-based doctor portals.

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-Patient%20Portal-FF6B6B?style=for-the-badge&logoColor=white)](https://hospital-management-system-cgus.vercel.app/)
[![Admin Panel](https://img.shields.io/badge/🛡️%20Admin-Control%20Panel-845EF7?style=for-the-badge&logoColor=white)](https://hospital-management-system-five-beryl.vercel.app/)
[![Backend API](https://img.shields.io/badge/⚙️%20Backend-REST%20API-F59E0B?style=for-the-badge&logoColor=white)](https://vercel.com/prashantsinghcodes-3620s-projects/hospital-management-system-backend)

![React 19](https://img.shields.io/badge/React_19-20D9D2?style=flat-square&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-6DB33F?style=flat-square&logo=node.js&logoColor=white)
![Express 5](https://img.shields.io/badge/Express_5-F8F8F8?style=flat-square&logo=express&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-00ED64?style=flat-square&logo=mongodb&logoColor=black)
![Stripe](https://img.shields.io/badge/Stripe-7C3AED?style=flat-square&logo=stripe&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk_Auth-F59E0B?style=flat-square&logo=clerk&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3B82F6?style=flat-square&logo=cloudinary&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-FF4785?style=flat-square&logo=vercel&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_8-BD34FE?style=flat-square&logo=vite&logoColor=white)

</div>

---

## ✨ Key Features

### 👤 Patient Portal (Frontend)
| Feature | Details |
|---|---|
| 🔍 **Doctor Discovery** | Browse & search doctors by name, specialization, availability |
| 📅 **Appointment Booking** | Select doctor → pick date & time slot → confirm booking |
| 💳 **Online Payments** | Secure checkout via **Stripe** (card payments, session-based flow) |
| 🧾 **My Appointments** | View, track, and cancel personal appointments with live status |
| 🏥 **Hospital Services** | Explore and book hospital services (labs, scans, procedures) |
| 📝 **Doctor Profiles** | Detailed profiles — specialization, experience, fee, schedule, ratings |
| 🔐 **Authentication** | Clerk-powered sign-in / sign-up (OAuth + email) |

### 🛡️ Admin Panel
| Feature | Details |
|---|---|
| 📊 **Dashboard** | Live KPIs — total appointments, registered patients, revenue stats |
| 👨‍⚕️ **Doctor Management** | Add, edit, delete doctors with profile image upload (Cloudinary) |
| 📋 **Appointments** | View all appointments, update status (Confirmed / Completed / Canceled / Rescheduled) |
| 🏨 **Service Management** | Full CRUD for hospital services — pricing, slots, availability |
| 📅 **Service Appointments** | Separate dashboard tracking all service bookings end-to-end |
| 🔒 **Protected Routes** | Clerk-authenticated — admin access only |

### 👨‍⚕️ Doctor Portal (Built into Frontend)
| Feature | Details |
|---|---|
| 🔑 **JWT Login** | Separate login flow for doctors using their credentials |
| 📋 **My Appointments** | View all appointments assigned to the doctor |
| ✏️ **Edit Profile** | Update bio, qualifications, experience, availability, schedule, fee |
| 📷 **Image Upload** | Update profile photo via Cloudinary integration |
| 🟢 **Toggle Availability** | Instantly toggle Available / Unavailable status |

---

## 🏗️ Architecture

This is a **3-app monorepo** structured for independent deployment:

```
hospital-management/
├── frontend/          # Patient-facing React app    (Vite + React 19 + TailwindCSS v4)
├── admin/             # Admin & management panel    (Vite + React 19 + TailwindCSS v4)
└── backend/           # REST API server              (Express 5 + MongoDB + Mongoose)
```

### System Design

```
┌──────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                             │
│   ┌─────────────────┐              ┌──────────────────────┐      │
│   │  Patient Portal  │              │     Admin Panel       │      │
│   │  (React + Clerk) │              │  (React + Clerk)     │      │
│   └────────┬─────────┘              └──────────┬───────────┘      │
└────────────┼──────────────────────────────────┼───────────────────┘
             │  HTTPS / REST API                  │
┌────────────▼──────────────────────────────────▼───────────────────┐
│                         API LAYER (Express 5)                      │
│  /api/doctors  |  /api/appointments  |  /api/services             │
│                   /api/service-appointments                        │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  Middleware: Clerk Auth · JWT Doctor Auth · Multer · CORS    │  │
│  └──────────────────────────────────────────────────────────────┘  │
└────────────────────┬──────────────────────────────────────────────┘
                     │
     ┌───────────────┼────────────────────┐
     ▼               ▼                    ▼
  MongoDB         Cloudinary           Stripe
  (Atlas)       (Image CDN)        (Payments)
```

---

## 🛠️ Tech Stack

### Frontend & Admin
| Technology | Purpose |
|---|---|
| **React 19** | UI framework with latest concurrent features |
| **Vite 8** | Lightning-fast build tool & dev server |
| **TailwindCSS v4** | Utility-first styling |
| **React Router v7** | Client-side routing |
| **Clerk** | Authentication (OAuth, email/password) |
| **Axios** | HTTP client |
| **Lucide React** | Icon library |
| **React Hot Toast** | Toast notification system |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js + Express 5** | REST API server (ESM modules) |
| **MongoDB + Mongoose 9** | Database & ODM with text-search indexes |
| **Clerk SDK** | Server-side auth middleware |
| **JWT** | Doctor authentication tokens |
| **Stripe** | Payment processing & checkout sessions |
| **Cloudinary** | Cloud image storage & transformation |
| **Multer** | Multipart file upload handling |
| **Validator** | Input sanitization & validation |

### Infrastructure
| Technology | Purpose |
|---|---|
| **Vercel** | Serverless deployment for all 3 apps |
| **MongoDB Atlas** | Managed cloud database |
| **Cloudinary** | Media CDN |

---

## 💳 Payment Flow

```
Patient selects slot
       │
       ▼
  Stripe Checkout Session created (backend)
       │
       ▼
  Patient completes payment on Stripe-hosted page
       │
  ┌────┴─────────────────────┐
  │ Success                   │ Cancel
  ▼                           ▼
/appointment/success      /appointment/cancel
       │
       ▼
  Backend confirms session → marks appointment "Paid"
       │
       ▼
  Appointment active ✅
```

> Same flow for **Service Appointments** via `/service-appointment/success|cancel`

---

## 📁 Project Structure

<details>
<summary><strong>Backend</strong></summary>

```
backend/
├── server.js                        # App entry, middleware, route mounting
├── config/
│   └── db.js                        # MongoDB connection
├── models/
│   ├── Doctor.js                    # Doctor schema (text search indexed)
│   ├── Appointment.js               # Appointment schema (payment sub-doc)
│   ├── Service.js                   # Service schema (slot map)
│   └── serviceAppointment.js        # Service appointment schema
├── controllers/
│   ├── doctorController.js          # CRUD + login + availability toggle
│   ├── appointmentController.js     # Booking, payment confirm, stats
│   ├── serviceController.js         # Service CRUD
│   └── serviceAppointmentController.js
├── routes/
│   ├── doctorRoute.js
│   ├── appointmentRoute.js
│   ├── serviceRoute.js
│   └── serviceAppointmentRoute.js
├── middlewares/
│   ├── doctorAuth.js                # JWT verification for doctor routes
│   └── multer.js                    # File upload config
└── utils/
    └── cloudinary.js                # Cloudinary upload/delete helpers
```
</details>

<details>
<summary><strong>Frontend</strong></summary>

```
frontend/src/
├── pages/
│   ├── Home.jsx                     # Landing page
│   ├── Doctors.jsx                  # Doctor listing with filters
│   ├── DoctorDetail.jsx             # Doctor profile + booking
│   ├── Service.jsx                  # Service listing
│   ├── ServiceDetailPage.jsx        # Service detail + booking
│   ├── Appointments.jsx             # Patient's appointments
│   └── Contact.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Banner.jsx
│   ├── AppointmentPage.jsx          # Booking logic
│   ├── DoctorsPage.jsx
│   ├── ListPage.jsx                 # Patient appointment list
│   ├── ServicePage.jsx
│   ├── EditPageProfile.jsx          # Doctor profile editor
│   ├── Testimonial.jsx
│   └── Footer.jsx
└── doctor/                          # Doctor self-service portal
    ├── List.jsx                     # Doctor's appointment list
    └── EditProfile.jsx
```
</details>

<details>
<summary><strong>Admin Panel</strong></summary>

```
admin/src/
├── pages/
│   ├── Home.jsx                     # Admin dashboard
│   ├── Add.jsx / AddSer.jsx         # Add doctor / service
│   ├── List.jsx / ListService.jsx   # Manage doctors / services
│   ├── Appointments.jsx             # All doctor appointments
│   ├── SerDashboard.jsx             # Service metrics dashboard
│   └── ServiceAppointments.jsx     # All service appointments
└── components/
    ├── DashboardPage.jsx            # KPI widgets + stats
    ├── AddPage.jsx                  # Add doctor form
    ├── AddService.jsx               # Add service form
    ├── AppointmentsPage.jsx
    ├── ServiceAppointmentsPage.jsx
    ├── ServiceDashboard.jsx
    └── Navbar.jsx
```
</details>

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- MongoDB Atlas account
- Stripe account (test mode keys)
- Cloudinary account
- Clerk account

### 1. Clone the repository
```bash
git clone https://github.com/your-username/hospital-management.git
cd hospital-management
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `backend/.env`:
```env
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLERK_SECRET_KEY=your_clerk_secret_key
FRONTEND_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174
```

```bash
npm run dev     # Runs on http://localhost:4000
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create `frontend/.env`:
```env
VITE_BACKEND_URL=http://localhost:4000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

```bash
npm run dev     # Runs on http://localhost:5173
```

### 4. Admin Panel Setup
```bash
cd admin
npm install
```

Create `admin/.env`:
```env
VITE_BACKEND_URL=http://localhost:4000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

```bash
npm run dev     # Runs on http://localhost:5174
```

---

## 🌐 Deployment (Vercel)

All three apps are independently deployable to Vercel. Each directory contains a `vercel.json` configured for SPA routing.

**Recommended deploy order:**
1. **Backend** → Configure all env vars in Vercel dashboard
2. **Frontend** → Set `VITE_BACKEND_URL` to deployed backend URL
3. **Admin** → Set `VITE_BACKEND_URL` to deployed backend URL
4. Update `FRONTEND_URL` & `ADMIN_URL` in backend Vercel env vars

---

## 📡 REST API Reference

<details>
<summary><strong>Doctors</strong> — <code>GET|POST|PUT|DELETE /api/doctors</code></summary>

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/` | Public | List all doctors (supports text search) |
| `GET` | `/:id` | Public | Get doctor by ID |
| `POST` | `/` | Admin | Create doctor with image upload |
| `POST` | `/login` | — | Doctor login → returns JWT |
| `PUT` | `/:id` | Doctor JWT | Update profile + image |
| `POST` | `/:id/toggle-availability` | Doctor JWT | Toggle availability |
| `DELETE` | `/:id` | Admin | Delete doctor |
</details>

<details>
<summary><strong>Appointments</strong> — <code>/api/appointments</code></summary>

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/` | Admin | All appointments |
| `GET` | `/me` | Clerk | Patient's own appointments |
| `GET` | `/doctor/:doctorId` | Doctor JWT | Doctor's appointments |
| `GET` | `/stats/summary` | Admin | Dashboard KPI stats |
| `GET` | `/patients/count` | Admin | Registered patient count |
| `GET` | `/confirm` | — | Stripe payment confirmation |
| `POST` | `/` | Clerk | Create appointment (Stripe session) |
| `POST` | `/:id/cancel` | Clerk | Cancel appointment |
| `PUT` | `/:id` | Admin | Update appointment status |
</details>

<details>
<summary><strong>Services</strong> — <code>/api/services</code></summary>

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/` | Public | List all services |
| `GET` | `/:id` | Public | Service details |
| `POST` | `/` | Admin | Create service |
| `PUT` | `/:id` | Admin | Update service |
| `DELETE` | `/:id` | Admin | Delete service |
</details>

<details>
<summary><strong>Service Appointments</strong> — <code>/api/service-appointments</code></summary>

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/` | Admin | All service appointments |
| `GET` | `/me` | Clerk | Patient's service appointments |
| `GET` | `/stats` | Admin | Service dashboard stats |
| `POST` | `/` | Clerk | Book service (Stripe session) |
| `POST` | `/:id/cancel` | Clerk | Cancel service appointment |
| `PUT` | `/:id` | Admin | Update status |
</details>

---

## 🔐 Security

- **Clerk middleware** validates session tokens server-side on all protected routes
- **Doctor JWT** — stateless auth for doctor-only endpoints, separate from Clerk
- **Role separation** — Admin actions behind Clerk auth; patient actions tied to Clerk user identity
- **CORS** — Strict allowlist of frontend and admin origins
- **Input validation** — `validator` library sanitizes all user inputs
- **Payment security** — Stripe session-based checkout; no raw card data ever touches the backend

---

## 🗃️ Database Schema Highlights

### Appointment
```js
{
  owner: "clerk_user_id",          // Patient identity (Clerk)
  doctorId: ObjectId,              // Ref: Doctor
  date, time,                      // Booking slot
  status: "Pending|Confirmed|Completed|Canceled|Rescheduled",
  rescheduledTo: { date, time },
  payment: {
    method: "Cash|Online",
    status: "Pending|Paid|Failed|Refunded",
    amount: Number,
    providerId: "stripe_session_id"
  },
  sessionId,                       // Stripe session ID (indexed)
  paidAt: Date
}
```

### Doctor
```js
{
  name, email, specialization,
  imageUrl, imagePublicId,          // Cloudinary
  experience, qualifications, location, about,
  fee, availability: "Available|Unavailable",
  schedule: Map<day, [timeSlots]>,  // Dynamic availability map
  rating, success, patients
  // Text index on: name, specialization
}
```

### Service
```js
{
  name, about, shortDescription,
  price, available,
  imageUrl, imagePublicId,          // Cloudinary
  dates: [String],
  slots: Map<date, [timeSlots]>,    // Dynamic slot map
  instructions: [String],
  totalAppointments, completed, canceled
}
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "feat: add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

<div align="center">

**Built with ❤️ using the MERN Stack**

*React · Node.js · Express · MongoDB · Stripe · Clerk · Cloudinary · Vercel*

</div>
