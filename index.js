const Koa = require('koa');

const app = new Koa();

function listenFn(...params) {
  console.log(params);
}

app.use(ctx => {
  ctx.body = 'adss';
});

app.listen(9999, '127.0.0.1', 10, listenFn);
