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
  {
    path: "/register",
    name: "register",
    component: () => import('../views/acount/register.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;