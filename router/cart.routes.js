import Router from "@koa/router";
import {getCartItems, save} from "../api/cart.api.js";
import itemRouter from "./item.route.js";


const cartRouter = new Router({
    prefix: "/cart",
})

cartRouter.post('/', async (ctx, next) => {
    const data = ctx.request.body;
    const item = save(data);
    ctx.body = item;
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;})

itemRouter.get('/get-all', async (ctx, next) => {
    const items = getCartItems();
    ctx.body = items;
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;})

export default cartRouter;