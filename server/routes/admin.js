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


adminRouter.post('/signin', async(req, res) =>  {
    const { email, password } = req.body;
    
    const user = await adminModel.findOne({
        email: email,
        password: password
    })

    if (user) {
         const token = jwt.sign({id:adminMiddleware._id}, JWT_ADMIN_PASSWORD)
         res.status(200).json({
            token: token
         })
    } else {
        res.status(403).json({
            message: "incorrect credentails"
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


adminRouter.put('/', adminMiddleware, async(req, res)=>{
    const adminId = req.userId

    const { title, description, imageUrl, price, courseId  } = req.body

    const course = await courseModel.updateOne({
        _id:courseId._id,
        creatorId: adminId
    },{
        title: title,
        description: description,
        imageUrl: imageUrl,
        price:price
    })
    

    res.status(200).json({
        Message:"updated course",
        courseId:course._id
    })
})

adminRouter.get('/bulk', async(req, res)=>{

    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId: adminId
    })
    res.status(200).json({
        Message:"update courses",
        courses

    })
})

// "title":"Black Tiger",
// "description":"Black Tigers are a rare color variant of the Bengal tiger, not a disti…",
// "price":2999,
// "imageUrl":"https://imgs.search.brave.com/Ddbr0OudFW27usE0tOFl4s_TSv87vKoeNXVlBS35…" 
// 699e75bc4b018d87266a5558

export default adminRouter;
