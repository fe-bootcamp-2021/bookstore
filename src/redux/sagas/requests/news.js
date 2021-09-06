import axios from "axios";

const dbUrl = process.env.REACT_APP_FIREBASE_DB_URL;

export function requestGetNews() {
  console.log(process.env);
  return axios.request({
    method: "get",
    url: `${dbUrl}/news.json`,
  });
}

export function requestDeleteNews(id, idToken) {
  return axios.request({
    method: "delete",
    url: `${dbUrl}/news/${id}.json?auth=${idToken}`,
  });
}

export function requestAddNews(news, idToken) {
  return axios.request({
    method: "post",
    url: `${dbUrl}/news.json?auth=${idToken}`,
    data: news,
  });
}

export function requestUpdateNews(id, changes, idToken) {
  console.log("token update request", idToken);
  return axios.request({
    method: "put",
    url: `${dbUrl}/news/${id}.json?auth=${idToken}`,
    data: changes,
  });
}
