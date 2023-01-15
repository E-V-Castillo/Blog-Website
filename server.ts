import express from "express"
import blogsRoute from "./routes/blogs"
import indexRoute from "./routes/index"
//imports

const app = express()

app.set("view engine", "ejs")
app.set("views", "./views")
// config

app.use("/static",express.static("public"))


app.use(express.json())
app.use(express.urlencoded({extended:true}));

// Middleware
app.use("/blogs", blogsRoute)
app.use(indexRoute)
// Routes

app.listen(3110)