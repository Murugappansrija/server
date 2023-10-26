

import express from "express";
import cookieParser from 'cookie-parser'
import cors from 'cors'

import user from "./routes/user.js"
import todo from './routes/todo.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/user', user)
app.use('/todo', todo)



export default app