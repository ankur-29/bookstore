import express from 'express';
import cookieParser from "cookie-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDatabase from './dbConnector';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

//routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// Connect to MongoDB and start server
app.listen(PORT, async () => {
    console.log(`Server is running at port ${PORT}`);
    console.log(`Connecting Database...`);
    await connectDatabase();
});
