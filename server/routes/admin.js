import { Router } from "express";
const adminRouter = Router();

adminRouter.post('/signup', function(req, res){
    res.status(200).json({
        Message:"signup endpoint"
    })
})

adminRouter.post('/signin', function(req, res){
    res.status(200).json({
        Message:"signin endpoint"
    })
})

adminRouter.post('/course', function(req, res){
    res.status(200).json({
        Message:"course endpoint"
    })
})

adminRouter.put('/course', function(req, res){
    res.status(200).json({
        Message:"course endpoint"
    })
})

adminRouter.get('/course/bulk', function(req, res){
    res.status(200).json({
        Message:"course bulk endpoint"
    })
})


export default adminRouter;
