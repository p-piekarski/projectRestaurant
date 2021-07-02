import { Sequelize } from "sequelize";
import databaseProvider from "../DatabaseProvider.js";

const MODEL_NAME = "orders";

databaseProvider.defineModel(
  MODEL_NAME,
  {
    orderId: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    totalPrice: {
      type: Sequelize.DataTypes.INTEGER,
    },
    tableId: {
      type: Sequelize.DataTypes.INTEGER,
    },
    completionTime: {
      type: Sequelize.DataTypes.INTEGER,
    },
    currency: {
      type: Sequelize.DataTypes.STRING,
    },
    status: {
      type: Sequelize.DataTypes.STRING,
      defaultValue: "opened"
    },
  },
  {
    timestamps: true,
  }
);

export const getOneOrders = async (options) =>
  databaseProvider.getOne(MODEL_NAME, options);

export const getAllOrders = async () =>
  databaseProvider.getAll(MODEL_NAME);

export const createOrders = async (options) =>
  databaseProvider.create(MODEL_NAME, options);

export const updateOrders = async (condition, fieldsToUpdate) =>
  databaseProvider.update(MODEL_NAME, condition, fieldsToUpdate);

export const deleteOrders = async (condition) =>
  databaseProvider.delete(MODEL_NAME, condition);