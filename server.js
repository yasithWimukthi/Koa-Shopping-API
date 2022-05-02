import Koa from 'Koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import registerRouter from "./router/register.router.js";
import itemRouter from "./router/item.route.js";

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(registerRouter.routes())
    .use(registerRouter.allowedMethods())
    .use(itemRouter.routes())
    .use(itemRouter.allowedMethods());

app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(3000);