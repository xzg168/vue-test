import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import Other from '../views/Other.vue';
import Welcome from '../views/Welcome.vue';
import InstructionTest from '../components/InstructionTest.vue';
import InstructionTest1 from '../components/InstructionTest1.vue';
import LifeCycle from '../components/LifeCycle.vue';
import EventTest from '../components/EventTest.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/order', component: InstructionTest },
      { path: '/order1', component: InstructionTest1 },
      { path: '/life', component: LifeCycle },
      { path: '/event', component: EventTest },
      { path: '/other', name: 'Other', component: Other },
    ],
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About,
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
];

const router = new VueRouter({
  routes,
});

// 挂在路由导航守卫
router.beforeEach((to, from, next) => {
  // to将要访问的路径
  //from 代表从哪个路径跳转而来
  // next是一个函数，next()表示方行  next('/login')表示强制跳转
  if (to.matched.length === 0) return next('/other');
  if (to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token');
  //console.log(tokenStr);
  if (!tokenStr) return next('/login');
  next();
});
export default router;
