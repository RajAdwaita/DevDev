const mongoose = require("mongoose")

// mongoose.connect("mongodb+srv://adwaitaraj:9nM1dwkzCXhwzgti@cluster0.03zet.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
// mongoose.connection.on('connected', () => {
//     console.log('Mongoose connected to MongoDB');
// });

const bankSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        default: 0,

    }
});



const userSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: true,
        // unique: true,
        // trim: true,
        // lowercase: true,
        // minLength: 3,
        // maxLength: 30,
    },
    firstName: {
        type: String,
        required: true,
        // trim: true,
        // maxLength: 30,
    },
    lastName: {
        type: String,
        required: true,
        // trim: true,
        // maxLength: 30,
    },
    password: {
        type: String,
        required: true,
        // minLength: 8,
    }
})


const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', bankSchema)
module.exports = {
    User,
    Account
}