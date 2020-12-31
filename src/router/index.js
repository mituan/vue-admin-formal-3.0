import {
  createRouter,
  createWebHashHistory
} from "vue-router";
// import Home from "../views/Home.vue";

const routes = [{
    path: "/",
    name: "Login",
    component: () => import('../views/acount/Login.vue')
    // component: require('../views/acount/Login.vue')
  },
  //注册
  {
    path: "/register",
    name: "register",
    component: () => import('../views/acount/register.vue')
  },
  //忘记密码
  {
    path: "/forget",
    name: "forget",
    component: () => import('../views/acount/forget.vue')
  },
  //首页
  {
    path: "/index",
    name: "Index",
    component: () => import('../views/layout/Index.vue')
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;