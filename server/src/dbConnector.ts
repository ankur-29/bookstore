import mongoose from "mongoose";

const connectDatabase = async () => {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        throw new Error('MONGO_URI is not defined in environment variables');
    }
    let connection = await mongoose.connect(uri);
    if (connection) {
        try {
            console.log(`MongoDB connection established`);
        } catch (e) {
            console.log(`MongoDB connection cannot be established`);
        }
    }
}

export default connectDatabase;