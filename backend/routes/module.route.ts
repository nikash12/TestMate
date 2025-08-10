import { Router } from "express";
import { createModule } from "../controllers/module.controller";

const moduleRouter = Router()

moduleRouter.post('/create',
    createModule
)


export default moduleRouter