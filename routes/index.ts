import express,{NextFunction, Request, Response} from "express"

import { getBlogs } from '../controller/blogs'
// imports

const router = express.Router()


router.get("/", async (req : Request, res: Response, next: NextFunction) => {
    try {
        const blogs = await getBlogs()
        res.render("index", {blogs: blogs})
    } catch (error) {
        next(error)
    }
})

export default router