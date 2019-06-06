// core
import Vue from 'vue';
import VueRouter from 'vue-router';
// components
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import UIPage from '../pages/UIPage';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import EESPage from '../pages/EESPage';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: 'admin',
  routes: [
    {
      path: '/',
      component: MainPage,
      children: [
        {
          path: '/',
          component: UIPage,
        },
        {
          path: 'about',
          component: AboutPage,
        },
        {
          path: 'projects',
          component: ProjectsPage,
        },
        {
          path: 'ees',
          component: EESPage,
        },
      ],
    },
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '*',
      component: NotFoundPage,
    },
  ],
});
