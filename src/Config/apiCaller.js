import Axios from 'axios';
import Toast from 'react-native-toast-message';
import {ToastError} from './Constants';

export var baseUrl = '';
export const Img_url = '';
export const GOOGLE_API = 'AIzaSyClYAkI28o4JC8de56LH0xpNWtX-TWIKr4';

const CancelToken = Axios.CancelToken.source();
// create the source

Axios.interceptors.response.use(
  response => {
    return response;
  },
  async ({response, ...rest}) => {
    if (response?.status == 401) {
      try {
        console.log('Session Expired!', response);
        Toast.show(ToastError('Session Expired! Please login.'));
        // });
      } catch (err) {
        console.log('Error= ===', err);
        Toast.show(ToastError('Network error, please try again.'));
      }
    }
    return response;
  },
);

export default class ApiCaller {
  static getQueryStringOfObject = (obj, prefix) => {
    var str = [],
      p;
    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        var k = prefix ? prefix + '[' + p + ']' : p,
          v = obj[p];
        str.push(
          v !== null && typeof v === 'object'
            ? this.getQueryStringOfObject(v, k)
            : encodeURIComponent(k) + '=' + encodeURIComponent(v),
        );
      }
    }
    return str.join('&');
  };

  static BearerHeaders = (token: any, More: AxiosRequestConfig = {}) => {
    return {
      Authorization: 'Bearer ' + token,
      ...More,
    };
  };

  static Get = (url = '', headers = {}, customUrl = '') => {
    this.source = CancelToken;
    console.log(
      'API CALL===>>> GET',
      customUrl ? customUrl : `${baseUrl}${url}`,
    );

    return Axios.get(customUrl ? customUrl : `${baseUrl}${url}`, {
      timeout: 20000,
      cancelToken: this.source.token,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        ...headers,
      },
    })
      .then(res => res)
      .catch(err => err.response);
  };

  static Post = async (
    endPoint = '',
    body = {},
    headers = {},
    cutomUrl = '',
    onUploadProgress = () => {},
  ) => {
    console.log('API CALL===>>> POST', baseUrl + endPoint, body, headers);
    return Axios.post(cutomUrl ? cutomUrl : `${baseUrl}${endPoint}`, body, {
      timeout: 20000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
      onUploadProgress: progress => onUploadProgress(progress),
    });
  };

  static Put = (url = '', body = {}, headers = {}) => {
    return Axios.put(`${baseUrl}${url}`, body, {
      headers: {'Content-Type': 'application/json', ...headers},
    })
      .then(res => res)
      .catch(err => err.response);
  };

  static Delete = (url = '', body = {}, headers = {}) => {
    return Axios.delete(`${baseUrl}${url}`, {
      headers: {'Content-Type': 'application/json', ...headers},
      data: body,
    })
      .then(res => res)
      .catch(err => err.response);
  };
}
