<template>
    <div class="toCc">送我亲爱的聪哥一朵小红花:</div>
     <!-- 容器 -->
    <div class="box">
        <!-- 花朵 -->
        <div class="flower">
            <!-- 花瓣 -->
            <div class="petal" style="--x:0"></div>
            <div class="petal" style="--x:1"></div>
            <div class="petal" style="--x:2"></div>
            <div class="petal" style="--x:3"></div>
            <div class="petal" style="--x:4"></div>
            <div class="petal" style="--x:5"></div>
            <!-- 花心 -->
            <div class="circle"></div>
        </div>
    </div>
</template>
<script>
export default {
  name: "redFlowerForYou",
};
</script>

<style lang="scss" scoped>

.toCc{
    color:royalblue;
    font-size: 24px;
    font-weight: bold;
}
/* 清除浏览器设置的默认边距，
使边框和内边距的值包含在元素的width和height内 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/* 使用flex布局，让内容垂直和水平居中 */
.box {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height:calc( 100vh - 300px);
}
/* 花朵 */
.flower {
    position: relative;
    width: 80px;
    height: 80px;
    transform-origin:  100% 100%;
    animation: rotate 3s linear infinite;
}
/* 花瓣 */
.petal {
    display: block;
    /* 花瓣的宽高等于花朵的宽高 */
    width: 80px;
    height: 80px;
    background: red;
    border-radius: 0 70px;
    position: absolute;
    /* 让不同的花瓣旋转为花朵 */
    transform-origin: 100% 100%;
    transform: rotate(calc(var(--x) * 60deg));
}
/* 花心 */
.circle {
    width: 100px;
    height: 100px;
    position: absolute;
    background: #fff200;
    border-radius: 50%;
    left: 30px;
    top: 30px;
    box-shadow: 0 0 50px yellow;
    background-image: radial-gradient(at 20% 30%, #fffa65, #f1c40f, #f1dc4b);
}
/* 花朵旋转动画 */
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
