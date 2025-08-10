import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';


const prisma = new PrismaClient();

const createModule = async (req: Request, res: Response) => {
    const {title,tableId} = req.body
    if(!tableId || !title){
        return res.status(400).send("tableId and Module title required")
    }

    try {
        const newTestCase = await prisma.testCase.create({
            data: { tableId,title }
        });
        return res.status(201).json(newTestCase);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export {createModule}