import express from 'express';
import userRoute from './userRoutes.js';
import resRoute from './resRoutes.js'

const rootRoute = express.Router()

rootRoute.use('/user', userRoute)
rootRoute.use('/res', resRoute)

export default rootRoute

