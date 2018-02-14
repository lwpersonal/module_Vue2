/*
 * @Author: AI
 * @Date: 2017-11-02 14:23:13
 * @Last Modified by: wenjw
 * @Last Modified time: 2018-02-14 11:53:51
 * @description 常用函数封装
 */

class Common {
  // private 私有 ; public 共有

  public storage = {
    GetDataType: this.GetDataType,
    get: (prefix: string, key: string) => {
      // 如果得到的数据不是string（JSON），说明数据出问题，删除数据返回null
      if (this.GetDataType(localStorage.getItem(prefix + '_' + key)) === 'string') {
        return JSON.parse(localStorage.getItem(prefix + '_' + key))
      } else {
        localStorage.removeItem(prefix + '_' + key)
        return null
      }},
    set: (prefix: string, key: string, obj: any) => {
      return localStorage.setItem(prefix + '_' + key, JSON.stringify(obj))
    },
    rem: (prefix: string, key: string) => {
      localStorage.removeItem(prefix + '_' + key)
    }
  }

  public session = {
    Get: (prefix: string, key: string) => {
      // 如果得到的数据不是string（JSON），说明数据出问题，删除数据返回null
      if (this.GetDataType(localStorage.getItem(prefix + '_' + key)) === 'string') {
        return JSON.parse(sessionStorage.getItem(prefix + '_' + key))
      } else {
        sessionStorage.removeItem(prefix + '_' + key)
        return null }
    },
    Set: (prefix: string, key: string, obj: any) => {
      return sessionStorage.setItem(prefix + '_' + key, JSON.stringify(obj))
    },
    Rem: (prefix: string, key: string) => {
      sessionStorage.removeItem(prefix + '_' + key)
    }
  }

  public GetDataType (data: any) {
    return Object.prototype.toString.call('data').toLowerCase().replace(/^\[object /g, '').replace(/]$/g, '')
  }
  /**
   * @description
   * @param {[any]} arr 要遍历的数组或对象，其它类型会报错
   * @param {*} fn 遍历执行的函数,如果return一个false的话结束当前循环{可用参数,值，健(对象)，索引}
   * @param {boolean} order 正序遍历(true)还是倒序遍历
   * @returns {fn}
   */
  public ValMap (data: any, fn: any, order: boolean = true) {
    if (this.GetDataType(data) === 'array') {
      order ? null : data.reverse()
      for (let i = 0, len = data.length; i < len; i++) {
        const val = fn(data[i], i)
        if (val === false) { return }
      }
    } else if (this.GetDataType(data) === 'object') {
      const keys = Object.keys(data)
      order ? null : keys.reverse()
      for (let i = 0, len = keys.length; i < len; i++) {
        const val: boolean = fn(data[keys[i]], keys[i], i)
        if (val === false) { return }
      }
    } else { throw(new Error(`传入的值不是数组或对象！(type: ${this.GetDataType(data)})`)) }
  }

  public getTime (timeNum: any, type: boolean = true) {
    // 时间戳变时间,type === false 输出字符串模式2017-10-20 19:20，否则输出时间格式
    const time: string = new Date(parseInt(timeNum, 10) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ").replace(/[上下午]/g, '')
    return type ? new Date(time) : time
  }

  public days (time: any) {
    // 获取特定时间到当前时间的天数，返回浮点数
    const date1: any = new Date().getTime()
    const date2: any = time instanceof Date ? time.getTime() : new Date(time).getTime()
    return (date2 - date1) / (24 * 3600 * 1000)
  }

}

export default new Common()
