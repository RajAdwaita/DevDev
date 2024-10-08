"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = "pookieString";
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: 'http://localhost:5173'
}));
app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    /**
     * TODO: here do db validations, fetch id of the user from the db
    */
    const token = jsonwebtoken_1.default.sign({
        id: 1
    }, JWT_SECRET);
    res.cookie('token', token); // will put the cookie in the set-cookie header
    res.send("Logged In");
});
app.get('/user', (req, res) => {
    const token = req.cookies.token;
    const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
    res.send({
        userId: decoded.id,
    });
});
app.post('/logout', (req, res) => {
    res.clearCookie('token');
    // res.cookie("token", "");
    res.json({
        message: "Logged Out"
    });
});
app.get('/', (req, res) => {
});
