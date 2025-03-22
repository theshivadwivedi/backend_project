//  require('dotenv').config({path: './env'}) 
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express"

const app=express();

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5001,()=>{
        console.log(`server is running at ${process.env.PORT}`);
        
    })  
})
.catch((err)=>{
    console.log("MONGODB  connection failed !!!",err);   
    
})





//  ############### not the best approach ###
//  function connectDB(){

//  }
//  connectDB()
// ############  better way ####
// ( async ()=> {
//       try {
//          await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//          app.on("Error",(error)=>{
//             console.log("Error:",error);
//             throw error             
//          })
//          app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port ${process.env.PORT}`);
            
//          })
//       } catch (error) {
//         console.log("Error",error);
//         throw err
        
//       }
// })()
//   ########## other approach todo #####
