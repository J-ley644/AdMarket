const helmet = require("helmet");
const cors = require("cors");

const allowedOrigins = [
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "http://localhost:5501",
    "http://127.0.0.1:5501"
];

const securityMiddleware = [
    helmet(),
    cors({
        origin(origin, callback) {
            // Allow tools like Postman or server-to-server requests
            if (!origin) return callback(null, true);

            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(new Error("Not allowed by CORS"));
        },
        credentials: true
    })
];

module.exports = securityMiddleware;