import sequelize from "@/utils/sequelize"
import { DataTypes } from "sequelize"

const Staff = sequelize.define("Staff", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    clinic_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM("staff", "doctor"),
        allowNull: true,
        defaultValue: "doctor"
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    active: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {tableName: "staffs", timestamps: true, paranoid: true})



export default Staff