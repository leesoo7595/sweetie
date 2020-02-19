import axios from 'axios';
import getConfig from 'next/config';
const {publicRuntimeConfig} = getConfig();

const http = axios.create({
  baseURL: publicRuntimeConfig.BASE_URL,
  timeout: 10000,
});

// const get = (path, params = {}) => http.get(path, params);
// const post = (path, params = {}) => http.post(path, params);
// const put = (path, params = {}) => http.put(path, params);
// const remove = (path, params = {}) => http.delete(path, params);

export default http;