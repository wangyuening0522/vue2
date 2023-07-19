/* utils中request的axios封装  
  封装url中相同的部分 */
  import axios from "axios";
  //通用请求
  const http = axios.create({
    baseURL: " https://api.hanling.space/", //地址前缀
    timeout: 10000, //超时时间
    withCredentials: true, // 带上 cookie
  });
  export default http;