import axios from 'axios'
import APIS from '../assets/apis/index'
import Qs from 'qs'
// 超时时间
axios.defaults.timeout = 10000
// http请求拦截器

const env = process.env.NODE_ENV

axios.defaults.withCredentials = true

axios.defaults.mode = 'cors'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // console.log(config,"=====")
    if (config.method == 'post' || config.method == 'put') {
      if (!config.data.isPut) {
        let data = Qs.stringify(config.data)
        config.data = data
      } else {
        delete config.data.isPut
      }
    }
    // if (config.url.indexOf('mockjs') !== -1) {
    //     config.baseURL = 'http://rap.krspace.cn';
    // } else if (config.url.indexOf('/st/') !== -1) {
    //     config.url = config.url.split('/st/')[1]
    //     config.baseURL = 'http://st.krspace.cn';
    // } else {
    //     config.baseURL = '/';
    // }
    config.baseURL = 'http://127.0.0.1:4000' //后端接口访问4000端口 由nginx配置代理
    // config.baseURL = 'http://118.89.230.43:3011' //后端接口访问4000端口 由nginx配置代理
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    //这个判断是关键，如果返回登陆页面内容了，就刷新当前页面，经后端处理就会跳转到登陆页面了
    return response
  },
  error => {
    if (error.response.status === 301) {
      window.location.hash ='#/login'
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  }
)

function toType(obj:any) {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase()
}
// 参数过滤函数
function filterNull(o:any) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

function check401(res:any) {
  res = res.data
  if (res.code === -4011) {
    const redirectUrl = encodeURIComponent(window.location.href)
    if (typeof Storage !== 'undefined') {
      if (sessionStorage.user) {
        sessionStorage.navs = ''
        sessionStorage.user = ''
      }
    }
    window.location.href = `/new/login.html?RU=${redirectUrl}`
  } else if (res.code === -4033) {
    // console.log('您没有操作权限，请联系管理员')
  }
  return res
}

export default {
  get: (url:string, params:any, success:any, failure:any) =>
    new Promise((resolve, reject) => {
      if (params) {
        params = filterNull(params)
      }
      if (!APIS[url].url) {
        return
      }
      axios
        .get(APIS[url].url, { params: params })
        .then(check401)
        .then(function(data) {
          if (parseInt(data.code) > 0) {
            success && success(data)
            resolve(data)
          } else {
            failure && failure(data)
            reject(data)
          }
        })
        .catch(function(error) {
          if (error && error.response && error.response.data) {
            error = error.response.data
            failure && failure(error)
            reject(error)
          }
        })
    }),
  post: (url:string, params:any, success:any, failure:any) =>
    new Promise((resolve, reject) => {
      if (params) {
        params = filterNull(params)
      }
      if (!APIS[url].url) {
        return
      }
      axios
        .post(APIS[url].url, params)
        .then(check401)
        .then(function(response) {
          if (parseInt(response.code) > 0) {
            success && success(response)
            resolve(response)
          } else {
            if (failure) {
              failure && failure(response)
            } else {
              return Promise.reject(response)
            }
          }
        })
        .catch(function(error) {
          if (error && error.response && error.response.data) {
            error = error.response.data
            failure && failure(error)
            reject && reject(error)
          } else {
            reject(error)
          }
        })
    }),
  put: (url:string, params:any, success:any, failure:any) =>
    new Promise((resolve, reject) => {
      if (params) {
        params = filterNull(params)
      }
      if (!APIS[url].url) {
        return
      }
      axios
        .put(APIS[url].url, params)
        .then(check401)
        .then(function(response) {
          if (parseInt(response.code) > 0) {
            success && success(response)
            resolve(response)
          } else {
            failure && failure(response)
            reject(response)
          }
        })
        .catch(function(error) {
          if (error && error.response && error.response.data) {
            error = error.response.data
            failure && failure(error)
            reject(error)
          }
        })
    }),
  delete: (url:string, params:any, success:any, failure:any) =>
    new Promise((resolve, reject) => {
      if (params) {
        params = filterNull(params)
      }
      if (!APIS[url].url) {
        return
      }
      axios
        .delete(APIS[url].url, { params: params })
        .then(check401)
        .then(function(data) {
          if (parseInt(data.code) > 0) {
            success && success(data)
            resolve(data)
          } else {
            failure && failure(data)
            reject(data)
          }
        })
        .catch(function(error) {
          if (error && error.response && error.response.data) {
            error = error.response.data
            failure && failure(error)
            reject(error)
          }
        })
    })
}
