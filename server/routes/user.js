import { Router  } from "express"

const userRouter = Router();

    userRouter.post("/signup", function(req, res){
    res.status(200).json({
        message:"signup endpoint"
    })       
  })

   userRouter.post("/signin", function(req, res){
     res.status(200).json({
        message:"signin endpoint"
     })
   })

   userRouter.get("/purchase", function(req, res){
    res.status(200).json(
        {
            message:"sigin endpoint"
        }
    )
  })

export default userRouter;