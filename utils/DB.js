
import { Sequelize } from "sequelize";

import dotenv from "dotenv";

dotenv.config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.USER_PASS, {
    host: process.env.DB_HOST, dialect: "mysql",logging:false,
});
const DB = async() => {
    try{
        await sequelize.authenticate();
        console.log("authenticated")
    } catch (e) {
        console.log(e);
    }
    
//     sequelize.sync({ alter: true }).then(() => {
//     console.log("Database synced!");
// });
}

DB();
export default sequelize;