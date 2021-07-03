import { OrderItemsService } from "./orderitems.js"
import { OrdersService } from "./orders.js"
import { CurrencyService } from "../services/currency.js";
import { MenuItemsService } from "./menuitems.js";


export const ReportsService = {
    generate: async (orderId) => {
        const order = await OrdersService.read(orderId);
        const currency = order.currency;
        let currencyRate = 1;
        if (currency === "eur" || currency === "usd") {
            currencyRate = await CurrencyService.read(order.currency);
        }

        const orderItems = await OrderItemsService.readWhere({ where: { orderId: orderId }, raw: true });
        const menuItems = []
        for (const item of orderItems) {
            const menuItem = await MenuItemsService.read(item.itemId);
            const price = Math.round(menuItem.price / currencyRate,4);
            menuItems.push({ name: menuItem.name, price: price/100 });

        }

        console.log(order);
        console.log(orderItems);
        console.log(menuItems);
        let tableId = order.tableId;
        if (tableId === 0)
            tableId = "Take-out";

        const orderReport = {
            createdAt: order.createdAt,
            status: order.status,
            orderId: order.orderId,
            tableId: tableId,
            dishes: menuItems,
            currency: currency,
            totalPrice: order.totalPrice/100
        }
        return orderReport;

    },

    generateDates: async (startDate, endDate) => {

        startDate = startDate.split('-');
        const dateStart = new Date(2020, 1, 1, 0, 0, 0, 0);
        console.log(dateStart);

        endDate = endDate.split('-');
        const dateEnd = new Date(endDate[0], endDate[1], endDate[2], 0, 0, 0, 0);
        console.log(dateEnd);

        if (startDate < endDate) {
            console.log("essa")
            const where = { where: { createdAt: { between: [dateStart, dateEnd] } }, raw: true};
            console.log(where);
            const orders = await OrdersService.readWhere(where);
            console.log(orders);

        }
        else
            throw "invalid date range!";


    },
}


