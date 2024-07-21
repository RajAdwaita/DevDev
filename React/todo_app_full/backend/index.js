const express = require('express');
const { createTodo } = require('./types');
const { Todo } = require('./db');
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(cors())

app.post("/todo", async (req, res) => {
    // const createPayload = req.body;
    // const parsePayload = createTodo.safeParse(createPayload);
    // if (!parsePayload.success) {
    //     return res.status(411).json({
    //         msg: "Wrong inputs",
    //     })
    //     return;
    // }

    // await Todo.create({
    //     title: createPayload.title,
    //     description: createPayload.description,
    //     completed: false
    // })

    const title = req.body.title;
    const desc = req.body.description;

    const newTodo = new Todo({
        title: title,
        description: desc
    })

    try {
        await newTodo.save();
        res.status(201).json({
            msg: "TODO CREATED",
            // Todo: createPayload
        })
    }
    catch (err) {
        console.log(err);
    }



})

app.get("/todos", async (req, res) => {
    const todos = await Todo.find({})
    // res.render("HELLO");
    res.json({
        todos
    })
})

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        return res.status(411).json({
            msg: "Wrong inputs",
        })
        return;
    }

    await Todo.updateMany({
        _id: req.body.id,
    }, {
        completed: true

    })

    res.json({
        msg: "Todo completed"
    })
})

app.listen(3000);