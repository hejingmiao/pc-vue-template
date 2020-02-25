import { get, post } from './request.js'
/** 
 * @param {Object} p [请求接口所需参数]
 */
export const apiLogin = p => post('/api/login', p)
export const apiList = p => get('/api/about/list', p)
