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
    read: async (id) => (await getOneOrders({ where: { orderId: id }, raw: true })) || null,
    readAll: async () => (await getAllOrders()) || [],
    readWhere: async (options) => (await getOrders(options)) || [],
    create: async (tableId = 0, currency = "pln", menuItems) => {
        console.log(tableId, currency, menuItems);
        await createOrders({
            tableId,
            currency,
            menuItems
        }).then(async (order) => {
            console.log("step 1");
            if (tableId != 0) { await TablesService.update(tableId, { isFree: false }); }

            const orderId = order.get("orderId");
            console.log("TO JEST ORDERID: " + orderId)
            await OrderItemsService.createAll(orderId, menuItems).then(async (amount) => {
                await updateOrders({ where: { orderId: orderId } }, { totalPrice: amount })
            });

        })
    },
    update: async (id, fieldsToUpdate) =>
        await updateOrders({ where: { orderId: id } }, fieldsToUpdate),

    delete: async (id) => await deleteOrders({ where: { id } }),
}






