import {Sequelize} from 'sequelize'
import config from '../configs/config.js'

const sequelize = new Sequelize(config.database, config.user, config.pass,{
    host: config.host,
    port: config.port,
    dialect: config.dialect
})
// try{
//     await sequelize.authenticate();
//     console.log('connected to database');
// }catch(err){
//     console.log('err: ', err);
// }
export default sequelize