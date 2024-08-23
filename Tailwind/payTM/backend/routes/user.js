const express = require('express');
const { signupSchema, loginSchema, updateBody } = require('../types');
const { User, Account } = require('../db');
const JWT_SECRET = require('../config')
const zod = require('zod')


const userRouter = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { authMiddleware } = require('../Middlewares/middleware');




userRouter.get('/bulk', async (req, res) => {
    try {

        const filter = req.query.filter || "";

        const users = await User.find({
            $or: [{
                firstName: {
                    "$regex": filter
                }
            },
            {
                lastName: {
                    "$regex": filter
                }
            }]
        })

        res.json({
            user: users.map(user => ({
                userName: user.userName,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }))
        })

    }
    catch (error) {
        return res.status(400).json({
            message: error
        })
    }
})


userRouter.get('/allusers', authMiddleware, async (req, res) => {
    try {

        const users = await User.find({})

        if (users.length === 0) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }

        // users.forEach(user => {
        //     console.log(user);

        // })

        return res.status(200).json({
            users: users
        })


    }
    catch (error) {
        console.log(error)
        return res.status(400).json({
            message: "ERROR"
        })
    }
})


userRouter.post('/signup', async (req, res) => {
    // console.log("Sign up");
    // res.send("SIGNUP");

    try {

        const body = req.body;
        const { success, error } = signupSchema.safeParse(req.body);
        if (!success) {
            return res.json({
                message: "Random error occurred"
            })
        }

        const existingUser = await User.findOne({
            userName: req.body.userName
        })

        if (existingUser) {
            return res.json({
                message: "Existing user"
            })
        }


        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = await User.create({
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hashedPassword,
        });

        // console.log(user);

        const userId = user._id;


        await Account.create({
            userId: userId,
            balance: 1 + Math.random() * 10000
        })







        // const token = jwt.sign({
        //     userId
        // }, JWT_SECRET)

        res.status(200).json({
            message: "User Created",
            // token: token
        })
    }
    catch (error) {
        if (error instanceof zod.ZodError) {
            return res.status(400).json({ error: error.errors });
        }
        res.status(500).json({ error: "Internal server error" });
    }
})


userRouter.post('/login', async (req, res) => {
    // console.log("Login");
    // res.send("LOGIN");

    try {

        const body = req.body;
        const { success, error } = loginSchema.safeParse(req.body);
        if (!success) {
            return res.json({
                success: false,
                message: "Incorrect inputs",
                errors: error.errors
            })
        }


        const user = await User.findOne({
            userName: req.body.userName,
            // password: req.body.password

        })
        // console.log(user);


        if (!user) {
            return res.json({
                success: false,
                message: "Incorrect Username or Password"
            })
        }


        const isMatch = await bcrypt.compare(req.body.password, user.password);


        if (!isMatch) {
            return res.json({
                success: false,
                message: "Invalid Password"
            })
        }

        const token = jwt.sign({
            userId: user._id,
            // userName: user.userName,
        }, JWT_SECRET)

        res.json({
            success: true,
            message: "User logged in",
            token: token
        })
    }
    catch (error) {
        if (error instanceof zod.ZodError) {
            return res.status(400).json({ error: error.errors });
        }
        res.status(500).json({ success: fale, message: "Internal server error" });
    }

})




userRouter.put('/update', authMiddleware, async (req, res) => {

    try {


        const { success, error } = updateBody.safeParse(req.body);

        if (!success) {
            return res.json({
                message: "Error while updating data"
            })
        }

        await User.updateOne(req.body, {
            id: req.userId
        })

        res.json({
            message: 'Updated Successfully'
        })
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
})


userRouter.get('/:userName', async (req, res) => {
    try {
        const userName = req.params.userName;

        const users = await User.find({
            userName: {
                $regex: `^${userName}`, $options: 'i'
            }
        });

        if (users.length === 0) {
            return res.json({ message: "User not found" })
        }

        const userResults = users.map(user => ({
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }));

        return res.json(userResults)

        // if (!user) {
        //     return res.status(404).json({ message: "User not found" });
        // }
        // else {
        //     console.log(user);

        //     return res.status(200).json(user);
        // }


        // const filter = req.query.filter || "";

        // const users = await User.find({
        //     $or: [{
        //         firstName: {
        //             "$regex": filter
        //         }
        //     },
        //     {
        //         lastName: {
        //             "$regex": filter
        //         }
        //     }]
        // })

        // res.json({
        //     user: users.map(user => ({
        //         userName: user.userName,
        //         firstName: user.firstName,
        //         lastName: user.lastName,
        //         _id: user._id
        //     }))
        // })

    }
    catch (error) {
        res.json({
            message: "Error"
        })
    }

})



module.exports = userRouter;