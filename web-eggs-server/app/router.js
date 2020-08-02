/*
 * @name: 组件名
 * @Description: 组件描述
 * @module: 组件存放位置
 * @Version: 0.1.0
 * @Autor: hselenat
 * @Date: 2020-08-01 11:35:34
 * @LastEditors: hselenat
 * @LastEditTime: 2020-08-02 17:25:29
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

  router.group({
    name: 'user',
    prefix: '/user',
  }, router => {
    const {
      info,
      register,
      login,
      vertify,
    } = controller.user
    router.post('/info', info)
    router.post('/register', register)
    router.post('/login', login)
    router.post('/vertify', vertify)
  })
}
