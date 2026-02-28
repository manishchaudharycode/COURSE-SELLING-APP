import { Router } from "express"
import { courseModel, purchaseModel } from "../db.js";
import userMiddleware from "../middleware/user.js";
 
const courseRouter = Router();

          // you would expect the user pay you  money     
 courseRouter.post("/purchase",userMiddleware, async(req,res)=>{
    const userId = req.userId
    const courseId = req.body.courseId

    await purchaseModel.create({
        userId,
        courseId
    })

    res.status(200).json({
        message:"courses endpoint"
    })
})

  courseRouter.get("/preview",userMiddleware, async (req,res)=>{

   const courses = await courseModel.find({})
   res.status(200).json({
     courses
   })
})

export default courseRouter;