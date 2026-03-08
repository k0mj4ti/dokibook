import sequelize from "@/utils/sequelize"
import { DataTypes } from "sequelize"

const Appointment = sequelize.define("Appointment", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    clinic_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    patient_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    staff_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    service_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    start_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("scheduled", "confirmed", "cancelled", "completed", "no_show"),
        allowNull: false,
        defaultValue: "scheduled"
    },
    reminder_sent_24h: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    reminder_sent_2h: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    confirmation_status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {tableName: "appointments", timestamps: true, paranoid: true})



export default Appointment