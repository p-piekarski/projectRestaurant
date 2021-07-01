import { OrdersService } from "../services/orders";
import { TablesService } from "../services/tables.js";

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
    const { tableId, currency, menuItems } = body || {};


    try {
        if (tableId !== undefined && tableId !==0)
            await TablesService.readOne(tableId).then(table=>{
                if (table.data[0].isFree == true)
                    await OrdersService.create(tableId,currency,menuItems);
                else 
                    throw `Table ${tableId} is already taken, please place another order`;
            });
        await OrdersService.create(tableId,currency,menuItems);
        res.status(201);
    } catch (err) {
        res.status(500).send(err);
    }

    return res.send();
};

export const patchOrdersStatus = async (req, res) => {
    const { body } = req;
    const { orderId, status} = body || {};

    const fieldsToUpdate = {};
    if (status !== undefined || status === "opened" || status === "delivered" || status === "closed") 
        fieldsToUpdate.status = status;

    try {
        await OrdersService.update(orderId, fieldsToUpdate);
        if (status==='closed'){
            await OrdersService.read(orderId).then(order=>{
                tableId=order.data[0].tableId;
                if(tableId > 0)
                    await TablesService.update(tableId, {isFree: false});
            })
        }
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