import sequelize from "@/utils/sequelize"
import { DataTypes } from "sequelize"

const Admin = sequelize.define("Admin", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM("admin", "support"),
        allowNull: false,
    }
}, {tableName: "admins", timestamps: true})



export default Admin