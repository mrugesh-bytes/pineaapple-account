import axios from 'axios-observable';

axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}`;

// Request interceptor
axios.interceptors.request.use(
    (config: any) => {
        const accessToken = localStorage.getItem('accessToken');

        // Do something before request is sent
        const Authorization = 'Authorization';
        const Accept = 'Accept';
        const ContentType = 'Content-Type';
        if (accessToken && accessToken !== '') {
            config.headers[Authorization] = 'Bearer ' + accessToken;
        }
        return config;
    },
    (error: any) => {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Response interceptor
axios.interceptors.response.use(
    (response: any) => {
        // Do something with response data
        return response;
    },
    (error: any) => {
        // if (error?.response?.data?.statusCode == 401) {
        //     window.location.href = 'Logout';
        // } else {
        return Promise.reject(error);
        // }
    },
);
