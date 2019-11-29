/**
 * @param {string} userName 用户名4-6位字母或数字
 * @returns {Boolean}
 */
export function validUserName(name) {
  const reg = /^[0-9a-zA-Z]{4,16}$/
  return reg.test(name)
}
/**
 * @param {string} pwd 密码6-16位数字或字母组合
 * @returns {Boolean}
 */
export function validPassword(pwd) {
  const reg = /^[0-9a-zA-Z]{6,16}$/
  return reg.test(pwd)
}
/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}
