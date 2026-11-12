# 🔐 Password Generator

A simple and customizable Password Generator built with **React.js** and **Vite**. This application allows users to generate secure random passwords by selecting different character types and customizing password length.

## 🚀 Features

- Generate random passwords.
- Customize password length.
- Include uppercase letters (A-Z).
- Include lowercase letters (a-z).
- Include numbers (0-9).
- Include special characters (!@#$%).
- Copy generated passwords to clipboard.
- Display password strength.
- Regenerate passwords instantly.

## 🛠️ Technologies

- React.js
- JavaScript (ES6+)
- CSS3
- Vite
- React Hooks (`useState`, `useCallback`)
- Web Crypto API

## 📁 Project Structure

```text
password-generator/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── PasswordDisplay.jsx
│   │   ├── PasswordOptions.jsx
│   │   ├── PasswordLength.jsx
│   │   └── GenerateButton.jsx
│   ├── hooks/
│   │   └── usePasswordGenerator.js
│   ├── utils/
│   │   └── generatePassword.js
│   ├── styles/
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## ⚙️ Installation

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**2. Navigate to the project directory**

```bash
cd password-generator
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 🌿 Git Branches

The project follows a simple Git workflow:

- `main` — Stable production version.
- `develop` — Development and integration branch.
- `feature/password-generator` — Password generation functionality.
- `feature/password-ui` — User interface and styling.

## 📌 Learning Objectives

This project is designed to practice:

- Building reusable React components.
- Managing state with React Hooks.
- Passing data through props.
- Handling user events.
- Writing reusable JavaScript functions.
- Working with the Clipboard API.
- Generating secure random values using the Web Crypto API.
- Managing projects with Git and GitHub.

## 🔮 Future Improvements

- Add a password strength indicator.
- Add dark and light themes.
- Improve responsive design.
- Add password history.
- Add more customization options.

## 👨‍💻 Author

Zaami Anas

Full Stack Web Development Student

---

⭐ If you find this project useful, feel free to star the repository!