const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '123456',
    database : 'koa_demo_db'
  }
});
knex('user').select("*").map((row) => {
  console.log(row)
})