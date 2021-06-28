import {
    getAllOrders,
    getOneOrders,
    deleteOrders,
    createOrders,
    uptadeOrders,
} from "../models/orders.js";

export const OrdersService = {
    read: async (id) => (await getOneOrders({ where: { id } })) || null,
    readAll: async () => (await getAllOrders()) || [],
    create: async (id, name, data) =>
        await createOrders({
            id,
            name,
            data: typeof data === "string" ? data : JSON.stringify(data),
        }),
    update: async (id, fieldsToUpdate) =>
        await uptadeOrders({ where: { id } }, fieldsToUpdate),
    delete: async (id) => await deleteOrders({ where: { id } }),
};



