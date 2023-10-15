import app from './app.js'
import connectDB from "./config/db.js";
import dotenv from 'dotenv'
dotenv.config()
connectDB()
app.listen(4000, () => {
    console.log('server is up')
})