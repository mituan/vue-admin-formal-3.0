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
                </a-form-item>
            </a-form>
             <div class="text-center">
                <a class="color-white">忘记密码</a>|
                <router-link to='/register'>注册</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { onMounted, reactive, toRefs, ref } from 'vue';
    import Captcha from '@/components/Captcha/index.vue';
    export default {
        name: 'Login',
        components:{
            Captcha
        },
        setup(props) {
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

            return {
                ...data,
            };
        },
    }
</script>
<style lang="scss">
    @import './style.scss';
</style>