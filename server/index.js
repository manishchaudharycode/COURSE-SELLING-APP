import express from 'express'
import { userRouter } from './routes/course'
import { courseRouter } from './routes/user';
import { use } from 'react';

const app = express()

userRouter(app);
courseRouter(app);


app.use("/user", userRouter);
app.use("/courses", courseRouter)

app.listen(3000)
