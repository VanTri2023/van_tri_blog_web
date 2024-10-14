import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080'
//axios.defaults.baseURL = 'http://3.144.77.93:8080'
//axios.defaults.headers.post["Content-Type"] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'
export const request = (method, url, data) => {
    let headers = {};
    
    return axios({
        method: method,
        headers: headers,
        url: url,
        data: data
    });
};