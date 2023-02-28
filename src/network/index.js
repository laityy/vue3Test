import axios from 'axios'

// export const getData = function (p) {
//     return axios.get(`https://api.github.com/users/${p}`)
// }

// export const getData = (name) => axios.get(`https://api.github.com/users/${name}`) //无代理，直接使用绝对地址访问

export const getData = (name) => axios.get(`/${name}`) //设置proxy代理，就可以使用相对地址
