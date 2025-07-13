
# React HW4 App

## Опис
Цей застосунок демонструє роботу з хук use() у React, а також асинхронне отримання даних через Promise з затримкою та обробкою помилок. Всі компоненти стилізовані за допомогою Bootstrap.

## Основні можливості
- **MessageComponent** — компонент, який використовує хук use() для отримання даних з Promise, показує список користувачів або кидає помилку.
- **ErrorBoundary** — компонент для обробки помилок, показує повідомлення про помилку, якщо Promise завершується з reject.
- **Suspense** — використовується для керування станом завантаження (fallback "Loading...").
- Bootstrap-стилі для всіх компонентів.

## Структура проекту
react-hw4-app/
├── public/
│   └── vite.svg
│
├── src/
│   ├── App.tsx — головний компонент, що рендерить MessageComponent з ErrorBoundary та Suspense
│   ├── index.css
│   ├── main.tsx
│   └── components/
│       ├── MessageComponent.tsx
│       └── ErrorBoundary.tsx
│
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md

## Запуск проекту
1. Встановіть залежності:
   npm install

2. Запустіть застосунок:
   npm run dev

## Приклад використання
- Для демонстрації обробки помилок ErrorBoundary змініть URL у fetchUsers (наприклад, додайте "123" до кінця) — після затримки з'явиться повідомлення про помилку.


