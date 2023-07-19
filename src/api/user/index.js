import http from "../../utils/request";
export const getPlayList=(data)=>{
    return http.get(`user/playlist?uid=${data}`);
}
//1771496677