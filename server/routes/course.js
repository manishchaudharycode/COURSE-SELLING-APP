import { Router } from "express"
 
const courseRouter = Router();

          // you would expect the user pay you  money     
 courseRouter.post("/purchase", function(req,res){
    res.status(200).json({
        message:"courses endpoint"
    })
})

  courseRouter.get("/preview", function(req,res){
   res.status(200).json({
    message: "courses preview endpoint"
   })
})

export default courseRouter;