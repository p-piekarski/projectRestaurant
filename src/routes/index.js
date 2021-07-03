import { getStatus } from "./status.js";
import { authenticate } from "../middlewares/basicAuth.js";

import { getRate } from "./currency.js";

import {
    postMenuItems,
    getAllMenuItems,
    getOneMenuItems,
    deleteMenuItems,
    patchMenuItems
} from "./menuitems.js";

import {
    getFirstFreeTables,
    getAllTables,
    getAllFreeTables,
    postTables,
    patchTables
} from "./tables.js";

import {
    getOneOrders,
    getAllOrders,
    postOrders,
    patchOrdersStatus,
    patchOrdersCurrency,
} from "./orders.js";

export default [
    {
        method: "GET",
        path: "/status",
        isPublic: true,
        cbs: [getStatus],
    },
    {
        method: "GET",
        path: "/status",
        isPublic: false,
        cbs: [authenticate, getStatus],
    },
    //menuitems routes
    {
        method: "POST",
        path: "/menuitems/add",
        isPublic: true,
        cbs: [postMenuItems],
    },
    {
        method: "GET",
        path: "/menuitems",
        isPublic: true,
        cbs: [getAllMenuItems],
    }
    ,
    {
        method: "GET",
        path: "/menuitems/:id",
        isPublic: true,
        cbs: [getOneMenuItems],
    },
    {
        method: "POST",
        path: "/menuitems/delete/:id",
        isPublic: true,
        cbs: [deleteMenuItems],
    },
    {
        method: "PUT",
        path: "/menuitems/patch/:id",
        isPublic: true,
        cbs: [patchMenuItems],
    },
    //tables routes
    {
        method: "POST",
        path: "/tables/add",
        isPublic: true,
        cbs: [postTables],
    },
    {
        method: "GET",
        path: "/tables",
        isPublic: true,
        cbs: [getAllTables],
    },
    {
        method: "GET",
        path: "/tables/free",
        isPublic: true,
        cbs: [getAllFreeTables],
    },
    {
        method: "GET",
        path: "/tables/free/first",
        isPublic: true,
        cbs: [getFirstFreeTables],
    },
    {
        method: "PUT",
        path: "/tables/patch/:id",
        isPublic: true,
        cbs: [patchTables],
    },
    //orders routes
    {
        method: "GET",
        path: "/orders/:id",
        isPublic: true,
        cbs: [getOneOrders],
    },
    {
        method: "GET",
        path: "/orders",
        isPublic: true,
        cbs: [getAllOrders],
    },
    {
        method: "POST",
        path: "/orders/place",
        isPublic: true,
        cbs: [postOrders],
    },
    {
        method: "PUT",
        path: "/orders/status-change",
        isPublic: false,
        cbs: [authenticate, patchOrdersStatus,],
    },
    {
        method: "PUT",
        path: "/orders/currency-change",
        isPublic: false,
        cbs: [authenticate, patchOrdersCurrency,],
    },


    //currency routes
    {
        method: "GET",
        path: "/currency/:id",
        isPublic: true,
        cbs: [getRate],
    },

];