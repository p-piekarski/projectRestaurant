import { Sequelize } from "sequelize";
import databaseProvider from "../DatabaseProvider.js";

const MODEL_NAME = "orderitems";

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