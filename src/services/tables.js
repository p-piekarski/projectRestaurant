import {
  getAllTables,
  getOneTables,
  deleteTables,
  createTables,
  uptadeTables,
} from "../models/tables.js";

export const TablesService = {
  read: async (id) => (await getOneTables({ where: { id } })) || null,
  readAll: async () => (await getAllTables()) || [],
  create: async (id, name, data) =>
      await createTables({
          id,
          name,
          data: typeof data === "string" ? data : JSON.stringify(data),
      }),
  update: async (id, fieldsToUpdate) =>
      await uptadeTables({ where: { id } }, fieldsToUpdate),
  delete: async (id) => await deleteTables({ where: { id } }),
};



