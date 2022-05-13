import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SampleV from '../views/SampleV.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },

    {
        path: '/sample',
        name: 'about',
        component: SampleV
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router