import app from './app'
import { PrismaClient } from './generated/prisma'
import dotenv from 'dotenv'
dotenv.config()

const prisma = new PrismaClient()
const port = process.env.PORT || 2001
const connect = async function(){
    try{
        await prisma.$connect()
        console.log("connection to DB done.");
        app.listen(port,()=>console.log("listening on PORT 2001"))
    }catch(e){
        console.log("Failed connection to DB "+e);
    }
}

connect()