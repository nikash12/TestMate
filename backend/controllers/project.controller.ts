import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';


const prisma = new PrismaClient();

const createProject = async (req: Request, res: Response) => {
    const {name,userId} = req.body
    if(!userId || !name){
        return res.status(400).send("UserId and Proj name required")
    }

    try {
        const newProject = await prisma.project.create({
            data: { userId,name }
        });
        return res.status(201).json(newProject);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export {createProject}