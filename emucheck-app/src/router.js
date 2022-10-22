import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound.vue';
import Login from './pages/login/Login.vue'
import SignUp from './pages/signUp/SignUp.vue'
import Home from './pages/home/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/login', component: Login },
    { path: '/signUp', component: SignUp },
    { path: '/home', component: Home },
    // {
    //   path: '/coaches/:id',
    //   component: CoachDetail,
    //   children: [
    //     { path: 'contact', component: ContactCoach } // /coaches/c1/contact
    //   ]
    // },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
