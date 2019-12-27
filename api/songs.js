import request from '../request'

// 推荐最新音乐
export function newSongs () {
  return request ({
    url: '/personalized/newsong',
    methods: 'GET',
    data: {}
  })
}
