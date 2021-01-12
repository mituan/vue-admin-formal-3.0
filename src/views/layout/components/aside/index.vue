<template>
  <div>
    <a-menu v-model:openKeys='data.openKeys' v-model:selectedKeys='data.selectedKeys' mode="inline" theme="dark"
      :inline-collapsed="data.collapsed" @click="selectMenu">
      <template v-for="(item,i) in routers">
        <template v-if="!item.hidden">
          <!-- 第一级菜单 -->
           <a-menu-item v-if="!item.children" :key="item.path">
             <router-link :to="item.path">{{ item.meta && item.meta.title }}</router-link>
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


      const data = reactive({
        selectedKeys: ['Index'],
        collapsed: false,
      })

      const selectMenu = ({ item, key, keyPath }) => {
        console.log(item);
        console.log(key, keyPath);
      }

      console.log("routers", routers);

      return {
        data,
        routers,
        selectMenu
      }
    },
  }
</script>
<style lang="scss">

</style>