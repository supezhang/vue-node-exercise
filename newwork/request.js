import axios form 'axios'

export function request1(config,success,failure){
  const http = axios.create({
    baseUrl:'123.220.11.2:8000',
    timeout:5000
  })
  // http(config).then(res=>{
  //   success(res)
  // }).catch(err=>{
  //   failure(err)
  // })
  // ---------------
  // return new Promise((resolve,reject)=>{
  //   http(config).then(res=>{
  //     resolve(res)
  //   }).catch(err=>{
  //     reject(err)
  //   })
  // })
  // ---------------

  //请求拦截  比如config中的的一些信息不符合服务器的要求;每次网络请求界面显示loading；某些网络请求 必须携带一些特殊信息如 token
  http.interceptors.request.use(config=>{
    console.log(config);
    return config
  },err=>{
    console.log(err);
  })
  //相应拦截
  http.interceptors.response.use(res=>{
    console.log(res);
    return res.data
  },err=>{
    console.log(err);
  })
  return http(config)
}
import {a} from './newwork/request.js'
// a({
//   url:"/home/muildata"
    // success
// },res=>{
//   console.log(res);
    // failure
// },err=>{
//   console.log(err);
// })
a({url:"/home/muildata"}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(res);
})