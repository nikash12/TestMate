import { Router } from "express";
import { createProject } from "../controllers/project.controller";

const projectRouter = Router()

projectRouter.post('/create',
    createProject
)


export default projectRouter