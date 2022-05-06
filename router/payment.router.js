import Router from "@koa/router";
import {save} from "../api/payment.api.js";

const paymentRouter = new Router({
    prefix: "/payment",
})

paymentRouter.post('/', async (ctx, next) => {
    const data = ctx.request.body;
    const item = save(data);
    ctx.body = item;
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;})

export default paymentRouter;