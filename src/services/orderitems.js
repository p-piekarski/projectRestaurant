import {
  getAllOrderItems,
  getOneOrderItems,
  deleteOrderItems,
  createOrderItems,
  uptadeOrderItems,
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
      await uptadeOrderItems({ where: { id } }, fieldsToUpdate),
  delete: async (id) => await deleteOrderItems({ where: { id } }),
};



