//  require('dotenv').config({path: './env'}) 
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()






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
