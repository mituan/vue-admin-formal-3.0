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
           <a-menu-item v-if="hasOnlyChildren(item)" :key="item.path">
             <router-link :to="item.children[0].path"> 
                <svg-icon :iconName="item.meta && item.meta.icon" className="aside-svg" ></svg-icon>
               {{ item.children[0].meta && item.children[0].meta.title }}</router-link>
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
  // import SvgIcon from '@/components/Svgicon'
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

      // 检测是否只有一个子路由
      const hasOnlyChildren = (data) => {
        //不存在子级的情况
        if(!data.children){ return false;}
        //过滤隐藏的子级
        const routers = data.children.filter(item => item.hidden ? false : true);
        //判断最终结果
        if(routers.length === 1){ return true; }
        return false;
      }

      return {
        data,
        routers,
        selectMenu,
        openMenu,
        hasOnlyChildren
      }
    },
  }
</script>
<style lang="scss" scoped>
#logo {
  padding: 14px 0px 10px;
  border-bottom: 1px solid #000;
  text-align: center;
  img {
    height: 50px;
    display: inline;
  }
}
</style>