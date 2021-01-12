<template>
    <div id="header">
        <div class="header-menu">
            <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                    <img src="../../../assets/avatar-1.png" class="header-right" />
                </a>
                <template #overlay>
                    <a-menu>
                        <a-menu-item key="1">
                            <div class="menu-item">17774004558</div>
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item key="2">
                            <div class="menu-item menu-lang">
                                <span v-for="item in data.lang" :key="item.value" @click="toggleLang(item.value)"
                                    :class="{'current': data.lang_current == item.value}">{{item.label}}</span>
                            </div>
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item key="3">
                            <div class="menu-item">
                                {{ $t('header_menu.logout') }}
                            </div>
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
        </div>
    </div>
</template>
<script>
    import {
        reactive
    } from 'vue';
    // 语言
    import {
        useI18n
    } from 'vue-i18n';
    export default {
        name:"Header",
        setup() {
            // 扩展语言
            const {
                locale
            } = useI18n();
            const data = reactive({
                lang: [{
                    label: '中文',
                    value: 'ch'
                }, {
                    label: '英文',
                    value: 'en'
                }],
                lang_current: 'ch'
            })

            const toggleLang = (lang) => {
                // console.log("lang", lang);
                locale.value = lang
                data.lang_current = lang;
            }

            return {
                data,
                toggleLang
            }
        }
    }
</script>
<style lang="scss" scoped>
    #hearder {
        padding: 0 20px;
        height: 64px;
    }

    .header-menu {
        float: right;

        .header-right {
            width: 50px;
            height: 50px;
            border-radius: 50px;
            margin-top: 7px;
            margin-right: 10px;
        }

    }

    .menu-item {
        padding: 8px 10px;
        font-size: 14px;
        // font-family: '黑体';
        color: #333333;
    }

    .menu-lang {
        color: #aeaeae;

        span {
            margin-right: 10px;
        }

        .current {
            color: #333333;
        }
    }
</style>

<style lang='scss'>
</style>