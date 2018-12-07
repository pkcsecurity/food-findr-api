const Koa = require('koa');
const utils = require('./utils.js');
const app = new Koa();
const port = 3000;

app.use( async (ctx, next) => {
    const requestTime = Date.now();
    const uuid = utils.generateShortId();
    console.log(`${new Date(requestTime).toDateString()} ${requestTime} : [${uuid}] -> ${ctx.method} ${ctx.url}`);

    await next();

    const responseTime = ctx.response.get('X-Response-Time');
    console.log(`                                [${uuid}] - Finished in ${responseTime}`);
});

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async ctx => {
    ctx.body = "hello world";
});

app.listen(port);
