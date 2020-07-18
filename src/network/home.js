import { request } from './require'

export function getHomeMulitidata () {
  return request({
    url:'/home/123'
  })
}

export function getHomeGoods (type,page) {
  return request({
    url: '/home/goods',
    params: {
      type,
      page
    }
  })
}
