import sequelize from "@/utils/sequelize"
import { DataTypes } from "sequelize"

const Clinic = sequelize.define("Clinic", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    timezone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    logo_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subscription_plan: {
        type: DataTypes.ENUM("pro"),
        allowNull: false,
    },
    sms_credits: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {tableName: "clinics", timestamps: true, paranoid: true})



export default Clinic