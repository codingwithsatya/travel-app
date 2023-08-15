import express from 'express'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/booking/create-booking', verifyUser, createBooking)
router.get('/booking/get-booking/:id', verifyUser, getBooking)
router.get('/booking', verifyAdmin, getAllBooking)

export default router;