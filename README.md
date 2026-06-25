<div align="center">

# 🎵 Harmony Music Academy

A modern, responsive music education platform built with **Next.js 16**, **TypeScript**, and **Tailwind CSS** — designed to help students explore and master their musical skills through structured courses, expert instructors, and live webinars.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black)

**[🌐 Live Demo](https://harmony-music-academy-five.vercel.app/)**

</div>

---

## 📖 Overview

Harmony Music Academy was built to help aspiring musicians explore and improve their musical skills through professionally curated courses and expert-led webinars. The platform delivers a clean, intuitive user experience backed by modern web technologies, ensuring strong performance, scalability, and responsiveness across every device.

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Learning Outcomes](#-learning-outcomes)
- [Future Improvements](#-future-improvements)
- [Developer](#-developer)
- [License](#-license)

## ✨ Features

### 🎓 Courses
- Browse available music courses
- Dynamic course detail pages
- Course curriculum and skills overview
- Pricing and enrollment information
- Instructor information integrated with each course

### 👨‍🏫 Instructors
- Dedicated instructor profiles
- Experience and specialization details
- Professional instructor bios
- Student and course statistics

### 🎤 Webinars
- Upcoming webinar listings
- Dynamic webinar detail pages
- Topics covered in each session
- Instructor information
- Seat availability and registration details

### 🎨 User Experience
- Modern, responsive design
- Interactive UI components with smooth animations
- Hover effects and micro-interactions
- Mobile-first layout
- Optimized performance and fast page loads

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | Next.js 16, React 19, TypeScript, Tailwind CSS |
| **UI / Animation** | Motion (Framer Motion), Aceternity UI components |
| **Dev Tools** | ESLint, Prettier, Git & GitHub |
| **Deployment** | Vercel |

## 📂 Project Structure

```bash
src
│
├── app
│   ├── page.tsx                  # Homepage
│   ├── courses
│   │   ├── page.tsx               # Courses listing
│   │   └── [slug]
│   │       └── page.tsx           # Course detail page
│   │
│   ├── instructors
│   │   ├── page.tsx               # Instructors listing
│   │   └── [slug]
│   │       └── page.tsx           # Instructor detail page
│   │
│   └── webinars
│       ├── page.tsx               # Webinars listing
│       └── [slug]
│           └── page.tsx           # Webinar detail page
│
├── components                     # Reusable UI components
│
├── data                           # Static JSON data sources
│   ├── music_course.json
│   ├── instructors.json
│   └── webinars.json
│
└── utils                          # Helper functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm (or yarn / pnpm)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/Ahmadnaveedofficial/harmony-music-academy.git
```

**2. Navigate into the project**
```bash
cd harmony-music-academy
```

**3. Install dependencies**
```bash
npm install
```

**4. Start the development server**
```bash
npm run dev
```

**5. Open in your browser**
```
http://localhost:3000
```

## 🎯 Learning Outcomes

This project provided hands-on experience with:

- Next.js App Router and file-based routing
- Dynamic and nested routing patterns
- TypeScript in a real-world frontend application
- Component-based architecture and reusable UI design
- Responsive, mobile-first web design
- JSON-based data management without a backend
- Modern UI development with animation libraries
- End-to-end Vercel deployment workflow

## 🔮 Future Improvements

- [ ] Authentication system
- [ ] Student dashboard
- [ ] Course enrollment system
- [ ] Payment integration
- [ ] Admin panel
- [ ] Search & filtering
- [ ] Database integration with Prisma & PostgreSQL
- [ ] Full content management system (CMS)

## 👨‍💻 Developer

**Ahmad Naveed**

[![GitHub](https://img.shields.io/badge/GitHub-Ahmadnaveedofficial-181717?logo=github&logoColor=white)](https://github.com/Ahmadnaveedofficial)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ahmad%20Naveed-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ahmad-naveed-7b539521a/)

## 📜 License

This project was created for educational and portfolio purposes. All rights belong to their respective owners.

---

<div align="center">

If you found this project helpful, consider giving it a ⭐ on GitHub!

</div>
