import { callApi } from "../helpers.js";

const PATH = `api/public/orders`;

test(`[GET] ${PATH} - valid request - should return status 200`, async () => {
    const response = await callApi("get", "/orders", {}, {}, true);
    expect(response.status).toEqual(200);
    expect(typeof response).toEqual('object');
});

