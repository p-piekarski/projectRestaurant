import { Sequelize } from "sequelize";
import databaseProvider from "../DatabaseProvider.js";

const MODEL_NAME = "tables";

databaseProvider.defineModel(
    MODEL_NAME,
    {
        tableId: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        isFree: {
          type: Sequelize.DataTypes.BOOLEAN,
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