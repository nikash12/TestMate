# 🧪 TestMate

**TestMate** is a lightweight, full-stack web application designed to help developers create, organize, and manage test cases efficiently. Built with a modern tech stack, it serves as a robust foundation for internal QA tooling, dev utilities, or learning test-driven development.

---

## 🚀 Features

- ✅ Create and manage test cases
- 📁 Organize tests by modules and components
- 📌 Tag and filter tests for quick access
- 💾 Persistent storage with PostgreSQL + Prisma
- ⚙️ Clean REST API backend with TypeScript
- 💻 Intuitive frontend using Vite + React + Tailwind

---

## 🛠️ Tech Stack

| Layer     | Tech                                      |
|-----------|-------------------------------------------|
| Frontend  | React, TypeScript, Tailwind CSS, Vite     |
| Backend   | Node.js, Express, TypeScript              |
| Database  | PostgreSQL (via Neon) + Prisma ORM        |
| Dev Tools | ESLint, Prettier, Git                     |

---

## 📂 Folder Structure

```bash
TestMate/
├── backend/
│   ├── prisma/               # Schema and migrations
│   ├── routes/               # Express routes
│   ├── controllers/          # Business logic
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/       # UI components
│   │   └── ...
│   └── public/
└── README.md
