import { OrdersService } from "../services/orders.js";
import { TablesService } from "../services/tables.js";

export const getOneOrders = async (req, res) => {
    const { params } = req;
    if (!params?.id) return res.json({ data: [] });
    return res.json({ data: await OrdersService.read(params.id) });
};

export const getAllOrders = async (req, res) => {
    return res.json({ data: await OrdersService.readAll() });
};

export const postOrders = async (req, res) => {
    const { body } = req;
    const { tableId, currency, menuItems } = body || {};


    try {
        if (tableId !== undefined && tableId !== 0)
            await TablesService.readOne(tableId).then(async (table) => {
                console.log(table[0].isFree);
                if (table[0].isFree !== 1)
                    throw `Table ${tableId} is already taken, please place another order`;

            });
        await OrdersService.create(tableId, currency, menuItems);
        res.status(201);
    } catch (err) {
        res.status(500).send(err);
    }

    return res.send();
};

export const patchOrdersStatus = async (req, res) => {
    const { body } = req;
    const { orderId, status } = body || {};

    const fieldsToUpdate = {};
    if (status !== undefined || status === "opened" || status === "delivered" || status === "closed")
        fieldsToUpdate.status = status;

    try {
        if (status === 'closed') {
            await OrdersService.read(orderId).then(async (order) => {
                console.log(order);
                const completionTime = Math.abs(new Date() - order.createdAt);
                fieldsToUpdate.completionTime = completionTime;
                console.log(fieldsToUpdate);
                const tableId = order.tableId;
                if (tableId > 0)
                    await TablesService.update(tableId, { isFree: true });
            })
        }
        await OrdersService.update(orderId, fieldsToUpdate);
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