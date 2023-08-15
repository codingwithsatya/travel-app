import express from 'express'
import { createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCount } from '../controllers/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()

//post Tour
router.post('/', verifyAdmin, createTour);

// update Tour
router.put('/tours/:id', verifyAdmin, updateTour);

// delete Tour
router.delete('/tours/:id',verifyAdmin, deleteTour);

// get Single Tour
router.get('/tours/:id', getSingleTour);

// get All Tour
router.get('/tours', getAllTour);

// get tour by search
router.get('/tours/search/getTourBySearch', getTourBySearch);

// get tour by search
router.get('/tours/search/getFeatured', getFeaturedTour);

// get tour by count
router.get('/tours/search/getTourCount', getTourCount);

export default router;