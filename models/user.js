import sequelize from "@/utils/sequelize"
import { DataTypes } from "sequelize"

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        
    }
})