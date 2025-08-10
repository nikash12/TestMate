import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.route'
import projectRouter from './routes/project.route'
import moduleRouter from './routes/module.route'
import tableRouter from './routes/table.route'
const app = express()

app.use(cors({origin:"*"}))

app.use(express.json())

app.use('/api/user/',userRouter)
app.use('/api/project/',projectRouter)
app.use('/api/module/',moduleRouter)
app.use('/api/table/',tableRouter)


export default app