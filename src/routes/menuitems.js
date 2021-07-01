import { MenuItemsService } from "../services/menuitems.js";

export const getOneMenuItems = async (req, res) => {
    const { params } = req;
    if (!params?.id) return res.json({ data: [] });
    return res.json({ data: await MenuItemsService.read(params.id) });
};

export const getAllMenuItems  = async (req, res) => {
    return res.json({ data: await MenuItemsService.readAll() });
};

export const postMenuItems = async (req, res) => {
    const { body } = req;
    const { name, price } = body || {};

    try {
        await MenuItemsService.create(name, price);
        res.status(201);
    } catch (err) {
        res.status(500);
    }

    return res.send();
};

export const patchMenuItems = async (req, res) => {
    const { body } = req;
    const { id, name, data } = body || {};

    const fieldsToUpdate = {};
    if (name !== undefined) fieldsToUpdate.name = name;
    if (data !== undefined)
        fieldsToUpdate.data =
            typeof data === "string" ? data : JSON.stringify(data);

    try {
        await MenuItemsService.update(id, fieldsToUpdate);
        res.status(200);
    } catch (err) {
        res.status(500);
    }

    return res.send();
};

export const deleteMenuItems = async (req, res) => {
    const { params } = req;
    const { id } = params || {};
    await MenuItemsService.delete(id);
    return res.send();
};