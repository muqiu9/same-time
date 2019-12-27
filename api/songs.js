import { http } from '../http'

// 推荐最新音乐
function newSongs (data) {
  http ('/personalized/newsong', data, 'get')
}

export default {
  newSongs
}