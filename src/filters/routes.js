
import { axios} from "@/main"

const imgsURl =function(url) {
    return axios.defaults.baseURL + url;
}

export {
    imgsURl
}