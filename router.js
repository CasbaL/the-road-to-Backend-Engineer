const Router = require('koa-router');
const bodyParser = require('./bodyParser');

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

router.post('/login', async ctx => {
  const reqBody = await bodyParser(ctx);
  console.log('=====================');
  console.log(JSON.parse(reqBody).user);
  console.log(
    ctx.is(
      'json',
      'urlencoded',
      'application/json',
      'application/x-www-form-urlencoded'
    )
  );
  console.log(ctx.req.headers['content-type']);
  console.log('=====================');
  ctx.response.status = 200;
  ctx.response.message = 'ok';
  ctx.response.body = JSON.parse(reqBody);
  // let reqBody = '';
  // ctx.req.addListener('data', d => {
  //   reqBody += d;
  //   console.log(d);
  // });
  // console.log('========== zzz ===========');
  // ctx.req.addListener('end', _ => {
  //   console.log('json start', reqBody, 'end');
  // });
});

module.exports = router;
