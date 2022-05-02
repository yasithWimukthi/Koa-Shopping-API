import Router from "@koa/router";
import {getShopItems, save} from "../api/item.api.js";

const itemRouter = new Router({
    prefix: "/items",
})

itemRouter.post('/', async (ctx, next) => {
        const data = ctx.request.body;
        const item = save(data);
        ctx.body = item;
        ctx.set('Content-Type', 'application/json');
        ctx.status = 201;})

itemRouter.get('/get-all', async (ctx, next) => {
        const items = getShopItems();
        ctx.body = items;
        ctx.set('Content-Type', 'application/json');
        ctx.status = 200;})

export default itemRouter;