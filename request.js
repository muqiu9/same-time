/**
 * 
 * @param {参数} params 
 */
function request (params) {
  let promise = new Promise ((resolve, reject) => {
    const baseURL = require('./siteinfo')
    wx.showNavigationBarLoading()
    wx.request ({
      url: baseURL.site_root + params.url,
      data: params.data,
      methods: params.methods === 'post' ? 'post' : 'get',
      headers: {
        'content-type': 'application/json'
      },
      success (res) {
        // success && success (res)
        // console.log(res)
        resolve (res)
      },
      fail (err) {
        // fail && fail (err)
        reject (err)
      },
      complete (res) {
        wx.hideNavigationBarLoading()
        // complete && complete (res)
      }
    })
  })
  return promise
}

export default request