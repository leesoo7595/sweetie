import axios from 'axios';
import getConfig from 'next/config';
const {publicRuntimeConfig} = getConfig();

const findAll = axios(publicRuntimeConfig.BASE_URL);

export default {
  findAll
}