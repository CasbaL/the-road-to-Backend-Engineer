const path = require('path');
const fs = require('fs');

function getSqls() {
  const sql_dir = path.join(__dirname, './sql');
  const sql_files = fs.readdirSync(sql_dir);
  let sql_content = '';
  sql_files.forEach(name => {
    const sql_file_path = path.join(sql_dir, name);
    const _content = fs.readFileSync(sql_file_path);
    sql_content += _content;
  });
  return sql_content;
}

async function createAllTables(sql_content) {}

const sql_content = getSqls();
