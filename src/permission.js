import router from '@/router'
import store from './store'
import { getToken,removeToken } from '@/utils/auth' // get token from cookie
router.beforeEach(async(to, from, next) => {
    const hasToken = getToken()
    if(hasToken){
        store.dispatch('user/getInfo')
        next()
    }else{
        //没有登录，去跳转登录页
        if(to.path === '/login'|| to.path === '/register'){
            next()
        }else{
            next(`/login?redirect=${to.path}`)
        }
    }
})

router.afterEach(() => {
})
