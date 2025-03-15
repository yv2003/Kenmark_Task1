import express from "express";
import Sequelize from "sequelize";
import router from "./users/routes/routes.js";
import sequelize from "./utils/DB.js";
import dotenv from 'dotenv';
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.USER_PASS, {
//     host: process.env.DB_HOST, dialect: "mysql",
// });
const app = express();
app.use(express.json());
dotenv.config();
console.log(process.env.DB_NAME, process.env.DB_USER, process.env.USER_PASS)
app.use("/tasks", router)
console.log("logg");


(async () => {
    try {
        // await connectDatabase(); 
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
        await sequelize.sync({alter:true});
        console.log('Database synced successfully.');
    } catch (error) {
        console.error('Error starting the server or syncing the database:', error);
    }
});