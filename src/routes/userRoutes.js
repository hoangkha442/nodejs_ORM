import express from 'express';
import { likeRestaurants, rateRestaurants, unLikeRestaurants, userOrder } from '../controllers/userController.js';

const userRoute = express.Router()

userRoute.post('/like', likeRestaurants)
userRoute.delete('/unlike', unLikeRestaurants)

// RATE RESTAURANTS
userRoute.post('/rate', rateRestaurants)

// ORDER 
userRoute.post('/order', userOrder)
export default userRoute