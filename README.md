# 🚀 Development Stack

A modern web application built with React to browse, organize, and manage your essential software development tools, frameworks, and technologies.

---

## 🔗 Live Demo

🌐 **Live Website:** [https://a05-dev-stack-eight.vercel.app/](https://a05-dev-stack-eight.vercel.app/)

---

## ✨ Features

* 📝 **Add New Tasks:** Easily create and add new development tasks or technologies to your stack.
* ❌ **Delete Tasks:** Quickly remove items or completed tasks from the list with a single click.
* 💾 **LocalStorage Integration:** Persistent data storage using `localStorage` so your stack remains saved even after refreshing the browser.
* 📱 **Fully Responsive:** A mobile-first layout that adapts smoothly to phones, tablets, laptops, and large desktop screens.

---

## 🛠️ Technologies Used

* **React.js:** Frontend library for building interactive user interfaces.
* **TypeScript / JavaScript (ES6+):** For strongly typed, clean, and modern code logic.
* **Tailwind CSS & DaisyUI:** For utility-first styling and pre-built UI components.
* **React-Toastify:** For elegant, interactive toast notifications.
* **JSON:** Used as the data source for managing technology information.
* **Vite:** High-performance build tool and fast local development environment.

---

## 💻 Getting Started Locally

Follow these step-by-step instructions to set up and run the project on your local machine.

### ✅ Prerequisites

Before you begin, make sure the following tools are installed on your system:

* **Node.js** (v18 or newer recommended) — [Download Node.js](https://nodejs.org/)
* **npm** (ships with Node.js) — or **pnpm** / **yarn** if you prefer another package manager
* **Git** — [Download Git](https://git-scm.com/)

Verify the installations by running:

```bash
node -v
npm -v
git --version
```

> If either command is not recognized, reinstall the missing tool and restart your terminal.

### 📥 1. Clone the Repository

```bash
git clone https://github.com/codeby-fahim/A05-DevStack.git
cd A05-DevStack
```

### 📦 2. Install Dependencies

```bash
npm install
```

> Using **pnpm** or **yarn**? Run `pnpm install` or `yarn install` instead.

### ▶️ 3. Start the Development Server

```bash
npm run dev
```

Vite will start the development server. Open the URL printed in your terminal (usually **http://localhost:5173**) in your browser.

### 🏗️ 4. Build for Production

```bash
npm run build
```

The optimized production files will be generated in the `dist/` folder.

### 👀 5. Preview the Production Build

```bash
npm run preview
```

### 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with hot module reload. |
| `npm run build` | Type-checks the project and creates a production build in `dist/`. |
| `npm run preview` | Serves the production build locally for testing. |
| `npm run lint` | Runs Oxlint to check the code for issues. |

### 📁 Project Structure

```text
A05-DevStack/
├── public/
│   ├── Data.json            # Technology data source
│   └── DevStackFev.png      # Favicon
├── src/
│   ├── assets/              # Images used in the UI
│   ├── Component/
│   │   ├── Hero.tsx
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   └── Technology/
│   │       ├── Technology.tsx
│   │       ├── TechnologyCard.tsx
│   │       └── SelectedCard.tsx
│   ├── Type/
│   │   └── TechnologyType.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### 🧯 Troubleshooting

* **Blank page after starting the server?** Make sure `public/Data.json` exists — the app fetches it at runtime.
* **`node` or `npm` is not recognized?** Reinstall Node.js, then restart your terminal or IDE.
* **Port already in use?** Run `npm run dev -- --port 3000` to start on a different port.
* **Changes not showing?** Stop the dev server and run `npm run dev` again.

---

## 🌐 Deployment

This project is deployed on **Vercel**. To deploy your own copy:

1. Push the project to a GitHub repository.
2. Import the repository into [Vercel](https://vercel.com/).
3. Use the default Vite settings:
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
4. Deploy 🎉

---

## 📬 Contact

* **GitHub:** [codeby-fahim](https://github.com/codeby-fahim)
* **Live Demo:** [a05-dev-stack-eight.vercel.app](https://a05-dev-stack-eight.vercel.app/)

---

<p align="center">Made with ❤️ using React, Tailwind CSS, and DaisyUI</p>
