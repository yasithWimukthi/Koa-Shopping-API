import Koa from 'Koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import registerRouter from "./router/register.router.js";
import itemRouter from "./router/item.route.js";
import cartRouter from "./router/cart.routes.js";
import wishListRouter from "./router/wishList.routes.js";
import paymentRouter from "./router/payment.router.js";

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(registerRouter.routes())
    .use(registerRouter.allowedMethods())
app.use(itemRouter.routes())
    .use(itemRouter.allowedMethods())
app.use(cartRouter.routes())
    .use(cartRouter.allowedMethods());
app.use(wishListRouter.routes())
    .use(wishListRouter.allowedMethods());
app.use(paymentRouter.routes())
    .use(paymentRouter.allowedMethods());

app.use(async ctx => {
    ctx.body = '404 Not Found';
});

app.listen(3000);