import {
  getAllOrderItems,
  getOneOrderItems,
  deleteOrderItems,
  createOrderItems,
  updateOrderItems,
} from "../models/orderitems.js";

export const OrderItemsService = {
  read: async (id) => (await getOneOrderItems({ where: { id } })) || null,
  readAll: async () => (await getAllOrderItems()) || [],
  create: async (id, name, data) =>
      await createOrderItems({
          id,
          name,
          data: typeof data === "string" ? data : JSON.stringify(data),
      }),
  update: async (id, fieldsToUpdate) =>
      await updadeOrderItems({ where: { id } }, fieldsToUpdate),
  delete: async (id) => await deleteOrderItems({ where: { id } }),
};



