# Dev-Tinder

A Tinder-style platform for developers. This repo is under active development.

## Tech Stack

- Node.js (CommonJS)
- Express 5

## Project Structure

```
Dev-Tiner/
├── .github/
│   └── pull_request_template.md
├── Backend/
│   ├── src/
│   │   └── app.js          # Express server entry point
│   ├── test/
│   │   └── api.test.js     # API tests (empty for now)
│   ├── package.json
│   └── .env                # Local config (not committed)
└── README.md
```

## Getting Started

```bash
cd Backend
npm install
node src/app.js
```

The server runs on http://localhost:3000.

## API Routes

| Route    | Description                  |
| -------- | ---------------------------- |
| `/`      | Returns "Home Page"          |
| `/login` | Returns "Login Pageeeee"     |

## Testing

No test runner is configured yet (`npm test` is a placeholder).

## Changelog

- **Initial setup:** Express server with basic `/` and `/login` routes.
