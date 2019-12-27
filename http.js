module.exports = {
  /**
   *
   * @param {地址} url
   * @param {数据} data
   * @param {请求方式} methods
   * @param {请求成功回调函数} success
   * @param {请求失败回调函数} fail
   * @param {请求结束回调函数} complete
   */
  http (url, data, methods, success, fail, complete) {
    const baseURL = require('./siteinfo')
    wx.showNavigationBarLoading()
    wx.request ({
      url: baseURL.siteroot + url,
      data,
      methods: methods === 'post' ? 'post' : 'get',
      headers: {
        'content-type': 'application/json'
      },
      success (res) {
        success && success (res)
        console.log(res)
      },
      fail (err) {
        fail && fail (err)
      },
      complete (res) {
        wx.hideNavigationBarLoading()
        complete && complete (res)
      }
    })
  }
}