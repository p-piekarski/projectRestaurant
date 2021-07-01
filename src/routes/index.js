import { getStatus } from "./status.js";

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

export default [
    {
        method: "GET",
        path: "/status",
        isPublic: true,
        cbs: [getStatus],
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

];