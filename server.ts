import express from "express"
import blogsRoute from "./routes/blogs"
//imports

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use("/blogs", blogsRoute)

app.listen(3110)