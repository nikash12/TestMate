import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';


const prisma = new PrismaClient();

const createModule = async (req: Request, res: Response) => {
    const {name,projectId} = req.body
    if(!projectId || !name){
        return res.status(400).send("projectId and Module name required")
    }

    try {
        const newModule = await prisma.module.create({
            data: { projectId,name }
        });
        return res.status(201).json(newModule);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export {createModule}