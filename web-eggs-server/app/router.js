/*
 * @name: 组件名
 * @Description: 组件描述
 * @module: 组件存放位置
 * @Version: 0.1.0
 * @Autor: hselenat
 * @Date: 2020-08-01 11:35:34
 * @LastEditors: hselenat
 * @LastEditTime: 2020-08-01 17:04:43
 * @example: 调用示例
 */
'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)

  // 验证码
  router.get('/captcha', controller.util.captcha)
}
