import axios from 'axios';
import qs from 'qs';

let client = axios.create({
    /*responseType: 'json'*/
});

export const post = (url, data) => {
    return new Promise((resolve, reject) => {
        return client.post(url, qs.stringify(data))
            .then(function (response) {
                if (typeof (response.data.success) != 'undefined'){
                    return resolve(response.data);
                }
                return reject('Have a problem');
            })
            .catch(function (error) {
                return reject(error);
            });
    });
}
export const get = (url, params) => {
    return new Promise((resolve, reject) => {
        return client.get(url, {params: params}).then(function (response) {
            return resolve(response.data);
        })
            .catch(function (error) {
                return reject(error);
            });
    })
}

export const getMessage = (response) => {
    return typeof(response.messages) != 'undefined'?response.messages[0]: {};
};

export const newPost = (url, data) => {
    return client.post(url, qs.stringify(data));
};

export const getArrayFromJsonString = (response) => {
    try{
        if(typeof  response === 'string'){
            return JSON.parse(response);
        }else{
            return [];
        }
    }catch (e){
        return [];
    }
};