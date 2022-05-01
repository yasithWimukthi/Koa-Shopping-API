import Koa from 'Koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import registerRouter from "./router/register.router.js";

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(registerRouter.routes())
    .use(registerRouter.allowedMethods());

app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(3000);