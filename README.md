# vue-project-001

这是一个Vue2的脚手架项目，创建步骤如下：

> 本机环境如下：

```shell
👨 huidong 📌  ~/code/front/vue-project-001 on  main ⌚ 24-06-07 22:49:35
$ npm -v                 
6.14.17
👨 huidong 📌  ~/code/front/vue-project-001 on  main! ⌚ 24-06-08 21:18:17
$ node -v
v14.20.0
```

1.安装vue-client

```shell
npm install -g @vue/cli
```

2.创建项目

```shell
vue create vue-project-001
```

3.安装element-ui 

```shell
npm install element-ui --save
```

4.src目录下覆盖App.vue

```vue
<template>
<!-- 2.src下覆盖App.vue -->
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data(){

  },
  created() {
  },
  mounted() {
  }
}
</script>
```

5.src目录下覆盖main.js

```vue
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
// 3.覆盖src下main.js
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
```

6.src目录下创建router.js

```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
import login from './views/login';
import userView from './views/user/userView';
//4.router.js
Vue.use(VueRouter);

const routes = [
    {path:"/",redirect:"/login",component:login},
    {path:"/login",component:login},
    {path:"/user",component:userView},
]
const router = new VueRouter({routes});

export default router;
```

7.src目录下创建routerHelper.js

```vue
export function routerTo(router,path,params){
    router.push({path},params).catch(err=>{
        if (err.name!=='NavigationDuplicated'){
            console.error(err)
        }
    })
}
```

8.src下创建api目录

- api.js

```javascript
import request from "@/api/request";

export function getConfigList() {
return request.get('/aaa/config/center/groups');
}

// 创建组
export function createGroup(params) {
return request.post('/aaa/config/center/create_group', params);
}
```

- request.js

```javascript
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
```

9.启动报错参考package.json

```json
{
  "name": "vue-project-001",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "core-js": "^3.8.3",
    "element-ui": "^2.15.14",
    "vue": "^2.6.14",
    "vue-router": "^3.4.8"
  },
  "devDependencies": {
    "@babel/core": "^7.12.16",
    "@babel/eslint-parser": "^7.12.16",
    "@vue/cli-plugin-babel": "~5.0.0",
    "@vue/cli-plugin-eslint": "~5.0.0",
    "@vue/cli-service": "~5.0.0",
    "eslint": "^7.32.0",
    "eslint-plugin-vue": "^8.0.3",
    "vue-template-compiler": "^2.6.14"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "@babel/eslint-parser"
    },
    "rules": {}
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ]
}
```

- 清除缓存命令：

```shell
rm -rf node_modules package-lock.json

npm install 
```


