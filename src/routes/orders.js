import { OrdersService } from "../services/orders";

export const getOneOrders = async (req, res) => {
    const { params } = req;
    if (!params?.id) return res.json({ data: [] });
    return res.json({ data: await OrdersService.read(params.id) });
};

export const getAllOrders  = async (req, res) => {
    return res.json({ data: await OrdersService.readAll() });
};

export const postOrders = async (req, res) => {
    const { body } = req;
    const { id, name, data } = body || {};

    try {
        await OrdersService.create(id, name, data);
        res.status(201);
    } catch (err) {
        res.status(500);
    }

    return res.send();
};

export const patchOrders = async (req, res) => {
    const { body } = req;
    const { id, name, data } = body || {};

    const fieldsToUpdate = {};
    if (name !== undefined) fieldsToUpdate.name = name;
    if (data !== undefined)
        fieldsToUpdate.data =
            typeof data === "string" ? data : JSON.stringify(data);

    try {
        await OrdersService.update(id, fieldsToUpdate);
        res.status(200);
    } catch (err) {
        res.status(500);
    }

    return res.send();
};

export const deleteOrders = async (req, res) => {
    const { params } = req;
    const { id } = params || {};
    await OrdersService.delete(id);
    return res.send();
};