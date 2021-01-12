<template>
        <a-sub-menu :key="menu.path">
            <template #title>
                <span>{{ menu.meta && menu.meta.title }}</span>
            </template>
            <template v-if="menu.children.length">
                <template v-for="item in menu.children">
                    <!-- 不存在子级的菜单 -->
                    <a-menu-item v-if="!item.children" :key="item.path">
                        <router-link :to="item.path">{{ item.meta && item.meta.title}}</router-link>
                    </a-menu-item>
                    <!-- 存在子级的菜单 - 循环调用此组件 -->
                    <!-- 自调用可直接使用，无需导入 -->
                    <Menu :menu="item" v-else :key="item.path"/> 
                </template>
            </template>
        </a-sub-menu>
</template>
<script>
    export default {
        name: "Menu",
        props: {
            menu: {
                type: Object,
                default: () => ({}) //设置默认值为默认对象
            }
        },
        setup() {

        },
    }
</script>