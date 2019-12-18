const Koa = require('koa');

const router = require('./router');

const app = new Koa();

app.use(router.routes());

app.listen(9999, '127.0.0.1', 10, () =>
  console.log('server start, open: http://127.0.0.1:9999')
);
