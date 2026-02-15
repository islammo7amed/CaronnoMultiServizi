# CaronnoMultiServizi

Professional corporate website for a multi-service cleaning company built with **Vanilla JavaScript using a custom component-based architecture**.

---

## 🚀 Overview

Caronno Multi Servizi is a modern, responsive corporate website developed without any frontend frameworks.  
The project demonstrates how to build a modular, reusable, and scalable structure using pure JavaScript and ES Modules.

Instead of relying on libraries like React or Vue, this project implements a **lightweight custom rendering system** to better understand how component-based architectures work internally.

---

## 🧠 Architecture & Technical Approach

This project is built around a small custom client-side rendering engine:

- Dynamic component loading using `fetch()`
- Custom template rendering system (`RenderTemplate`)
- Reusable HTML components
- Data-driven UI rendering
- ES Module-based file structure
- Separation of concerns (data / template / logic)

### Core Rendering Flow

1. Fetch component templates dynamically  
2. Inject data into templates using placeholder replacement (`{{key}}`)  
3. Initialize and render content dynamically  
4. Activate UI behaviors (navigation, filters, icons)

This approach simulates how modern frontend frameworks handle rendering under the hood.

---

## 🧩 Features

- Modular component system
- Reusable card components
- Dynamic services rendering
- Gallery filtering by category
- Fullscreen image preview modal
- Responsive navigation menu
- Lucide icon integration
- Clean and structured ES module setup

---

## 📁 Project Structure

```
CARONNO-MULTI-SERVIZI/
│
├── assets/
│   ├── icons/
│   ├── images/
│   └── svg/
│
├── components/
│   ├── footer.html
│   ├── gallery-card.html
│   ├── general-card.html
│   ├── header-address.html
│   ├── header.html
│   └── services-card.html
│
├── css/
│   ├── about.css
│   ├── contact.css
│   ├── gallery-card.css
│   ├── gallery.css
│   ├── general-card.css
│   ├── global.css
│   ├── home.css
│   ├── main-components.css
│   ├── main.css
│   ├── services-card.css
│   └── services.css
│
├── js/
│   ├── about.js
│   ├── gallery.js
│   ├── header.js
│   ├── home.js
│   ├── main.js
│   ├── services.js
│   └── utils.js
│
├── pages/
│   ├── about.html
│   ├── contact.html
│   ├── gallery.html
│   └── services.html
│
├── index.html
└── README.md
```

---

## ⚙️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- ES Modules
- Fetch API
- Lucide Icons

No frameworks. No build tools. No dependencies.

---

## 💡 Why No Framework?

This project intentionally avoids frameworks to:

- Understand rendering mechanisms deeply
- Practice modular architecture using native JavaScript
- Build a reusable component system from scratch
- Demonstrate strong fundamentals

---

## 🛠 Key Technical Highlights

- Custom template engine using string-based interpolation
- Dynamic component injection via Fetch API
- Manual UI state handling (menu toggle, active links, filtering)
- Data preprocessing before rendering (ViewModel pattern concept)
- Lightweight and scalable structure

---

## 📈 What This Project Demonstrates

- Strong understanding of DOM manipulation
- Modular JavaScript architecture
- Component-based thinking
- Clean code organization
- Real-world project structuring
- Ability to build without relying on frameworks

---

## 👨‍💻 Author

Developed by Islam Mohamed  
Full Stack .NET Developer
