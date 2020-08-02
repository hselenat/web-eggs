/*
 * @name: 组件名
 * @Description: 组件描述
 * @module: 组件存放位置
 * @Version: 0.1.0
 * @Autor: hselenat
 * @Date: 2020-08-01 11:35:34
 * @LastEditors: hselenat
 * @LastEditTime: 2020-08-02 17:21:12
 * @example: 调用示例
 */
'use strict'

// /** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// }

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
}

exports.routerGroup = {
  enable: true,
  package: 'egg-router-group',
}

exports.validate = {
  enable: true,
  package: 'egg-validate',
}
