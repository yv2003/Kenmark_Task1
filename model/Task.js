// const { DataTypes } = require('sequelize');
import { DataTypes } from 'sequelize';
// const sequelize = require("../utils/DB.js");
import sequelize from '../utils/DB.js';
const Task = sequelize.define(
  "Task",{
    // Model attributes are defined here
    User: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    Status: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    DueDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
);

export default Task;