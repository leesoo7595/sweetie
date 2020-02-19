import http from './axiosApi';

const findAll = http.get('/');

export default {
  findAll
}