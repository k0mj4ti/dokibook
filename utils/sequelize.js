import { Sequelize } from "sequelize"
import mysql2 from "mysql2"

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER || "root",
    process.env.DB_PASS,
    {
        database: "hyassets",
        dialect: "mysql",
        dialectModule: mysql2,
        logging: false
    }
)
export default sequelize