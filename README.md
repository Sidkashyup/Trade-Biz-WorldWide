# Trade Biz Worldwide

This repository contains the frontend and backend for the Trade Biz Worldwide project.

---

## Frontend

The frontend is built with React and Vite.

### Features

- Modern React (functional components, hooks)
- Tailwind CSS for styling
- Responsive design
- Contact/Quote form with validation and API integration
- Custom alert messages
- Embedded Google Maps for office location
- Organized code structure (components, pages, services)

### Getting Started

#### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

#### Installation

1. Navigate to the `Frontend` directory.

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```sh
    npm run dev
    # or
    yarn dev
    ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Frontend Structure

```
Frontend/
├── public/
│   ├── images/
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   │   └── GetQuote.jsx
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── package.json
├── vite.config.js
└── README.md
```

---

## Backend

The backend is typically built with Node.js and Express (or similar).  
**Note:** Adjust the structure and instructions below to match your actual backend implementation.

### Features

- RESTful API for handling quote requests
- Data validation and error handling
- Integration with database (MongoDB, PostgreSQL, etc.)
- CORS enabled for frontend communication

### Getting Started

#### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Database (MongoDB, PostgreSQL, etc.)

#### Installation

1. Navigate to the `Backend` directory.

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Set up environment variables in a `.env` file (see `.env.example` if provided).

4. Start the backend server:
    ```sh
    npm start
    # or
    yarn start
    ```

### Backend Structure

```
Backend/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   └── server.js
├── .env
├── package.json
└── README.md
```

---

## Environment Variables

If your API endpoints or keys need to be configured, create a `.env` file in the root of each project and add variables as needed.

---

## Deployment

### Frontend

Build the app for production:

```sh
npm run build
# or
yarn build
```

The output will be in the `dist` folder.

### Backend

Deploy the backend according to your hosting provider’s instructions (Heroku, Render, etc.).

---

## License

This project is licensed under the MIT License.

---

For questions or support, contact [info@tbww.in](mailto:info@tbww.in).

&copy; 2025 Trade Biz
