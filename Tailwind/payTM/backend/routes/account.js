const express = require('express')
const { Account, User } = require('../db')
const accountRouter = express.Router();

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { authMiddleware } = require('../Middlewares/middleware');


accountRouter.get('/:userName', async (req, res) => {

    try {

        const userName = req.params.userName;

        const user = await User.find({
            userName: userName
        })

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }


        const account = await Account.findOne({ userId: user[0]._id });
        console.log(user[0]._id);

        if (!account) {
            return res.status(404).json({ message: "Account not found" })
        }

        return res.json({ account })

    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
})

module.exports = accountRouter;