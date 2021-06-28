import {
    getAllMenuItems,
    getOneMenuItems,
    deleteMenuItems,
    createMenuItems,
    uptadeMenuItems,
} from "../models/menuitems.js";

export const MenuItemsService = {
    read: async (id) => (await getOneMenuItems({ where: { id } })) || null,
    readAll: async () => (await getAllMenuItems()) || [],
    create: async (id, name, data) =>
        await createMenuItems({
            id,
            name,
            data: typeof data === "string" ? data : JSON.stringify(data),
        }),
    update: async (id, fieldsToUpdate) =>
        await uptadeMenuItems({ where: { id } }, fieldsToUpdate),
    delete: async (id) => await deleteMenuItems({ where: { id } }),
};



