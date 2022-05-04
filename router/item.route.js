import Router from "@koa/router";
import {addPromotion, getShopItems, save, updateShopItem} from "../api/item.api.js";

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

itemRouter.put('/edit/:id', async (ctx, next) => {
        const id = ctx.params.id;
        const data = ctx.request.body;
        const item = updateShopItem(id,data);
        ctx.body = getShopItems();
        ctx.set('Content-Type', 'application/json');
        ctx.status = 201;})

itemRouter.post('/add/promotion/:id', async (ctx, next) => {
        const id = ctx.params.id;
        const data = ctx.request.body;
        const item = addPromotion(id,data);
        ctx.body = getShopItems();
        ctx.set('Content-Type', 'application/json');
        ctx.status = 201;})

export default itemRouter;