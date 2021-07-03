import { OrdersService } from "../services/orders.js";
import { TablesService } from "../services/tables.js";
import { CurrencyService } from "../services/currency.js";
import { ReportsService } from "../services/reports.js";


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

export const patchOrdersCurrency = async (req, res) => {
    const { body } = req;
    const { orderId, currency } = body || {};
    const fieldsToUpdate = {};
    try {
        if (currency !== undefined || currency === "usd" || currency === "eur") {
            fieldsToUpdate.currency = currency;
            console.log("test1");

            await OrdersService.read(orderId).then(async (order) => {
                console.log("test2");
                console.log(order);
                const rate = await CurrencyService.read(currency);
                console.log("test3");
                const totalPrice = Math.round(order.totalPrice / rate,4);
                fieldsToUpdate.totalPrice = totalPrice;
                console.log(totalPrice);
                await OrdersService.update(orderId, fieldsToUpdate);
            })

            res.status(200);

        }
        else
            throw "Nieobsługiwana waluta / walute można zmienić tylko raz";
    } catch (err) {
        res.status(500).send(err);
    }

    return res.send();
};


export const deleteOrders = async (req, res) => {
    const { params } = req;
    const { id } = params || {};
    await OrdersService.delete(id);
    return res.send();
};

// Generate reports
export const generateReport = async (req, res) => {
    const { params } = req;
    if (!params?.id) return res.json({ data: [] });
    return res.json(await ReportsService.generate(params.id));
};

export const generateReportDates = async (req, res) => {
    const { body } = req;
    const { startDate, endDate } = body || {};
    console.log(startDate);
    try {
        
        res.status(200); 
        return res.json(await ReportsService.generateDates(startDate, endDate)); 
        
    } catch (err) {
        res.status(500).send(err);
     }

};