import express from 'express';
import { getListLikeByRestaurants, getListLikeByUser, getListRateByRes, getListRateByUser } from '../controllers/resController.js';

const resRoute = express.Router()


resRoute.get('/list-like-by-res/:resID', getListLikeByRestaurants)
resRoute.get('/list-like-by-user/:userID', getListLikeByUser)

resRoute.get('/list-rate-by-res/:resID',getListRateByRes)
resRoute.get('/list-rate-by-user/:userID',getListRateByUser)
export default resRoute