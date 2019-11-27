// import router from '@/router'
// import store from '@/store'
// import { getToken } from '@/utils/auth' // get token from cookie

// router.beforeEach(async(to, from, next) => {
//   const hasToken = getToken()
//   // console.log(hasToken)
//   if (hasToken) {
//     if (to.path === '/login') {
//       next({ path: '/' })
//     } else {
//       // determine whether the user has obtained his permission roles through getInfo
//       const hasRoles = store.getters.roles && store.getters.roles.length > 0
//       if (hasRoles) {
//         next()
//       } else {
//         try {
//           const { roles } = await store.dispatch('user/getInfo')
//           const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
//           router.addRoutes(accessRoutes)
//           next({ ...to, replace: true })
//         } catch (error) {
//           await store.dispatch('user/resetToken')
//           next(`/login?redirect=${to.path}`)
//         }
//       }
//     }
//   } else {
//     // if (whiteList.indexOf(to.path) !== -1) {
//       next()
//     // } else {
//       // next(`/login?redirect=${to.path}`)
//     // }
//   }
// })

// router.afterEach(() => {
// })
