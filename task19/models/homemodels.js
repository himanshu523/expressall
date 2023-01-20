
const Sequelize = require("sequelize");


const sequelize = require("../util/database");

const Expenses = sequelize.define("expenseTable", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  expenses: {
    type:Sequelize.STRING,
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Expenses;