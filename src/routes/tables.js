import { TablesService } from "../services/tables";

export const getOneTables = async (req, res) => {
    const { params } = req;
    if (!params?.id) return res.json({ data: [] });
    return res.json({ data: await TablesService.read(params.id) });
};

export const getAllTables  = async (req, res) => {
    return res.json({ data: await TablesService.readAll() });
};

export const postTables = async (req, res) => {
    const { body } = req;
    const { id, name, data } = body || {};

    try {
        await TablesService.create(id, name, data);
        res.status(201);
    } catch (err) {
        res.status(500);
    }

    return res.send();
};

export const patchTables = async (req, res) => {
    const { body } = req;
    const { id, name, data } = body || {};

    const fieldsToUpdate = {};
    if (name !== undefined) fieldsToUpdate.name = name;
    if (data !== undefined)
        fieldsToUpdate.data =
            typeof data === "string" ? data : JSON.stringify(data);

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