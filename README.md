# the-road-to-Backend-Engineer

to be backender

### fealture

    链接数据库
    user 增删改查

## log

### 2019-12-03

mysql 官网逛该  
逛着逛着又去装了 Navicat, [富强.民主.和谐.法治](https://github.com/DoubleLabyrinth/navicat-keygen/tree/mac)

### 2019-12-04

学习 sql 语法:  
SELECT \* FROM table*name WHERE `name` LIKE "*\_\_"; # '\_' 表示单个任意字符  
SELECT \* FROM table_name WHERE `name` LIKE "%a\_\_"; # '%' 表示任意个字符包括 0  
SELECT \* FROM table_name WHERE REGEXP_LIKE(`name`, "^a.{3}"); # 正则匹配

SELECT _, COUNT(_) FROM table_name WHERE REGEXP_LIKE(`name`, "^a.{3}") GROUP BY name; # 行 统计/分组
SET sql_mode = 'ONLY_FULL_GROUP_BY'; # 设置显式分组必须  列 group by 的值,否则报错; 置空 '' 则默认全部分为一组
