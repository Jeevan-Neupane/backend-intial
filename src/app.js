import express from 'express'
import cors from 'cors'
import UserRoute from "./routes/auth.route.js"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json());


app.use('/api/auth', UserRoute);



export { app };




