import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import authRouter from './routes/authRoutes.js';
import biodataRouter from './routes/biodataRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);
app.use("/api/biodata", biodataRouter)

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`server running on port: ${process.env.PORT}`);
  })
})