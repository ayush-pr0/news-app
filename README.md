# 📰 News Aggregation System

Powerful, modular, and observable news aggregation backend built with NestJS and TypeScript — fetches from external sources, moderates content, personalizes feeds, and exposes clean APIs and metrics.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![NestJS](https://img.shields.io/badge/NestJS-Framework-E0234E?logo=nestjs&logoColor=white&style=for-the-badge)](https://nestjs.com/)
[![Node](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?logo=postgresql&logoColor=white&style=for-the-badge)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Container-2496ED?logo=docker&logoColor=white&style=for-the-badge)](https://www.docker.com/)
[![Swagger](https://img.shields.io/badge/Swagger-OpenAPI-85EA2D?logo=swagger&logoColor=black&style=for-the-badge)](#-api-documentation-swagger)

---

## 📌 Table of Contents

- Overview
- Features
- Architecture & Stack
- Screenshots
- Quick Start
- API Documentation (Swagger)
- Project Structure
- Documentation
- Contributing & License

---

## 🧭 Overview

The backend ingests articles from external APIs, stores and categorizes them, applies moderation policies, personalizes results for users, and sends notification emails. It ships with API docs (Swagger) and metrics (/metrics) for Prometheus.

Key capabilities:

- Fetch from external sources (e.g., NewsAPI, The News API)
- Store and categorize in PostgreSQL
- REST APIs for clients
- Email notifications based on preferences
- Content moderation (reports, banned keywords)
- Personalization signals (reading history, likes, bookmarks)

---

## ✨ Features

### Admin & Moderation

- Report System: users can flag inappropriate content
- Auto-Moderation: auto-hide when reports exceed thresholds
- Category Management: activate/deactivate categories
- Banned Keywords: filtered during processing

### Personalization

- Recommendations foundation: based on behavior signals
- Behavior Tracking: reading history, likes, bookmarks
- Personalized Feeds: by preferences and categories
- Engagement Analytics: insights for admins

---

## 🏗️ Architecture & Stack

- Framework: NestJS (modular DI)
- Language: TypeScript
- Database: PostgreSQL (TypeORM)
- Auth: JWT (Swagger Bearer scheme)
- Email: SMTP provider config via env

Key entry points:

- Bootstrap: `src/main.ts`
- Wiring: `src/app.module.ts`
- Config: `src/config/app-config/*`, env via `.env`

---

## 📸 Screenshots

- Architecture Overview

  ![Architecture](docs/assets/architecture.png)

---

## ⚡ Quick Start

Prerequisites

- Node.js 18+
- PostgreSQL

Install dependencies

```sh
npm install
```

Configure environment

- Copy `.env.example` → `.env` and set values (DB, SERVER_HOST, SERVER_PORT, JWT, mail)

Run the server

```sh
npm run start:dev
```

Seed data (optional)

```sh
npm run seed
```

---

## 📜 API Documentation (Swagger)

- Path: `/{SWAGGER_URL}` (default `/swagger-api`)
- The server port is read from env (`SERVER_PORT`).
- Defined in `src/main.ts` using `APP.SWAGGER_URL` from `src/common/constants/app.constants.ts`.

Example (if `SERVER_PORT=8000`):

- Swagger: http://localhost:8000/swagger-api

---

## 🗂️ Project Structure

```
src/
	auth/                  # JWT auth, guards, strategies
	articles/              # Articles APIs & services
	categories/            # Category CRUD
	cron/                  # Aggregation workflow
	database/              # Entities, repositories, seeds
	email/                 # Email infrastructure
	keywords/              # Keywords & filters
	news-sources/          # External sources (admin)
	notifications/         # Notifications + email
	user-preferences/      # Subscriptions/preferences
	user-reading-history/  # Reading history tracking
	users/                 # Users APIs & services
```

---

## 📚 Documentation

- [Product Requirements Document](docs/product-requirements-document.md)
- [FAQ](docs/frequently-asked-questions.md)

---

## 📄 License

This project is currently UNLICENSED.
