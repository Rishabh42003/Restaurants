import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://rishabh:302310@cluster0.vhfnx.mongodb.net/reactproject').then(()=>console.log("DB Connected"));

}