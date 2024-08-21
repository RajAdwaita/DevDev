const express = require('express')
const { Account, User } = require('../db')
const accountRouter = express.Router();
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { authMiddleware } = require('../Middlewares/middleware');


// accountRouter.get('/:userName', async (req, res) => {

//     try {

//         const userName = req.params.userName;

//         const user = await User.find({
//             userName: userName
//         })

//         if (!user) {
//             return res.status(404).json({
//                 message: "User Not Found"
//             })
//         }



//         const account = await Account.findOne({ userId: user[0]._id });
//         console.log(user[0]._id);

//         if (!account) {
//             return res.status(404).json({ message: "Account not found" })
//         }

//         return res.json({ account })

//     }
//     catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Internal server error /:username" });
//     }
// })

accountRouter.get('/balance', authMiddleware, async (req, res) => {

    try {



        const account = await Account.findOne({
            userId: req.userId,
        });

        if (!account) {
            return res.status(404).json({ message: "Account not found" })
        }
        console.log(account)

        res.status(200).json({
            balance: account.balance
        });
    }
    catch (error) {

        console.log("error");
        return res.status(400).json({

            message: "Internal Error /balance"
        })

    }

})

// BASIC METHOD : ERROR PRONE IF THE TRANSACTION BREAKS IN BETWEEN
// accountRouter.post('/transfer', authMiddleware, async (req, res) => {
//     const { to, amount } = req.body;
//     const account = await Account.findOne({
//         userId: req.userId
//     });

//     if (account.balance < amount) {
//         return res.status(400).json({
//             message: "Insufficient Banalce"
//         })
//     }

//     const toAccount = await Account.findOne({
//         userId: to
//     })

//     if (!toAccount) {
//         return res.status(400).json({
//             mesasge: "Invalid Account"
//         })
//     }

//     await Account.updateOne({
//         userId: req.userId
//     }, {
//         $inc: { balance: -amount }
//     })

//     await Account.updateOnr({
//         userId: to
//     }, {
//         $inc: { balance: amount }
//     })


//     res.status(200).json({
//         mesage: "Transfer successful"
//     })

// })


accountRouter.post('/transfer', authMiddleware, async (req, res) => {

    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;


    const account = await Account.findOne({
        userId: req.userId
    }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient Balance"
        })
    }

    const toAccount = await Account.findOne({
        userId: to
    }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid Account"
        })
    }

    await Account.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -amount
        }
    }).session(session)

    await Account.updateOne({
        userId: to
    }, {
        $inc: {
            balance: amount
        }
    }).session(session)

    await session.commitTransaction();
    res.json({
        message: "Transaction Successful"
    })
})



module.exports = accountRouter;