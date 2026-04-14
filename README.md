# 🌐 eGov Landing Page (React + TypeScript + Tailwind)

## 📌 Overview

This project is a **React-based landing page** inspired by the eGov website design.
It demonstrates modern frontend practices using **functional components, hooks, and clean UI architecture**.

The core focus is the **“Latest at eGov”** section with dynamic filtering, search, and UI states.

---

## 🚀 Features

### ✅ Core Requirements

- ⚛️ Built using **React (Functional Components + Hooks)**
- 📦 Displays list of articles (mock JSON data)
- 🔍 **Search functionality** (filter by title/tags)
- 🗂️ **Category filtering** (tabs/buttons)
- 🎴 Product/Article cards:
  - Image
  - Title
  - Category
  - Tags
  - Date

---

### ⭐ Bonus Features Implemented

- ⏳ **Loading State (Skeleton UI)**
- ❌ **No Results Found State**
- ⚡ Optimized filtering using `useMemo`
- 🎯 Clean and responsive UI using Tailwind CSS

---

## 🏗️ Project Structure

```
src/
│
├── components/
│   ├── BlogCard.tsx        # Reusable card component
│   ├── LatestSection.tsx   # Main feature section
│   ├── SkeletonCard.tsx    # Loading placeholder
│   ├── Hero.tsx            # Landing hero section
│
├── data/
│   └── articles.ts         # Mock data (JSON)
│
├── types/
│   └── index.ts            # TypeScript interfaces
│
├── App.tsx                 # Root component
└── main.tsx                # Entry point
```

---

## 🧠 Key Concepts Used

- React Hooks:
  - `useState`
  - `useEffect`
  - `useMemo`

- Component Reusability
- Conditional Rendering
- Controlled Inputs
- TypeScript Interfaces
- Tailwind CSS Utility-first styling

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate into project
cd egov-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🎯 Functionality Breakdown

### 🔍 Search

- Filters articles by:
  - Title
  - Tags

### 🗂️ Category Filter

- Options:
  - All
  - Case Study
  - Newsletter
  - Report
  - Whitepaper
  - Strategy Paper

### ⏳ Loading State

- Simulated API delay using `setTimeout`
- Skeleton cards displayed

### Empty State

- Displays message when:
  - No search match
  - No category match

---

## 🎨 UI Approach

- Tailwind CSS for styling
- Responsive grid layout
- Clean spacing and typography
- Card-based design system

---

## 🔮 Future Improvements

- 🌍 API integration (real backend)
- ⚡ Debounced search
- 🎬 Animations (Framer Motion)
- 🧩 Pagination / Infinite scroll
- 🌐 SSR with Next.js

---

## 👨‍💻 Author

**Mohammed Sanaved**
Frontend Developer

---

## 📄 License

This project is for assessment/demo purposes.
