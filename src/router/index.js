import{ createRouter, createWebHistory } from 'vue-router'
import UploadView from '../views/UploadView.vue'
import ResultView from '../views/ResultView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path:'/',redirect:'/upload'},
        { path:'/upload',component:UploadView},
        { path:'/result',component:ResultView}
    ]
})

export default router