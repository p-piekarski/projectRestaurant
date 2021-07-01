import { getStatus } from "./status.js";

import {
    postMenuItems,
    getAllMenuItems,
    getOneMenuItems
}from "./menuitems.js";

export default [
    {
        method: "GET",
        path: "/status",
        isPublic: true,
        cbs: [getStatus],
    },
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
    }

];