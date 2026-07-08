const helmet = require("helmet");
const cors = require("cors");

const securityMiddleware = [
    helmet(),
    cors({
        origin: "http://localhost:5500",
        credentials: true
    })
];

module.exports = securityMiddleware;