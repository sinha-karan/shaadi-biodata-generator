import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import router from './routes/authRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", router);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`server running on port: ${process.env.PORT}`);
  })
})