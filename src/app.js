import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();

// cors for accept req from diff domain
app.use(cors({
    origin: process.env.CORS_ORIGIN, // specify which server is allowed
    credentials: true // enable case sensitive in CORS requests
}));
///////////////////////////////////////////////////////////////////////
// limit of json data which is coming to backend
app.use(express.json({limit: "16kb"}))
// configration for data which is coming from URL
app.use(express.urlencoded(
    {
    extended: true, // allow nested data
    limit: "16kb"
    }
))
// local store to store like any public thing pdf, img stc...
app.use(express.static("public"))
app.use(cookieParser())
///////////////////////////////////////////////////////////////////////

// routes
import userRouter from './routes/user.routes.js'

// routes declare
app.use("/api/v1/users", userRouter)
export {app}