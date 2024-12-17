import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shylash:Shy1234@cluster0.o7tsu.mongodb.net/food-del').then(() => console.log("DB Connected"));
}