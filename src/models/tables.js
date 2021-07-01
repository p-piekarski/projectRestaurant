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


export const getFreeTables = async (options) =>
    databaseProvider.getOne(MODEL_NAME, options);

export const getTables = async (options) =>
    databaseProvider.getWhere(MODEL_NAME, options);

export const getAllTables = async () =>
    databaseProvider.getAll(MODEL_NAME);

export const createTables = async (options) =>
    databaseProvider.create(MODEL_NAME, options);

export const updateTables = async (condition, fieldsToUpdate) =>
    databaseProvider.update(MODEL_NAME, condition, fieldsToUpdate);

export const deleteTables = async (condition) =>
    databaseProvider.delete(MODEL_NAME, condition);