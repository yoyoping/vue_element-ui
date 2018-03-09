/* 合法uri */
export function validateURL (textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母 */
export function validateLowerCase (str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母 */
export function validateUpperCase (str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母 */
export function validatAlphabets (str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/* 已字母开头 数字、26个英文字母或者下划线 */
export function validatAlphabetsNumUnderline (str) {
  // const reg = /^[A-Za-z][A-Za-z0-9\_]*$/
  // return reg.test(str)
}

/* 数字、26个英文字母 */
export function validatAlphabetsNumOthers (str) {
  const reg = /^[A-Za-z0-9]+$/
  return reg.test(str)
}

/* 非空字符集 */
export function noeEmpty (str) {
  const reg = /^\S+$/
  return reg.test(str)
}
/* 数字、26个英文字母、中文 */
export function validatAlphabetsNumZh (str) {
  const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/
  return reg.test(str)
}
/* 手机号码验证 */
export function phoneNumber (str) {
  const reg = /^[1][2-9][0-9]{9}$/
  return reg.test(str)
}
// 验证姓名
export function name_ (params) {
  const reg = /^[\u4e00-\u9fa5]{2,4}$/
  return reg.test(params)
}

// 去出空格
export const noNull = (rule, value, callback) => {
  if (!value.trim()) {
    return callback(new Error('不能输入空格'))
  } else {
    callback()
  }
}

// 身份证验证
export function idNum_ (param) {
  const reg = /^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/
  return reg.test(param)
}

// 不能为负数，必须大于0,小数点两位
export function IsNum (num) {
  const reg = /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/
  return reg.test(num)
}

// 正整数
export function IsNumber (num) {
  const reg = /^[1-9][0-9]{0,}$/
  return reg.test(num)
}

// 生成随机数
export function guid () {
  function S4 () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
}
