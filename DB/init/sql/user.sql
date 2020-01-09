CREATE TABLE IF NOT EXISTS `user` {
  `id` INT(11) NOT NULL Auto_increment,
  `email` VARCHAR(255) DEFAULT NULL,
  `password` VARCHAR(255) DEFAULT NULL,
  `name` VARCHAR(255) DEFAULT NULL,
  `nick` VARCHAR(255) DEFAULT NULL,
  `detail_info` VARCHAR(255) DEFAULT NULL,
  `create_time` VARCHAR(255) DEFAULT NULL,
  `modified_time` VARCHAR(255) DEFAULT NULL,
  `level` VARCHAR(255) DEFAULT NULL,
	PRIMARY KEY (`id`)
} ENGINE=INNODB DEFAULT CHARSET=utf8;

INSERT INTO `user` SET email='1@examle.com',password='123456';
INSERT INTO `user` SET email='2@examle.com',password='123456';
INSERT INTO `user` SET email='3@examle.com',password='123456';