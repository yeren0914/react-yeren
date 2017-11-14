/**
 * Created by yejingyang on 2017/11/13.
 */
import axios from 'axios';
import local from '../helpers/localStorage';

axios.defaults.baseURL = '/';
axios.defaults.withCredentials = true;
axios.defaults.headers = {
    'Content-Type' : 'application/json',
     Token:local.getItem('openid') || '',
    'Access-Control-Allow-Credentials':true
}

export default axios;