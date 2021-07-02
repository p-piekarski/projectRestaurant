import { OrdersService } from "../services/orders.js";
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
            await TablesService.readOne(tableId).then(async table=>{
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
        if (status==='closed'){
            await OrdersService.read(orderId).then( order=>{
                const completionTime= Math.abs(new Date() - order.data[0].createdAt);
                fieldsToUpdate.completionTime=completionTime;
                tableId=order.data[0].tableId;
                if(tableId > 0)
                    TablesService.update(tableId, {isFree: false});
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