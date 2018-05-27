import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/pages/Landing'
import Index from '@/components/pages/Index'
import About from '@/components/pages/About'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing
        },
        {
            path: '/Index',
            name: 'Index',
            component: Index
        },
        {
            path: '/About',
            name: 'About',
            component: About
        }
    ]
})
