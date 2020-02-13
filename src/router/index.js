import Vue from 'vue'
import Router from 'vue-router'
import headerContent from '@/components/headerContent'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/headerContent',
            name: 'headerContent',
            component: headerContent
        },
        {
            path: '/footerContent',
            name: 'footerContent',
            component:resolve => require(['@/components/footerContent.vue'], resolve)
        },
        {
            path: '/leftContent',
            name: 'leftContent',
            component:resolve => require(['@/components/leftContent'], resolve)
        },
        {
            path: '/login',
            name: 'login',
            component:resolve => require(['@/pages/login'], resolve)
        },
        {
            path: '/register',
            name: 'register',
            component:resolve => require(['@/pages/register'], resolve)
        },
        {
            path: '/',
            name: 'index',
            component:resolve => require(['@/pages/index'], resolve)
        },
        {
            path: '/homePage',
            name: 'homePage',
            component:resolve => require(['@/pages/homePage'], resolve)
        },
        {
            path: '/manageApi',
            name: 'manageApi',
            component:resolve => require(['@/pages/manageApi'], resolve)
        },
        {
            path: '/account',
            name: 'account',
            component:resolve => require(['@/pages/account'], resolve)
        },
        {
            path: '/message',
            name: 'message',
            component:resolve => require(['@/pages/message'], resolve)
        },
        {
            path: '/address',
            name: 'address',
            component:resolve => require(['@/pages/address'], resolve)
        },
        {
            path: '/helpCenter',
            name: 'helpCenter',
            component:resolve => require(['@/pages/helpCenter'], resolve)
        },
    ]
})
