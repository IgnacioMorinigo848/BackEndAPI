import express from "express"

/////////////ROUTES////////////////////
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import listRoutes from "./routes/lists.routes.js"

const app=express()

/////////////MIDDLEWARES///////////////
app.use(express.json())

/////////////ROUTES////////////////////
app.use("/auth",authRoutes)
app.use("/user",userRoutes)
app.use("/lists",listRoutes)

export default app