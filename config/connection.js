require("dotenv").config();

const Sequelize = require("sequelize");
console.log({
  db_name: process.env.DB_NAME,
  db_user: process.env.DB_USER,
  db_pass: process.env.DB_PW,
});
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
