import Koa from 'Koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import registerRouter from "./router/register.router.js";
import itemRouter from "./router/item.route.js";
import cartRouter from "./router/cart.routes.js";

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(registerRouter.routes())
    .use(registerRouter.allowedMethods())
app.use(itemRouter.routes())
    .use(itemRouter.allowedMethods())
app.use(cartRouter.routes())
    .use(cartRouter.allowedMethods());

app.use(async ctx => {
    ctx.body = '404 Not Found';
});

app.listen(3000);