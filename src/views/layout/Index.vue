<template>
    <section>
        <a-layout id='layout-main'>
            <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible width="255">
                 <LayoutAside />
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0">
                    <LayoutHeader />
                </a-layout-header>
                <a-layout-content
                    :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                    <LayoutMain />
                </a-layout-content>
            </a-layout>
        </a-layout>
    </section>
</template>
<script>
    import LayoutAside from './components/aside/index';
    import LayoutHeader from './components/Header';
    import LayoutMain from './components/Main';
import { reactive, toRefs } from 'vue';

    export default {
        components: {
            LayoutAside,
            LayoutHeader,
            LayoutMain,
        },

        setup(props){
            const data = reactive ({
                selectedKeys:['1'],
                collapsed: false,
            })

            return {
                ...toRefs(data)
            }
        }
    }
</script>
<style lang="scss">
    #layout-main {
        height: 100vh;
    }
    
</style>