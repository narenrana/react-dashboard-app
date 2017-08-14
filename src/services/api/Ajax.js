import axios from 'axios';
import conf from './conf';
import Toastr from 'toastr';


let s_axios = axios.create({
    baseURL: conf.uri,
});


class Ajax {

    static _axios() {
        //https://github.com/mzabriskie/axios/
        //https://github.com/ctimmerm/axios-mock-adapter
        // if (singletonCreated === true)
        //     return s_axios;

        // if (conf.mock) {
        //     var init = require('./mock/InitMocker.js');
        //     init(s_axios, conf.mock_delay);
        // }
        this.requestInterceptor(s_axios);
        this.responseInterceptor(s_axios);
        return s_axios;
    }

    static get(uri, data) {
        return this._axios().get(uri, data);
    }

    static put(uri, data) {
        return this._axios().put(uri, data);
    }
    static post(uri, data) {
        return this._axios().post(uri, data);
    }
    static delete(uri) {
        return this._axios().delete(uri);
    }

    static isLogoutCode(code) {
        return (code === 401 || code === 403);
    }

    static requestInterceptor(axios) {
        // Add a request interceptor
        axios.interceptors.request.use(function (config) {
            // Do something before request is sent
            //console.log('Starting Request ' + config.url.split('v1')[1], config);
           // Authorization: Zoho-authtoken e0004d01c7fa98354ecf7258d8e70672'
                config.headers['Authorization'] = 'Zoho-authtoken e0004d01c7fa98354ecf7258d8e70672';
                //config.headers['organization_id'] = '649199458';
           
            return config;
        }, function (error) {
            console.error(error);
            // Do something with request error
            return Promise.reject(error);
        });
    }

    static responseInterceptor(axios) {
        // Add a response interceptor
        axios.interceptors.response.use(function (response) {
            // Do something with response data
            return response;
        }, function (error) {
            // Do something with response error
            //console.error(error);
              Toastr.error("Missing authorization,  ...");
            return Promise.reject(error);
        });
    }

}


export default Ajax;
