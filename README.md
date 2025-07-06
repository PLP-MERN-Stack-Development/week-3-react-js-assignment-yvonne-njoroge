# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 📝 React + Tailwind Task App

A responsive task manager built using **React**, **Vite**, and **Tailwind CSS**, featuring task filters, localStorage persistence, API integration, dark/light theme, reusable components, and routing.

---

## 🚀 Live Demo

👉 [View Deployed Site](https://plp-mern-stack-development.github.io/week-3-react-js-assignment-yvonne-njoroge/)

---

## 🔧 Setup Instructions

```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-3-react-js-assignment-yvonne-njoroge.git
cd PLP PROJECTS/week-3-react-js-assignment-yvonne-njoroge
npm install
npm run dev     # start dev server
npm run build   # create production build
npm run preview # test build at http://localhost:4173


##  Project structure
src/
├── components/   # Button, Card, TaskManager
├── layout/       # Navbar, Footer, Layout wrapper
├── pages/        # Home, Tasks, Posts
├── hooks/        # useLocalStorage
├── context/      # ThemeContext
├── App.jsx       # Routing setup
├── main.jsx      # Entry point





 ##Features
✅ Add / complete / delete tasks

✅ Filter (All, Active, Completed)

✅ Dark/light mode with useContext

✅ Saved to localStorage with custom hook

✅ API fetch with pagination and search

✅ Reusable Tailwind-styled components

✅ Responsive mobile-friendly layout

##Tech Stack
React + Vite
Tailwind CSS
React Router
useState / useEffect / useContext
JSONPlaceholder API