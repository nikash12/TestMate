import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';


const prisma = new PrismaClient();

const createTable = async (req: Request, res: Response) => {
    const {name,moduleId} = req.body
    if(!moduleId || !name){
        return res.status(400).send("moduleId and Module name required")
    }

    try {
        const newTable = await prisma.table.create({
            data: { moduleId,name }
        });
        return res.status(201).json(newTable);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export {createTable}