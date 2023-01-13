import { PrismaClient } from "@prisma/client";
import express,{Request, Response} from "express"
const router = express.Router()
const prisma = new PrismaClient()

function createUser(data: {
    title: string,
    description: string
    markdown: string
}){
    prisma.blog.create({
        data: {
            title: data.title,
            description: data.description,
            markdown: data.markdown
        }
    })
}

router.get("/",(req : Request, res: Response) => {
    console.log("something");
})
router.get("/:id",(req : Request, res: Response) =>{
    console.log("something");
})

router.post("/",async (req : Request, res: Response) =>{
    await createUser(req.body)
})

router.patch("/:id",(req : Request, res: Response) =>{
    console.log("something");
    
})

router.delete("/:id",(req : Request, res: Response) =>{
    console.log("something");
})

export default router