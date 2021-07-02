import {
    getAllOrders,
    getOneOrders,
    deleteOrders,
    createOrders,
    updateOrders,
} from "../models/orders.js";

import { OrderItemsService } from "./orderitems.js"
import { TablesService } from "./tables.js"

export const OrdersService = {
    read: async (id) => (await getOneOrders({ where: { orderId: id } })) || null,
    readAll: async () => (await getAllOrders()) || [],
    create: async (currency, tableId = 0, menuItems) =>
        await createOrders({
            tableId,
            currency,
            menuItems: typeof data === "string" ? data : JSON.stringify(data)
        }).then(async (order) => {
            if (tableId != 0) { TablesService.update(tableId, { isFree: false }); }

            orderId = order.data[0].orderId;
            await OrderItemsService.saveOrderItems(order.data[0].orderId, menuItems);//.then(async (amount)=>{
            // await updateOrders({ where: { orderId: orderId } }, {price: amount})

        }),
    update: async (id, fieldsToUpdate) =>
        await updateOrders({ where: { orderId: id } }, fieldsToUpdate),

    delete: async (id) => await deleteOrders({ where: { id } }),
}






