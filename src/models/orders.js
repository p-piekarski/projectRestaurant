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
        startDate: {
          type: Sequelize.DataTypes.DATE,
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
          type: Sequelize.DataTypes.STRING,},
        },
    {
        timestamps: false,
    }
);

export const getOneExample = async (options) =>
    databaseProvider.getOne(MODEL_NAME, options);

export const getAllExample = async () =>
    databaseProvider.getAll(MODEL_NAME);

export const createExample = async (options) =>
    databaseProvider.create(MODEL_NAME, options);

export const updateExample = async (condition, fieldsToUpdate) =>
    databaseProvider.update(MODEL_NAME, condition, fieldsToUpdate);

export const deleteExample = async (condition) =>
    databaseProvider.delete(MODEL_NAME, condition);