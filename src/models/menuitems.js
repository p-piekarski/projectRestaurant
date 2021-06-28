import { Sequelize } from "sequelize";
import databaseProvider from "../DatabaseProvider.js";

const MODEL_NAME = "menuitems";

databaseProvider.defineModel(
    MODEL_NAME,
    {
        itemId: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.DataTypes.STRING,
        },
        price: {
            type: Sequelize.DataTypes.INTEGER,
        },
    },
    {
        timestamps: false,
    }
);

export const getOneMenuItems = async (options) =>
    databaseProvider.getOne(MODEL_NAME, options);

export const getAllMenuItems = async () =>
    databaseProvider.getAll(MODEL_NAME);

export const createMenuItems = async (options) =>
    databaseProvider.create(MODEL_NAME, options);

export const updateMenuItems = async (condition, fieldsToUpdate) =>
    databaseProvider.update(MODEL_NAME, condition, fieldsToUpdate);

export const deleteMenuItems = async (condition) =>
    databaseProvider.delete(MODEL_NAME, condition);