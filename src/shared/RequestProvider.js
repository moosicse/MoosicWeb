import axios from 'axios';
import {message} from 'antd';

import {getUrlLoader} from './utils';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
const FetchProvider = axios.create({
  baseURL: '',
  withCredentials: true
});

FetchProvider.interceptors.response.use((res) => {
    return res;
  }, (err) => {
  const url = getUrlLoader();
    if (err.response.status === 403) {
      if (url.indexOf('/login') !== -1){
        return;
      }
      message.error('Not login');
      window.document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      window.location.replace(`/login/?next=${url}`);
    }
    if (err.response.status - 200 > 100) {
      // message.error(`Error! ${err.response.status}: ${err.response.statusText}`);
    }
    return Promise.reject(err);
  }
);

export default FetchProvider;
