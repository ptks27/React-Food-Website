import mongoose from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://basbas:123456789a@cluster0.mebnndz.mongodb.net/food-website').then(()=>console.log("DB Connected"));
}