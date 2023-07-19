import http from "../../utils/request";
export const getKey = (date) => {
  return http.post(`login/qr/key?timestamp=${date}`);
};
export function getCode(key, date,query) {
  return http({
    url: `login/qr/create?timestamp=${date}&key=${key}`,
    method: "post",
    data: query,
  });
}
export function getCheck(query) {
  return http({
    url: `/login/qr/check?`,
    method: "post",
    data: query,
  });
}
export function getAccount(query, date) {
  return http({
    url: `/login/qr/account?${date}`,
    method: "post",
    data: query,
  });
}
