# Event Management API

A Node.js and Express.js backend API for Event Management.

## Features

- Express.js framework
- CORS enabled
- Security headers with Helmet
- Request logging with Morgan
- Environment variable support
- Error handling middleware
- Structured route organization

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```env
PORT=3000
NODE_ENV=development
```

## Running the Application

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## API Endpoints

### Health Check
- `GET /api/health` - Check API health status

### Base URL
- `GET /` - API information

## Project Structure

```
.
├── app.js                 # Main application file
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables (create this)
├── routes/               # Route definitions
│   └── index.js         # Main router
├── controllers/          # Request handlers (to be added)
├── middleware/           # Custom middleware (to be added)
└── config/              # Configuration files (to be added)
```

## Development

To add new routes:
1. Create route files in the `routes/` directory
2. Import and use them in `routes/index.js`

## License

ISC

