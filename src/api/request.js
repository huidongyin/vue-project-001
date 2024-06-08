// 引入 Axios
import axios from 'axios';

// 创建一个 HTTP 请求类
class HttpService {
    constructor(baseURL) {
        // 配置 Axios 实例
        this.http = axios.create({
            baseURL: baseURL,
            timeout: 5000, // 请求超时时间
        });

        // 设置请求拦截器
        this.setupRequestInterceptor();

        // 设置响应拦截器
        this.setupResponseInterceptor();
    }

    // 设置请求拦截器
    setupRequestInterceptor() {
        this.http.interceptors.request.use(config => {
            // 在发送请求之前做些什么
            // 例如添加请求头等
            return config;
        }, error => {
            // 对请求错误做些什么
            return Promise.reject(error);
        });
    }

    // 设置响应拦截器
    setupResponseInterceptor() {
        this.http.interceptors.response.use(response => {
            // 对响应数据做些什么
            return response.data;
        }, error => {
            // 对响应错误做些什么
            return Promise.reject(error);
        });
    }

    // 发送 GET 请求
    get(url, params) {
        return this.request('get', url, { params });
    }

    // 发送 POST 请求
    post(url, data) {
        return this.request('post', url, data);
    }

    // 发送 PUT 请求
    put(url, data) {
        return this.request('put', url, data);
    }

    // 发送 DELETE 请求
    delete(url, params) {
        return this.request('delete', url, { params });
    }

    // 封装请求方法
    request(method, url, data) {
        return this.http[method](url, data)
            .catch(error => {
                // 处理错误
                console.error('Error:', error);
                throw error; // 抛出错误，可以让调用者处理
            });
    }
}

// 导出 HTTP 请求类的实例
const request = new HttpService('http://localhost:8080');
export default request;
