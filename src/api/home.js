import { Api } from './baseApi';
import { url } from './url';


let HomeApi = {
    renderPost() {
        return Api(url + "/post/all", "get")
        .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
            return res;
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
            return false;
        })
       
    }
}
export default HomeApi;