import axios from 'axios';

/**
 * @param {*} url : string // url remote
 * @param {*} method : string // GET or POST
 * @param {*} dataBody : object // data body
 * @param {*} token: string // token auth2 from server
 */
export const Api = (url, method, dataBody = null, token = null, params = null) => {
    let header =  {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': token
    }
    let axiosConfig =  {
        method: method,
        url: url, 
        headers: header,
        data: dataBody,
        params
    }
    if (!token) {
        delete header.authorization;
    }
    if (!dataBody) {
        delete axiosConfig.data;
    }
    if (!params) {
        delete axiosConfig.params;
    }
    console.log(axiosConfig);
    return axios(axiosConfig)
      
}