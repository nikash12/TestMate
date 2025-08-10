import { Router } from "express";
import { createTable } from "../controllers/table.controller";

const tableRouter = Router()

tableRouter.post('/create',
    createTable
)


export default tableRouter