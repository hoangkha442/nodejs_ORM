import { Sequelize } from 'sequelize'
import { responseData } from '../configs/response.js'
import sequelize from '../models/connect.js'
import initModels from '../models/init-models.js'
let model = initModels(sequelize)

// LIKE
export const likeRestaurants = async (req, res) => { 
    try{
        let { user_id, res_id } = req.body
        let checkUser = await model.users.findOne({
            where:  user_id 
        })
        if(checkUser){
            let newData = {
                user_id,
                res_id,
                date_like: new Date()
            }
            await model.like_res.create(newData)
            responseData(res, 'Like nhà hàng thành công!', '', 200)
        }else{
            responseData(res, 'Không tìm thấy tài khoản!', '', 404)
        }
    }   
    catch (err){
        responseData(res, 'Lỗi...', '', 500)
    } 
}
export const unLikeRestaurants = async (req, res) => { 
    try{
        let { user_id, res_id } = req.body
        let checkUser = await model.like_res.findAll({
            where: user_id 
        })
        if(checkUser){
                 await model.like_res.destroy({
                    where: {
                        user_id,
                        res_id
                    }
                 })
                responseData(res, 'Unlike thành công!', '', 200)
        }else{
            responseData(res, 'Bạn chưa đăng nhập!', '', 404)
        }
    }
    catch(err){
        responseData(res, 'Lỗi...', '', 500)
    }
}

// RATE
export const rateRestaurants = async (req, res) => {
    try{
        let { user_id, res_id, amount} = req.body
        let dataForm = {
            user_id, 
            res_id, 
            amount,
            date_rate: new Date()
        }
        let checkUser = await model.users.findOne({
            where: user_id
        }) 
        if(checkUser){
            if(1 <= dataForm.amount && dataForm.amount <= 5){
                await model.rate_res.create(dataForm)
                responseData(res, 'Đánh giá thành công!', '', 200)
            }else{
                responseData(res, 'Amount không hợp lệ!', '', 500)
            }
        }
        else{
            responseData(res, 'Không tìm thấy thông tin user!', '', 404)
        }
    }
    catch(err){
        responseData(res, 'Lỗi...', '', 500)
    }
    
}

// ORDER
export const userOrder = async (req, res) => { 
    try{
        let {user_id, food_id, amount, code, arr_sub_id} = req.body
        const checkUser = await model.users.findOne({
            where: user_id
        })
        if(checkUser){
            let formData = {
                user_id,
                food_id,
                amount,
                code,
                arr_sub_id
            }
            await model.orders.create(formData)
            responseData(res, 'Order thành công!', '', 200)
        }else{
            responseData(res, 'Bạn chưa đăng nhập', '', 404)
        }
    }
    catch(err){
        console.log('err: ', err);
        responseData(res, 'Lỗi ...', '', 500)
    }
}

