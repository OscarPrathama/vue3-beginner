import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import Blogs from '../views/Blogs'
import Products from '../views/Products'
import AboutUs from '../views/AboutUs'
import ContactUs from '../views/ContactUs'
import NotFound from '../views/errors/404'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: Blogs
    },
    {
        path: '/products/:product',
        component: Products,
        props: true
    },
    {
        path: '/about-us',
        name: 'AboutUs',
        component: AboutUs,
    },
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: ContactUs,
    },
    // 404 error, harus di paling bawah
    {
        path: '/:catchAll(.*)',
        component: NotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;