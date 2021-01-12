import {
  createRouter,
  createWebHashHistory
} from "vue-router";
// import Home from "../views/Home.vue";

const routes = [{
    path: "/login",
    name: "Login",
    meta:{
      title:"登录"
    },
    hidden:true,
    component: () => import('../views/acount/Login.vue')
  },
  //注册
  {
    path: "/register",
    name: "register",
    meta:{
      title:"注册"
    },
    hidden:true,
    component: () => import('../views/acount/register.vue')
  },
  //忘记密码
  {
    path: "/forget",
    name: "forget",
    meta:{
      title:"忘记密码"
    },
    hidden:true,
    component: () => import('../views/acount/forget.vue')
  },
  //首页
  {
    path: "/",
    name: "Index",
    meta:{
      title:"首页"
    },
    component: () => import('../views/layout/Index.vue'),
    // children: [
    //   {
    //     path: "/hcc",
    //     name: "index",
    //     meta:{
    //       title:"黄聪聪"
    //     },
    //     hidden:true,
    //     component: () => import('../views/forCc/pig.vue'),
    //   }
    // ]
  },
  {
    path: "/redFlower",
    name: "redFlower",
    meta:{
      title:"点开领取小红花"
    },
    hidden:true,
    component: () => import('../views/layout/Index.vue'),
    children: [
      {
        path: "/redFlowerForYou",
        name: "redFlowerForYou",
        meta:{
          title:"送你一朵小红花"
        },
        component: () => import('../views/forCc/redFlowerForYou.vue'),
      }
    ]
  },
  //新闻
  {
    path: "/admin",
    name: "admin",
    meta:{
      title:"管理总台"
    },
    
    component: () => import('../views/layout/Index.vue'),
    children: [
      {
        path: "/role",
        name: "role",
        meta:{
          title:"角色管理"
        },
        component: () => import('../views/admin/role.vue'),
      },{
        path: "/user",
        name: "user",
        meta:{
          title:"用户管理"
        },
        component: () => import('../views/admin/user.vue'),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;