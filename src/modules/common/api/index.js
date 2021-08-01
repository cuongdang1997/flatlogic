import axios from 'axios';


export const jsonToFormData = data => {
    const form = new FormData();
    Object.keys(data).forEach(x => form.append(x, data[x] && (typeof data[x] === 'object' ? JSON.stringify(data[x]) : data[x])));
    return form;
};

const handleError = (messages = [], message = '', showError = true) => {
    let error = message;
    if (messages && messages.length) {
        error = messages.map(x => x.text).join('. \n');
    }
    console.warn(error);
    return error;
};

const instance = axios.create({});

const cancelings = {};

const checkCancel = (url, cancel) => cancel && cancelings[url + 0] && cancelings[url + 0]();
const getCancel = (url, cancel) => ({ cancelToken: new axios.CancelToken(c => (cancelings[url + (cancel ? 0 : Math.random())] = c)) });

const get = async (url, params = {}, cancel = true) => {
    try {
        checkCancel(url, cancel);
        const data = await instance.get(url, { params, ...getCancel(url, cancel) });
        if (data && data.status == 200) return data.data
        // if (res.success) {
        //     return res.data || true;
        // }
        handleError(data.messages, data.message);
        return;
    } catch (e) {
        if (!axios.isCancel(e)) handleError([], e);
    }
};

const post = async (url, data, { json = false, cancel = true } = {}, getMessage = false) => {
    try {
        checkCancel(url, cancel);
        const res = (await instance.post(url, json ? data : jsonToFormData(data), getCancel(url, cancel))).data;
        if (res.success) {
            return res.data || true;
        }
        const error = handleError(res.messages, res.message, !getMessage);
        if (getMessage) return error;
    } catch (e) {
        if (!axios.isCancel(e)) handleError([], e);
        return null;
    }
};

const put = async (url, data, { json = false, cancel = true } = {}) => {
    try {
        checkCancel(url, cancel);
        const res = (await instance.put(url, json ? data : jsonToFormData(data), getCancel(url, cancel))).data;
        if (res.success) {
            return res.data || true;
        }
        handleError(res.messages, res.message);
        return;
    } catch (e) {
        if (!axios.isCancel(e)) handleError([], e);
    }
};

const remove = async url => {
    try {
        const res = (await instance.delete(url)).data;
        if (res.success) {
            return res.data || true;
        }
        handleError(res.messages, res.message);
        return;
    } catch (e) {
        if (!axios.isCancel(e)) handleError([], e);
    }
};

export const request = async (method, url, data, { json = false, cancel = true } = {}) => {
    try {
        checkCancel(url, cancel);
        const config = {
            url,
            method,
            data: data && !json ? jsonToFormData(data) : data,
            ...getCancel(url, cancel),
        };
        if (method.toUpperCase() === 'GET') config.params = data;
        return (await instance.request(config)).data;
    } catch (e) {
        if (!axios.isCancel(e)) handleError([], e);
    }
};

export const postFile = async (url, data) => {
    try {
        const form = new FormData();
        Object.keys(data).forEach(x => form.append(x, data[x]));
        form.set('file', data.file, data.name);
        return (await instance.post(url, form, { headers: { 'Content-Type': 'multipart/form-data' } })).data;
    } catch (e) {
        handleError([], e);
    }
};
const postMultipart = async (url, data, getMessage = false) => {
    try {
        console.log('postMultipart -> jsonToFormData', data);

        const res = (await instance.post(url, data, { headers: { 'Content-Type': 'multipart/form-data' } })).data;
        if (res.success) {
            return res.data || true;
        }
        const error = handleError(res.messages, res.message, !getMessage);
        if (getMessage) return error;
    } catch (e) {
        if (!axios.isCancel(e)) handleError([], e);
        return null;
    }
};

export default {
    get,
    post,
    postMultipart,
    put,
    remove,
    request,
};
