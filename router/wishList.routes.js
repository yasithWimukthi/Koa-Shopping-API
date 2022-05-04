import Router from "@koa/router";
import {getWishList, save} from "../api/wishList.api.js";

const wishListRouter = new Router({
    prefix: "/wishlist",
})

wishListRouter.post('/', async (ctx, next) => {
    const data = ctx.request.body;
    const item = save(data);
    ctx.body = item;
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;})

wishListRouter.get('/get-all', async (ctx, next) => {
    const items = getWishList();
    ctx.body = items;
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;})

export default wishListRouter;
