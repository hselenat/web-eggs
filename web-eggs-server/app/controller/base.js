/*
 * @name: 组件名
 * @Description: 定制规范
 * @module: 组件存放位置
 * @Version: 0.1.0
 * @Autor: hselenat
 * @Date: 2020-08-02 16:59:54
 * @LastEditors: hselenat
 * @LastEditTime: 2020-08-02 17:14:25
 * @example: 调用示例
 */
'use strict'

const { Controller } = require('egg')
class BaseController extends Controller {
  success(data) {
    this.ctx.body = {
      code: 0,
      data,
    }
  }
  message(message) {
    this.ctx.body = {
      code: 0,
      message,
    }
  }
  error(message, code = -1, errors = {}) {
    this.ctx.body = {
      code,
      message,
      errors,
    }
  }
}

module.export = BaseController
