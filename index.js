import app from './app.js'
import connectDB from "./config/db.js";
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
connectDB()
app.use(cors())
app.listen(4000, () => {
    console.log('server is up')
})