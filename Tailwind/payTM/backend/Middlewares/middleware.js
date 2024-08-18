const { JWT_SECRET } = require('../config')

const jwt = require('jsonwebtoken');
const userRouter = require('../routes/user');
const { User, Account } = require('../db');


const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(403).json({ message: "HELLO from Middleware" });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        if (decoded.userId) {
            req.userId = decoded.userId;
            console.log(req.userId);

            next();
        }
        else {
            return res.status(403).json({});
        }


    }

    catch (err) {
        return res.status(403).json({});
    }
};




module.exports = {
    authMiddleware
}