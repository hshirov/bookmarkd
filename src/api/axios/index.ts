import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_KEY, API_BASE_URL } from '@env';

const requestApiKeyHandler = (config: AxiosRequestConfig) => ({
  ...config,
  params: {
    ...config.params,
    key: API_KEY,
  },
});

const responseHandler = (res: AxiosResponse): AxiosResponse => res.data;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(requestApiKeyHandler);
axiosInstance.interceptors.response.use(responseHandler);

export default axiosInstance;
