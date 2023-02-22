// import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('pages/Home.vue')
const Category = () => import('pages/Category.vue')
const Search = () => import('pages/Search.vue')
const Me = () => import('pages/Me.vue')
//#region
//上面的是路由懒加载，组件只有在被需要时才会从服务器请求，所以组件访问时会有网络请求，下面的不使用懒加载，将所有组件全部打包在一起，后续就不再请求服务器
// import Home from 'pages/Home.vue'
// import Category from 'pages/Category.vue'
// import Me from 'pages/Me.vue'
// import Search from 'pages/Search.vue'
//#endregion
const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/category',
        component: Category,
    },

    {
        path: '/search',
        component: Search,
    },
    {
        path: '/me',
        component: Me,
    },
]

const router = createRouter({
    history: createWebHistory(), //createWebHistory实现history模式实现，
    // history: createWebHashHistory(), //这里是使用hash模式
    routes: routes,
})

export default router

// export default createRouter({
//     history: createWebHistory(), //createWebHistory实现history模式实现，
//     // history: createWebHashHistory(), //这里是使用hash模式
//     routes: routes,
// })
