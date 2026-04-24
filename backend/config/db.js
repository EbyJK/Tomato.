// import mongoose from "mongoose"

// export const connectDB= async()=>{
//     (await mongoose.connect('mongodb+srv://ebyjk:atlas2@cluster0.tz8z9s9.mongodb.net/food-del')).then(()=>console.log("DB connected"));

// }

import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected");
    } catch (error) {
        console.error("DB connection error:", error);
        process.exit(1); // optional: stop server if DB fails
    }
};
