import axios from 'axios'

// export const getData = function (p) {
//     return axios.get(`https://api.github.com/users/${p}`)
// }

export const getData = (name) =>
    axios.get(`https://api.github.com/users/${name}`)
