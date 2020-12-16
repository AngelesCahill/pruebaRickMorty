import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/opiniones',
    name: 'Opiniones',
    component: () => import(/* webpackChunkName: "opiniones" */ '../views/Opiniones.vue')
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: () => import(/* webpackChunkName: "favoritos" */ '../views/Favoritos.vue')
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import(/* webpackChunkName: "administracion" */ '../views/Administracion.vue')
  },
  {
    path: '/vermas',
    name: 'VerMas',
    component: () => import(/* webpackChunkName: "vermas" */ '../views/VerMas.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
 