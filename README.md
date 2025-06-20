# ⚡ AI-Powered Code Reviewer

The **AI-Powered Code Reviewer** is a full-stack web application that helps developers analyze and improve their code using **Google's Gemini AI**. It provides smart, to-the-point feedback, with an interactive editor and clean design.

This project is built using:
- 🖥️ **React** for the frontend
- 🌐 **Express.js** for the backend
- 🤖 **Gemini API** from Google to generate AI-based reviews

---

## 🧠 What It Does

1. You visit the website.
2. Paste or type your code into the editor.
3. Click the **"Review"** button.
4. Your code is sent to the backend via an API request.
5. The backend uses **Google Gemini AI** to review the code.
6. You receive a clear and helpful explanation or suggestions — to the point.

---



## 🔁 How It Works

### React Frontend:
- Users type or paste their code into a live editor.
- Clicking "Review" sends the code to the backend via `axios`.
- Uses **Prism.js** for colorful code syntax highlighting.
- Displays AI feedback in a side panel with proper formatting.

### Express Backend:
- Receives the code through an endpoint (`/ai/get-response`).
- Uses **Google's Gemini API** (via `@google/generative-ai`) to analyze and review the code.
- Sends the response back to the frontend in a human-readable format.

---
## 🛠️ Technologies Used

### 🔹 Frontend – Built with React
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `vite`: *(with Tailwind integration)*
- `tailwindcss`: ^4.1.10
- `@tailwindcss/vite`: ^4.1.10
- `axios`: ^1.10.0 — for sending requests to the backend
- `prismjs`: ^1.30.0 — for code syntax highlighting
- `react-simple-code-editor`: ^0.14.1 — minimal code editor
- `react-markdown`: ^10.1.0 — for rendering markdown in reviews

### 🔹 Backend – Built with Express.js
- `express`: ^5.1.0 — server framework
- `cors`: ^2.8.5 — to allow cross-origin requests from the frontend
- `dotenv`: ^16.5.0 — to manage environment variables securely
- `@google/genai`: ^1.5.1 — interface to Google's GenAI
- `@google/generative-ai`: ^0.24.1 — enables access to **Gemini API**

---
## 📦 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Dharamraj82/Ai-Power-Code-Review-FRONTEND.git
cd ai-power-code-reviewer-frontend
