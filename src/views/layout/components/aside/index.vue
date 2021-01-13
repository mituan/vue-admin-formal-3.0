<template>
  <div>
    <h1 id="logo">
      <img :src="data.logo" alt="logo">
    </h1>
    <a-menu v-model:openKeys='data.openKeys' v-model:selectedKeys='data.selectedKeys' mode="inline" theme="dark"
      @click="selectMenu" @openChange="openMenu">
      <template v-for="(item,i) in routers">
        <template v-if="!item.hidden">
          <!-- 第一级菜单 -->
           <a-menu-item v-if="!item.children" :key="item.path">
             <router-link :to="item.path"> 
               <i class="icon icon-size-21 mb--5" :class="item.meta && item.meta.icon"></i>
               {{ item.meta && item.meta.title }}</router-link>
           </a-menu-item>

          <!-- 子级菜单 -->
          <!-- 递归无限循环的组件 -->
          <Menu :menu="item" v-else :key="item.path"/>
        </template>
      </template>
    </a-menu>
  </div>
</template>
<script>
  import {
    reactive
  } from 'vue'
  // 路由
  import {
    useRoute,
    useRouter
  } from 'vue-router'

  // 导入子级组件
  import Menu from "./Menu";
  export default {
    components:{ Menu },
    setup() {
      // 获取路由
      const {
        options
      } = useRouter();
      const routers = options.routes;

      // 数据
      const data = reactive({
        selectedKeys: localStorage.getItem('selectedKeys') ? [localStorage.getItem('selectedKeys')] : [],
        openKeys: localStorage.getItem('openKeys') ? [localStorage.getItem('openKeys')] : [],
        logo: require('@/assets/logo.png') //推荐使用require方式引用，使用../路径打包可能回出错
      })

      // 选择菜单
      const selectMenu = ({ item, key, keyPath }) => {
        data.selectedKeys = [key];
        localStorage.setItem("selectedKeys",key);
      }

      // 展开/关闭菜单
      const openMenu = (openKeys) => {
        data.openKeys = openKeys;
        localStorage.setItem('openKeys',openKeys);
      }

      console.log("routers", routers);

      return {
        data,
        routers,
        selectMenu,
        openMenu
      }
    },
  }
</script>
<style lang="scss" scoped>
#logo {
  padding: 24px 0px 20px;
  border-bottom: 1px solid #000;
  text-align: center;
  img {
    display: inline;
  }
}
</style>