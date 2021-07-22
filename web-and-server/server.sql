-- DROP TABLE if EXISTS  `testserver4`;
-- CREATE DATABASE `testserver4`;
use `testserver4`;
SET NAMES utf8;
CREATE TABLE if not exists `user_table`(
  `username` VARCHAR(20),
  `pwd` VARCHAR(20),
);
CREATE TABLE if not exists `test_img_upload`(
  `avatar` longblob
)


