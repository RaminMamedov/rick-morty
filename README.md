# Приложение для поиска персонажей по API Rick and Morty

Это фронтенд-приложение (в рамках тестового задания), которое позволяет искать персонажей по имени из вселенной Rick and Morty, используя публичное API. Данные загружаются с сервера и кэшируются в глобальном состоянии приложения с помощью RTK Query, что позволяет уменьшить количество повторных запросов и улучшить производительность.

## Функционал

- **Поиск персонажей**: Возможность искать персонажей по имени с использованием API.
- **Ленивая загрузка**: Компоненты и страницы загружаются по мере необходимости с использованием `React Suspense`.
- **Обработка ошибок**: Все ошибки отображаются с помощью компонента `ErrorMessage`.
- **Кэширование данных**: Данные загружаются и сохраняются в кэше с использованием RTK Query для улучшения производительности.

## Технологии

- **Фронтенд**:
    - [React 19](https://reactjs.org/) — Библиотека для создания пользовательских интерфейсов.
    - [TypeScript](https://www.typescriptlang.org/) — Статическая типизация для JavaScript.
    - [React Router v7](https://reactrouter.com/) — Библиотека для маршрутизации.

- **Управление состоянием**:
    - [Redux Toolkit](https://redux-toolkit.js.org/) — Официальный инструмент для работы с Redux, упрощающий разработку.

- **Запросы на сервер**:
    - [RTK Query](https://redux-toolkit.js.org/tutorials/rtk-query) — Сетевой слой с возможностью кэширования данных и автоматическим обновлением состояния.
    - [API Rick and Morty](https://rickandmortyapi.com/documentation/#introduction) — Публичное API, которое предоставляет данные о персонажах из вселенной Rick and Morty.

- **Валидация данных**:
    - [Zod](https://github.com/colinhacks/zod) — Схема для валидации и парсинга данных, полученных от API.
    - [react-hook-form](https://www.react-hook-form.com) - Библиотека для обработки форм и валидации данных в React-приложениях. Используется для упрощения работы с формами и уменьшения количества перерисовок компонентов. 

- **Обработка ошибок**:
    - [react-error-boundary](https://www.npmjs.com/package/react-error-boundary) — Обработчик ошибок в компонентах React.

- **Стилизация**:
    - [CSS-Modules](https://github.com/css-modules/css-modules) — Модульная система для стилизации в React-приложениях, позволяющая использовать локальные классы.

- **Утилиты**:
    - [Lodash.debounce](https://lodash.com/docs/#debounce) — Утилита для создания "отложенных" функций.

- **Оптимизация производительности**:
    - Code Splitting, Tree Shaking — Оптимизация загрузки и уменьшение размера бандла.

- **Сборка и разработка**:
    - [Vite](https://vitejs.dev/) — Современный сборщик и инструмент для разработки, который использует ES-модули для быстрой сборки и горячей перезагрузки страниц.

- **Качество кода**:
    - [Prettier](https://prettier.io/) — Автоматический форматировщик кода.
    - [ESLint](https://eslint.org/) — Инструмент для анализа кода на ошибки.

## Архитектура проекта

Проект написан в соответствии с методологией Feature-Sliced Design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Установка

Чтобы начать работать с проектом, выполните следующие шаги:

1. Клонируйте репозиторий:
   ```bash
   git clone <URL репозитория>
2. Установите зависимости:
    ```bash
   npm install
3. Для запуска проекта в режиме разработки используйте команду:
    ```bash
   npm run dev
Приложение будет доступно по адресу http://localhost:5173

