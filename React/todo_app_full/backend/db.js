const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://adwaitaraj:ABC123@cluster0.5okaviz.mongodb.net/todos")


const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})


const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo
}