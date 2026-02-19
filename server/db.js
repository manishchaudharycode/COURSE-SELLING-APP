import mongoose, {  Schema } from "mongoose"; 
import dotenv from "dotenv";
dotenv.config({ path: "../.env" }); 

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));
const objectId = mongoose.Types.ObjectId

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const adminSchema = new Schema({
     email: { type: String, unique: true},
     password: String,
     firstName: String,
     lastName: String,
})

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: objectId,
})

const purchaseSchema = new Schema({
      userId: objectId,
      creatorId: objectId
})

 const userModel =mongoose.model("user", userSchema);
 export default userModel
 export const adminModel =mongoose.model("admin", adminSchema);
 export const courseModel = mongoose.model("course", courseSchema);
 export const purchaseModel = mongoose.model("purchase", purchaseSchema);




