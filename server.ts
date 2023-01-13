import express from "express"
import blogsRoute from "./routes/blogs"
//imports

const app = express()
app.use(express.urlencoded());

app.use("/blogs", blogsRoute)

app.listen(3100)