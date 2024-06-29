import { createRouter, createWebHistory } from 'vue-router'
import {JWT} from "@/utils/jwt";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard/page.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/page.vue')
    },
    {
      path: '/:pathMatch(.*)*',  // 此路由会匹配所有路径
      name: 'NotFound',
      component: () => import('../views/common/NotFound.vue')
    }
  ]
})

// 路由拦截
router.beforeEach((to, from, next) => {
  const isAuthenticated = JWT.getToken(); // 假设 token 存储在 localStorage 中

  if (!isAuthenticated && to.path !== '/login') {
    // 如果用户未认证并且目标路径不是登录页，重定向到登录页
    next('/login');
  } else {
    // 否则正常导航到目标页面
    if (to.path == "/") {
      next("/dashboard");
      return;
    }
    next();
  }
});

export default router
