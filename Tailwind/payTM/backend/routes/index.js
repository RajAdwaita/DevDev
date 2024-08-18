const express = require("express")

const mainRouter = express.Router();
const userRouter = require('./user')
// mainRouter.get('/login', (req, res) => {
//     console.log("Login");
//     res.send("LOGIN");

// })

// mainRouter.get('/signup', (req, res) => {
//     console.log("Sign up");
//     res.send("SIGNUP");
// })

mainRouter.use('/user', userRouter);

// mainRouter.use((req, res) => {
//     res.send("Main Router");
// })
module.exports = mainRouter;

