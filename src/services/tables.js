import {
  getAllTables,
  deleteTables,
  createTables,
  updateTables,
  getTables
} from "../models/tables.js";

export const TablesService = {
  readOne: async (id) => (await getTables({ where: {  tableId: id }, raw: true})) || [],
  readFirstFree: async (id) => (await getTables({ where: {  isFree: true } , limit: 1, raw: true})) || null,
  readAll: async () => (await getAllTables()) || [],
  readAllFree: async () => (await getTables({ where: {  isFree: true }, raw: true})) || [],
  create: async (isFree) =>
      await createTables({
          isFree
      }),
  update: async (id, fieldsToUpdate) =>
      await updateTables({ where: { tableId: id } }, fieldsToUpdate),

  delete: async (id) => await deleteTables({ where: { tableId: id } }),
};



