import { TablesService } from "../services/tables.js";

export const getFirstFreeTables = async (req, res) => {
    return res.json({ data: await TablesService.readFirstFree()});
};

export const getAllTables  = async (req, res) => {
    return res.json({ data: await TablesService.readAll() });
};

export const getAllFreeTables = async (req, res) => {
    return res.json({ data: await TablesService.readAllFree()});
};

export const postTables = async (req, res) => {
    const { body } = req;
    const { isFree } = body || {};
    try {
        await TablesService.create(isFree);
        res.status(201);
    } catch (err) {
        res.status(500);
    }

    return res.send();
};

export const patchTables = async (req, res) => {
    const { params } = req;
    const { id } = params || {};
    const { body } = req;
    const { isFree } = body || {};
    

    const fieldsToUpdate = {};
    if (isFree !== undefined) fieldsToUpdate.isFree = isFree;

    try {
        await TablesService.update(id, fieldsToUpdate);
        res.status(200);
    } catch (err) {
        res.status(500);
    }

    return res.send();
};

export const deleteTables = async (req, res) => {
    const { params } = req;
    const { id } = params || {};
    await TablesService.delete(id);
    return res.send();
};