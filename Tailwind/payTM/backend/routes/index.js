const express = require("express")

const mainRouter = express.Router();
const userRouter = require('./user')
const accountRouter = require('./account')
// mainRouter.get('/login', (req, res) => {
//     console.log("Login");
//     res.send("LOGIN");

// })

// mainRouter.get('/signup', (req, res) => {
//     console.log("Sign up");
//     res.send("SIGNUP");
// })

try {
    mainRouter.use('/user', userRouter);
    mainRouter.use('/account', accountRouter);

}
catch (error) {
    console.log(error);

}
// mainRouter.use((req, res) => {
//     res.send("Main Router");
// })
module.exports = mainRouter;

