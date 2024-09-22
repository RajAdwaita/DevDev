import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = "pookieString"
const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))


app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    /**
     * TODO: here do db validations, fetch id of the user from the db
    */
    const token = jwt.sign({
        id: 1
    }, JWT_SECRET);

    res.cookie('token', token); // will put the cookie in the set-cookie header
    res.send("Logged In")

})

app.get('/user', (req, res) => {

    const token = req.cookies.token;
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    res.send({
        userId: decoded.id,
    })


})


app.post('/logout', (req, res) => {
    res.clearCookie('token')
    // res.cookie("token", "");
    res.json({
        message: "Logged Out"
    })
})


app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the server"
    })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log("Server Connected");
    console.log("Listening on PORT" + PORT);

})


