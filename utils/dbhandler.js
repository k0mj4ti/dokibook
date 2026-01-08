const { default: sequelize } = require("./sequelize");

let connected = false;

export default async function connectToDb(){
    if (connected) return;
    try {
        await sequelize.authenticate()
        await sequelize.sync({ alter: true })
        connected = true;
    } catch (error) {
        console.error(error);
    }
}