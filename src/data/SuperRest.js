// import PatientApi from '../api/interface/PatientApi.js';
import Ajax from './../services/api/Ajax.js';
 
import toastr from 'toastr';

function showNoGenericLoading(props = {}) {
    let showNoGenericLoading = false;
    if (props.showNoGenericLoading) {
        showNoGenericLoading = props.showNoGenericLoading;
    }
    return showNoGenericLoading;
}
export default class SuperRest {
    static get(url, data, dispatch, callback, props) {
        let promise = Ajax.get(url, data, dispatch, props);
        return SuperRest._promiseMiddleware(promise, dispatch, callback, props, url);
    }
    static put(url, data, dispatch, callback, props) {
        let promise = Ajax.put(url, data, dispatch, props);
        return SuperRest._promiseMiddleware(promise, dispatch, callback, props, url);
    }
    static post(url, data, dispatch, callback, props) {
        let promise = Ajax.post(url, data, dispatch, props);
        return SuperRest._promiseMiddleware(promise, dispatch, callback, props, url);
    }
    static delete(url, data, dispatch, callback, props) {
        let promise = Ajax.delete(url, data, dispatch, props);
        return SuperRest._promiseMiddleware(promise, dispatch, callback, props, url);
    }

    static _promiseMiddleware(promise, dispatch, callback, props, url) {
        promise.then(response => {
            if(callback) {
             dispatch(callback(response));
            }
             
        })
            .catch(error => {
                 
                let statusCode = error.response && error.response.status;
                if (Ajax.isLogoutCode(statusCode))
                    ;//if it is log out code user will be logged out in interceptor
                else if (error.response && error.response.status === 400)
                    toastr.error(error.response.data.message || "Input error, could not complete the request");
                else
                    toastr.error(url + " " + error);
            });
       
        return promise;
    }
}


