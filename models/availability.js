import sequelize from "@/utils/sequelize"
import { DataTypes } from "sequelize"

const Availability = sequelize.define("Availability", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    clinic_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    staff_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    day_of_week: {
        type: DataTypes.ENUM("monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"),
        allowNull: false,
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
}, {tableName: "availabilitys", timestamps: true, paranoid: true})



export default Availability