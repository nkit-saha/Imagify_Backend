import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'
const PORT = process.env.PORT || 4000
const app = express()
app.use(express.json())
app.use(cors({
  origin: 'https://imagify-frontend-dfc3.vercel.app',
  credentials: true
}));

await connectDB()
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/', (req,res)=>res.json({message: "Imagify API is working", status: "success"}))
app.get('/health', (req,res)=>res.json({message: "Server is healthy", timestamp: new Date().toISOString()}))
app.listen(PORT, ()=> console.log('Server running on port '+PORT));
