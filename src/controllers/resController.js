import { Sequelize } from 'sequelize'
import { responseData } from '../configs/response.js'
import sequelize from '../models/connect.js'
import initModels from '../models/init-models.js'
let model = initModels(sequelize)

export const getListLikeByRestaurants = async (req, res) => { 
    try{
        let { resID } = req.params
        let data = await model.like_res.findAll({
            where: {
                res_id: resID
            },
            include: 're'
        })
        responseData(res, 'Thành công', data, 200)
    }
    catch{

    }
}
export const getListLikeByUser = async (req, res) => {
    try{
        let { userID } = req.params
        const data = await model.like_res.findAll({
            where: {
                user_id: userID
            },
            include: 'user'
        })
        responseData(res, 'Thành Công', data, 200)
    }catch(err){
        responseData(res, 'Lỗi...', '', 500)
    }
}

// GET RATE
export const getListRateByRes = async (req, res) => { 
    try{
        let { resID } = req.params
        let data = await model.rate_res.findAll({
            where: {
                res_id: resID
            },
            include: 'user'
        })
        responseData(res, 'Thành Công', data, 200)
    }
    catch(err){
        requestData(res, 'Lỗi...', '', 500)
    }
}
export const getListRateByUser = async (req, res) => {
    try{
        let { userID } = req.params
        let data = await model.rate_res.findAll({
            where: {
                user_id: userID
            },
            include: 're'
        })
        responseData(res, 'Thành công!', data ,200)
    }
    catch(err){
        responseData
    }
}