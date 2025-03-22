import { Sequelize } from "sequelize";

const db = new Sequelize('notes', 'root', '', {
    host: '34.121.20.199',
    dialect: 'mysql',
});

export default db;