import service from '@/utils/request.js'

export function GetCode(data){
    // 自动拼接 baseUrl + url
    return service.request({ url: '/getCode/', method: 'post',  data})
    // return service.request({ url: '/error/', method: 'post',  data})
}

/**
 * 账户体系 - 登录
 */
export function AccountLogin(data){
    return service.request({ 
        url: process.env.VUE_APP_ACCOUNT_APIURL + '/login', 
        // url: 'http://account.web-jshtml.cn/login/', 
        method: 'post', 
        data
    })
}


/**
 * 用户体系 - 登录
 */
 export function UserList(data){
    return service.request({ 
        url: process.env.VUE_APP_USER_APIURL + '/list', 
        method: 'post', 
        data
    })
}
