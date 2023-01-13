import { PrismaClient } from "@prisma/client";
import express,{NextFunction, Request, Response} from "express"
const router = express.Router()
const prisma = new PrismaClient()

async function createUser(data :{
        title: string,
        description: string
        markdown: string
    }){
    return await prisma.blog.create({
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

router.post("/", async (req : Request, res: Response, next: NextFunction) =>{
    const data = {
        title: "This is my first Blog",
        description: "Welcome to my first Blog, this is my description",
        markdown: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis sed dui et sollicitudin. Quisque dapibus non justo sed consectetur. Cras egestas, turpis et lobortis malesuada, quam lacus finibus enim, vitae aliquet magna lorem ut nulla. Fusce eu leo id arcu imperdiet hendrerit. Duis interdum quis dui non suscipit.",
    }
    console.log(data)
    try {
        createUser(data)
        res.status(201).send("User Created")
    } catch (error) {
        next(error)
    }
    
})

router.patch("/:id",(req : Request, res: Response) =>{
    console.log("something");
})

router.delete("/:id",(req : Request, res: Response) =>{
    console.log("something");
})

export default router