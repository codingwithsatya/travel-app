import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';


const router = express.Router();

// update user
router.put('/users/:id', verifyUser, updateUser)

//delete user 
router.delete('/users/:id', verifyUser, deleteUser)

//get single user
router.get('/users/:id', verifyUser,  getSingleUser)

//get all users
router.get('/users', verifyAdmin, getAllUser)

export default router;