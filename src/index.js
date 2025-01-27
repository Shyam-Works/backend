import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.configDotenv({
    path: './.env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port: ${process.env.PORT}`)
    });
})
.catch((error)=>{
    console.log("mongodb connection fail", error)
})


// import express from "express";
// const app = express()
// (async ()=>{
//     try{    
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("ERROR ", error);
//             throw error
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`app is listing on port ${process.env.PORT}`);
//         })
//     }catch(error){
//         console.log("error",error)
//         throw err
//     }
// }) ()