import { Router } from "express"
 
const courseRouter = Router();

          // you would expect the user pay you  money     
 courseRouter.post("/purchase", function(res,req){
    res.status(200).json({
        message:"courses endpoint"
    })
})

  courseRouter.get("/preview", function(res,req){
   res.status(200).json({
    message: "courses endpoint"
   })
})

module.exports ={
    courseRouter: courseRouter
}