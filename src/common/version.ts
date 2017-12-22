/*
 * @Author: AI
 * @Date: 2017-11-17 10:37:52
 * @Last Modified by: AI
 * @Last Modified time: 2017-11-17 11:10:38
 * @description 判断浏览器信息
 */
const getMobileInfo: any = () => {
  const u: string = navigator.userAgent
  const app: string = navigator.appVersion
  const result: any = {
    mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
    iPhone: u.indexOf('iPhone') > -1 , // 是否为iPhone或者QQHD浏览器
    UC: u.indexOf('UCBrowser') > -1,
    Android_version: /Android [0-9,.]+/gi.exec(u) ? /android [0-9,.]+/gi.exec(u)[0].replace(/[^0-9,.]/g, '') : 0, // 安卓版本
    iPhone_version: u.match(/cpu iphone os (.*?) like mac os/gi) ? u.toLowerCase().match(/cpu iphone os (.*?) like mac os/)[1].replace(/_/g, '.') : 0, // ios版本
    info: {
      userAgent: u, // 浏览器标识
      system: navigator.platform,
      language: (navigator.language).toLowerCase(), // 检测浏览器语言
      trident: u.indexOf('Trident') > -1, // IE内核
      presto: u.indexOf('Presto') > -1, // opera内核
      webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
      iPad: u.indexOf('iPad') > -1, // 是否iPad
      webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
    } // 其他信息
  }
  return result
}

const res = getMobileInfo()
export default res
