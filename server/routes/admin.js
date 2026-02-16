import { Router } from "express";
import { adminModel } from "../db.js";
import jwt from "jsonwebtoken";

const ADMIN_JWT_PASSWORD = "honey@123"
const adminRouter = Router();

adminRouter.post('/signup', async (req, res)=>{
    const { email, password, firstName, lastName } = req.body;

    const user = await adminModel.create({
        email: email,
        password: password,
        firstName:firstName,
        lastName: lastName
    })
    if(user){
        res.status(200).json({
        Message:"signup successfully"
    })
    }
    
})

adminRouter.post('/signin', async(req, res)=>{
    const { email, password } = req.body;
    
    const user = await adminModel.findOne({
        email: email,
        password: password
    })

    if (user) {
        const token = await jwt.sign({id:adminModel._id}, ADMIN_JWT_PASSWORD)
        res.status(200).json({
            token: token
        })
    } else {
     res.status(400).json({
        Message:"Incorrect credentials"
    })   
    }
})

adminRouter.post('/', function(req, res){
    res.status(200).json({
        Message:"course endpoint"
    })
})

adminRouter.put('/', function(req, res){
    res.status(200).json({
        Message:"course endpoint"
    })
})

adminRouter.get('/bulk', function(req, res){
    res.status(200).json({
        Message:"course bulk endpoint"
    })
})


export default adminRouter;
