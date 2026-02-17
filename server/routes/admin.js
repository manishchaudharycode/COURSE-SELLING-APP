import { Router } from "express";
import { adminModel, courseModel } from "../db.js";
import jwt from "jsonwebtoken";
import { JWT_ADMIN_PASSWORD } from "../config.js";
import adminMiddleware from "../middleware/admin.js";


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
        const token = jwt.sign({ id: admin._id }, JWT_ADMIN_PASSWORD)
        res.status(200).json({
            token: token
        })
    } else {
     res.status(400).json({
        Message:"Incorrect credentials"
    })   
    }
})

adminRouter.post('/course', adminMiddleware, async(req, res) =>{
    const adminId = req.userId

    const { title, description, imageUrl, price } = req.body

    const course = await courseModel.create({
        title: title,
        description: description,
        price: price,
        imageUrl: imageUrl,
        creatorId: adminId
    })
    res.status(200).json({
        Message:"course created",
        courseId:course._id
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
