import { callApi } from "../helpers.js";

const PATH = `api/public/tables`;

test(`[GET] ${PATH} - valid request - should return status 200`, async () => {
    const response = await callApi("get", "/tables", {}, {}, true);
    expect(response.status).toEqual(200);
    expect(typeof response).toEqual('object');
});
test(`[GET] ${PATH} - valid request - should return status 200`, async () => {
    const response = await callApi("get", "/tables/free/first", {}, {}, true);
    expect(response.status).toEqual(200);
    expect(typeof response).toEqual('object');
});
