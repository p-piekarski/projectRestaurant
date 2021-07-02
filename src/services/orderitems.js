import {
  getAllOrderItems,
  getOneOrderItems,
  deleteOrderItems,
  createOrderItems,
  updateOrderItems,
} from "../models/orderitems.js";
import { MenuItemsService } from "./menuitems.js";

export const OrderItemsService = {
  read: async (id) => (await getOneOrderItems({ where: { id } })) || null,
  readAll: async () => (await getAllOrderItems()) || [],
  createAll: async (orderId, menuItems) => {
    let amount = 0;
    console.log("to jest  orderitems.createALL")
    console.log(menuItems);
    for (const item of menuItems) {
      console.log(item);
      const menuItemId = item.itemId;
      await MenuItemsService.read(menuItemId).then(async (menuItem) => {
        amount+= menuItem.price;
        console.log(menuItem.price);
        await createOrderItems({ orderId: orderId, itemId: menuItemId, price: menuItem.price });
      })


    };
    console.log("wynik"+amount);
    return amount;

  },
  update: async (id, fieldsToUpdate) =>
    await updadeOrderItems({ where: { id } }, fieldsToUpdate),
  delete: async (id) => await deleteOrderItems({ where: { id } }),
};



