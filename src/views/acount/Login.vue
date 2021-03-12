<template>
    <div class="account">
        <div class="form-warp">
            <div class="fs-30 text-center">管理系统</div>
            <a-form name='custom-validation' ref="ruleForm" v-bind="layout">
                <a-form-item>
                    <label>用户名</label>
                    <a-input type='text' autocomplete='off' />
                </a-form-item>
                <a-form-item>
                    <label>密码</label>
                    <a-input type='password' autocomplete='off' />
                </a-form-item>
                <a-form-item>
                   <Captcha></Captcha>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type='submit' block> 登 录 </a-button>
                    <a-button type="primary" @click="submit" block> 测试按钮 </a-button>
                </a-form-item>
            </a-form>
             <div class="text-center">
                <router-link to='/forget' class="color-white">忘记密码</router-link>|
                <router-link to='/register' class="color-white">注册</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { onMounted, reactive, toRefs, ref , getCurrentInstance } from 'vue';
    // API
    import { GetCode } from '@/api/account';
    import Captcha from '@/components/Captcha/index.vue';
    export default {
        name: 'Login',
        components:{
            Captcha
        },
        setup(props) {
            console.log(getCurrentInstance());
            //相当于 Vue2.0 的 this 对象
            // ctx 获取实例上下文
            // const { ctx } = getCurrentInstance(); //ctx 对象 仅在"开发环境"可获得 属性 和 方法,"生产环境" 无法获得。
            const { proxy } = getCurrentInstance();// proxy 与 ctx 东西一样，支持开发环境和生成环境的使用
            console.log("proxy",proxy); 

            const formConfig = reactive({
                layout: {
                    // labelCol: {
                    //     span: 10
                    // },
                    wrapperCol: {
                        span: 24
                    },
                },
            })
            const data = toRefs(formConfig);
            // const submit = () => {
            //     // proxy.$axios.post('getSms');
            //     GetCode({'id':'1222'}).then(res => {
            //         console.log("res",res);
            //     })
            // }
            

            /**
             * Promise  对象理解
             */
            // const promise_1 = () => {
            //     return new Promise((resolve,reject) => {
            //         reject('bbbb');
            //     })
            // }

            

            

            return {
                ...data,submit
            };
        },
    }
</script>
<style lang="scss">
    @import './style.scss';
</style>