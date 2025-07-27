import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.route'
const app = express()

app.use(cors({origin:"*"}))

app.use(express.json())

app.use('/api/user/',userRouter)

export default app