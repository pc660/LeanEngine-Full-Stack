/**
 * 每位工程师都有保持代码优雅的义务
 * Each engineer has a duty to keep the code elegant
 *
 * @author wangxiao
 */

// 一些工具方法

'use strict';

let pub = {};

pub.l = (msg) => {
  console.log('\n\n', msg, '\n\n');
};

pub.fail = (res, err) => {
  res.status(err.status).send({
    err: err.status,
    msg: err.msg
  });
};

/**
* Sanitize a string with format ? type: value ?
* @param a string with format: ? type: value ?
* @return value.
* */
pub.sanitize = (string) => {
  if (string === undefined) {
    return "";
  }
  var index = string.indexOf(":");
  if (index < 0) {
    return "";
  }

  var substr = string.substring(index);
  var lastIndex = substr.length - 1;
  if (substr[lastIndex] != "?") {
    return "";
  }
  return substr.substring(1, lastIndex).trim();
};

module.exports = pub;
