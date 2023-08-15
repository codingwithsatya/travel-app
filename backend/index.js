import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/bookings.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: true,
    credentials: true
}

//database connection
mongoose.set("strictQuery", false)
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("MongoDb database connected")
    } catch (error) {
        console.log("Error while connecting database")
    }
}


//middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/api/v1', tourRoute)
app.use('/api/v1', userRoute)
app.use('/api/v1', authRoute)
app.use('/api/v1', reviewRoute)
app.use('/api/v1', bookingRoute)

app.listen(port, () => {
    connect();
    console.log('Server listening on port', port);
})