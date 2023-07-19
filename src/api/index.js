import http from "../utils/request";
//请求个人详情数据

export const getData=()=>{
    return http.get("/user/detail?uid=1771496677");
}
//获取歌单详情
export const getPlayListDetail=(id)=>{
    return http.get(`/playlist/detail?id=${id}`);
}
//登录获取cookie(游客)
export const getCookie=()=>{
    return http.get("register/anonimous");
}
//登录状态获取用户歌单
export const getUserDetail=()=>{
    return http.get(`user/subcount/`);
}
