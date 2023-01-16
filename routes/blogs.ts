import express,{NextFunction, Request, Response} from "express"

import { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog } from '../controller/blogs'
// imports

const router = express.Router()

// new instances

router.get("/", async (req : Request, res: Response, next: NextFunction) => {
    try {
        const blogs = await getBlogs()
        res.render("./blogsIndex/blogsIndex.ejs", {blogs:blogs})
    } catch (error) {
        next(error)
    }
})


router.get("/new", async (req : Request, res: Response, next: NextFunction) =>{
    try {
        res.render("./blogsIndex/newBlog.ejs")
    } catch (error) {
        next(error)
    }
})

router.get("/:id", async(req : Request, res: Response, next: NextFunction) =>{
    try {
        const {id} = req.params
        console.log(id)
        const blog = await getBlogById(Number(id))
        res.json(blog)  
    } catch (error) {
        next(error)
    }
})





router.post("/", async (req : Request, res: Response, next: NextFunction) =>{
    const {title, description, markdown} = req.body
    try {
        await createBlog(title, description, markdown)
        res.redirect("/blogs")
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
        deleteBlog(Number(id))
        res.status(200).json( {message: "Blog was deleted"})
    } catch (error) {
        next(error)
    }
})

export default router