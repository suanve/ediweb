import axios from 'axios';
import qs from 'qs';

var baseAPI = "http://127.0.0.1:81"

let http = {
    post: "",
    get: "",
    delete: "",
    put: "",
    update: ""
}

http.post = function (api, data) {
    let params = qs.parse(data)
    return new Promise((resolve, reject) => {
        // var client = axios.defaults.headers.common['token'] = localStorage.getItem("token")?localStorage.getItem("token"):"";
        axios.post(baseAPI + api, data, { headers: { "token": localStorage.getItem("token") ? localStorage.getItem("token") : "" } }
        ).then((res) => {
            resolve(res)
        })
    })
}

http.get = function (api, data) {
    let params = qs.stringify(data)
    return new Promise((resolve, reject) => {
        // var client = axios.defaults.headers.common['token'] = localStorage.getItem("token")?localStorage.getItem("token"):"";
        axios.get(baseAPI + api,
            {
                params: data,
                headers: { "token": localStorage.getItem("token") ? localStorage.getItem("token") : "" }
            }).then((res) => {
                resolve(res)
            })
    })
}




export default http

// 查询杀软
export function _selectAs(data) {
    return http.post("/api/tools/as", data)
}

// 查询提权
export function _selectPrivup(data) {
    return http.post("/api/tools/privup", data)
}

// // 获取实验数据
// export function _getChallenge() {
//     return http.get("/api/challenge/get")
// }

