const Router = require('koa-router');
const bodyParser = require('./bodyParser');
const { query } = require('./DB/query')

const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = ctx.querystring;
});

router.get('/app', async ctx => {
  const sql = 'SELECT * FROM user;';
  const res = await query(sql)
  console.log(res)
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

router.get('/create', async ctx => {
  const sql = `INSERT INTO koa_demo_db.user SET name="${ctx.query.name}",age=${ctx.query.age};`;
  // const db_res = await ctx.db.query(sql);
  // console.log('-----------');
  // console.log(db_res.error, db_res.results, db_res.fields);
  // console.log('-----------');
  ctx.db.query(sql, function(error, results, fields) {
    console.log(error, results, fields)
  })
  ctx.body = ctx.query;
});

module.exports = router;
