import express from 'express'

const app = express()

app.post("/user/signup", function(req, res){
    res.status(200).json({
        message:"signup endpoint"
    })       
})

app.post("/user/signin", function(res, req){
     res.status(200).json({
        message:"signin endpoint"
     })
})

app.get("/user/purchase", function(req, res){
    res.status(200).json(
        {
            message:"sigin endpoint"
        }
    )
})

      // you would expect the user pay you  money     
app.post("/course/purchase", function(res,req){
    res.status(200).json({
        message:"courses endpoint"
    })
})

app.get("/courses", function(res,req){
   res.status(200).json({
    message: "courses endpoint"
   })
})


app.listen(3000)
