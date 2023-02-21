<template>
    <div class="app">
        <tab-bar />
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
            <!-- 在 DOM 模板中使用时，<KeepAlive>应该被写为 <keep-alive>。 -->
        </router-view>
    </div>
</template>

<script setup>
import TabBar from 'components/common/TabBar/TabBar.vue'
// export default {
//     name: 'App',
//     data () {  //data必须是一个函数，防止组件在复用的时候产生关联关系，从而造成一种干扰
//         return {
//             aa: 11111,
//         }
//     },
//     components: {
//         TabBar,
//     },
//     created () {
//         // console.log(this);
//         // console.log(this.$router);
//         // console.log(this.$data);

//     }
// }
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    border: dashed red;
    width: 500px;
    margin: auto;
    margin-top: 60px;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
