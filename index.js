const Koa = require('koa');
const dbcfg = require('./config/mysql');
const router = require('./router');

const app = new Koa();

// 引用mysql
const db = require('mysql').createPool(dbcfg);
app.use((ctx, next) => {
  ctx.db = db;
  next();
});

app.use(router.routes());

app.listen(9999, '127.0.0.1', 10, () =>
  console.log('server start, open: http://127.0.0.1:9999')
);
