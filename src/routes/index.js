import { getStatus } from "./status.js";

import {
    getDishes,
    getDishesId,
    getTables,
    getCurrencies,
    getOrders,
    getOrderId,
    getCompletion_time,
    getReports,
    postOrder,
    patchOrders,
    patchOrderId,
    patchStatus_change
}from "./example.js";

export default [
    {
        method: "GET",
        path: "/status",
        isPublic: true,
        cbs: [getStatus],
    },
    {
        method: "GET",
        path: "/example/all",
        cbs: [getDishes],
    },
    {
        method: "GET",
        path: "/example/:id",
        cbs: [getDishesId],
    },
    {
        method: "GET",
        path: "/example/:id",
        cbs: [getTables],
    },
    {
        method: "GET",
        path: "/example/:id",
        cbs: [getCurrencies],
    },
    {
        method: "GET",
        path: "/example/:id",
        cbs: [getOrders],
    },
    {
        method: "GET",
        path: "/example/:id",
        cbs: [getCompletion_time],
    },
    {
        method: "GET",
        path: "/example/:id",
        cbs: [getReports],
    },
    {
        method: "GET",
        path: "/example/:id",
        cbs: [getOrderId],
    },
    {
        method: "POST",
        path: "/example",
        cbs: [postOrder],
    },
    {
        method: "PATCH",
        path: "/example",
        cbs: [patchOrders],
    },
    {
        method: "PATCH",
        path: "/example",
        cbs: [patchOrderId],
    },
    {
        method: "PATCH",
        path: "/example",
        cbs: [patchStatus_change],
    },
];