import Router from "@koa/router";
import {save} from "../api/register.api.js";

const registerRouter = new Router({
    prefix: "/register",
});

registerRouter.post('/', async (ctx, next) => {
    const data = ctx.request.body;
    const user = save(data);
    ctx.body = user;
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;
})

export default registerRouter;