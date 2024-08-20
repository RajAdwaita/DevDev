const express = require('express')
const { connectionToDB } = require('./connection')
const app = express();
const mainRouter = require('./routes/index')
const cookieParser = require('cookie-parser')
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


MONGO_URL = "mongodb+srv://adwaitaraj:9nM1dwkzCXhwzgti@cluster0.03zet.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
connectionToDB(MONGO_URL)
    .then(() => {
        console.log("Connected to DB");

    })
    .catch((err) => {
        console.log(err);

    })



const PORT = process.env.PORT || 3000;

app.use('/api/v1', mainRouter);

app.use((req, res) => {
    res.send("Something Fishy");
});

app.listen(PORT, () => {
    console.log(`APP RUNNING ON PORT ${PORT}`);


})




