import { callApi } from "../helpers.js";

const PATH = `api/public/menuitems`;

test(`[GET] ${PATH} - valid request - should return status 200`, async () => {
    const response = await callApi("get", "/menuitems", {}, {}, true);
    expect(response.status).toEqual(200);
    expect(typeof response).toEqual('object');
});
test(`[GET] ${PATH} - valid request - should return status 200`, async () => {
    const response = await callApi("put", "/menuitems/patch/5", {"price": 2400}, {}, true);
    expect(response.status).toEqual(200);
    expect(typeof response).toEqual('object');
});
//test(`[GET] ${PATH} - valid request - should return status 201`, async () => {
//    const response = await callApi("post", "/menuitems/add", {"name": "Sok jabłkowy", "price": 800}, {}, true);
//    expect(response.status).toEqual(201);
//});
//