import { Router  } from "express";
import userModel from "../db.js"
import  jwt  from "jsonwebtoken";
import { JWT_USER_PASSWORD } from "../config.js";
const userRouter = Router();

    userRouter.post("/signup", async(req, res) =>{
        const { email, password, firstName, lastName } = req.body; // TODO: adding zod validation
          
        
        await userModel.create({
            email:email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
         
       res.status(200).json({
        message:"signup succeded"
       })       
  })

   userRouter.post("/signin", async(req, res)=>{
     
     const { email, password } = req.body;
     
     const user = await userModel.findOne({
        email: email,
        password: password
     })
     if(user){
        const token = jwt.sign({ id: user._id }, JWT_USER_PASSWORD)
        res.status(200).json({
            token: token
        })
     }else{
        res.status(400).json({
        message:"incorrect credentails"
     })
     }
   })

   userRouter.get("/purchase", function(req, res){
    res.status(200).json(
        {
            message:"sigin endpoint"
        }
    )
  })

export default userRouter;