import { Sequelize } from "sequelize";
import databaseProvider from "../DatabaseProvider.js";

const MODEL_NAME = "orderItems";

databaseProvider.defineModel(
    MODEL_NAME,
    {
        orderItemId: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        orderId: {
            type: Sequelize.DataTypes.INTEGER,
        },
        itemId: {
          type: Sequelize.DataTypes.INTEGER,
        },
          price: {
              type: Sequelize.DataTypes.INTEGER,
        },
    },
    {
        timestamps: false,
    }
);

export const getOneOrderItems = async (options) =>
    databaseProvider.getOne(MODEL_NAME, options);

export const getAllOrderItems = async () =>
    databaseProvider.getAll(MODEL_NAME);

export const createOrderItems = async (options) =>
    databaseProvider.create(MODEL_NAME, options);

export const updateOrderItems = async (condition, fieldsToUpdate) =>
    databaseProvider.update(MODEL_NAME, condition, fieldsToUpdate);

export const deleteOrderItems = async (condition) =>
    databaseProvider.delete(MODEL_NAME, condition);