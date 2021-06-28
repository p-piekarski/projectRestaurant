import { OrderItemsService } from "../services/orderitems";

export const getOneOrderItems = async (req, res) => {
    const { params } = req;
    if (!params?.id) return res.json({ data: [] });
    return res.json({ data: await OrderItemsService.read(params.id) });
};

export const getAllOrderItems  = async (req, res) => {
    return res.json({ data: await OrderItemsService.readAll() });
};

export const postMenuItems = async (req, res) => {
    const { body } = req;
    const { id, name, data } = body || {};

    try {
        await OrderItemsService.create(id, name, data);
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
        await OrderItemsService.update(id, fieldsToUpdate);
        res.status(200);
    } catch (err) {
        res.status(500);
    }

    return res.send();
};

export const deleteMenuItems = async (req, res) => {
    const { params } = req;
    const { id } = params || {};
    await OrderItemsService.delete(id);
    return res.send();
};