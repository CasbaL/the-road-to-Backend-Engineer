const mysqlx = require('@mysql/xdevapi')

const docs = []

mysqlx.getSession({
  user: 'node',
  password: 'node123'
}).then(session => {
  console.log(session.inspect())
})