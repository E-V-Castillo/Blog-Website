import express,{NextFunction, Request, Response} from "express"

import { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog } from '../controller/blogs'
// imports

const router = express.Router()

// new instances



router.get("/", async (req : Request, res: Response, next: NextFunction) => {
    try {
        const blogs = await getBlogs()
        res.json(blogs)
        ;
    } catch (error) {
        next(error)
    }
})


router.get("/:id", async(req : Request, res: Response, next: NextFunction) =>{
    try {
        const {id} = req.params
        const blog = await getBlogById(Number(id))
        res.json(blog)
    } catch (error) {
        next(error)
    }
})


router.post("/", async (req : Request, res: Response, next: NextFunction) =>{
    // const data = {
    //     title: "This is my first Blog",
    //     description: "Welcome to my first Blog, this is my description",
    //     markdown: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis sed dui et sollicitudin. Quisque dapibus non justo sed consectetur. Cras egestas, turpis et lobortis malesuada, quam lacus finibus enim, vitae aliquet magna lorem ut nulla. Fusce eu leo id arcu imperdiet hendrerit. Duis interdum quis dui non suscipit.",
    // }
    // console.log(data)
    const {title, description, markdown} = req.body
    try {
        createBlog(title, description, markdown)
        res.status(201).send("User Created")
    } catch (error) {
        next(error)
    }  
})


router.patch("/:id",(req : Request, res: Response, next: NextFunction) =>{
    // const { id } = req.params
    // const { title, description, markdown } = req.body

    // if (!title|| !description|| !markdown){
    //     res.status(400).send("Invalid form data")
    //     return
    // }else{
    const {id} = req.params
    const title = "Updated title"
    const description = "Updated description"
    const markdown = "Updated markdown"
    try {
        updateBlog(Number(id), title, description, markdown)
        res.send(`Blog with id ${id} updated`)
    } catch (error) {
        next(error)
    }
    }
/* }*/)

router.delete("/:id",(req : Request, res: Response, next:NextFunction) =>{
    try {
        const {id} =  req.params
        console.log(id)
        // const id = 1
        deleteBlog(Number(id))
        res.send("deleted")
    } catch (error) {
        next(error)
    }
})

export default router