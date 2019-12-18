const Router = require('koa-router');

const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = ctx.querystring;
});

router.get('/app', ctx => {
  ctx.body = 'get app';
});
router.get('/json', ctx => {
  ctx.response.body = ctx.query;
});

module.exports = router;
