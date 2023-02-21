<!--  -->
<template>
    <div class="tabBarItem" :class="{ 'active': isActive }" @click="changeUrl(path)">
        <slot name="text"></slot>
    </div>
</template>

<script setup>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//import 《组件名称》 from '《组件路径》';
import { useRoute, useRouter } from 'vue-router'
import { defineProps, computed } from 'vue';

// 在setup里边因为不能访问this，所以也没有this.$router和this.$route。
// 但是我们可以通过vue-router提供的函数来进行访问router：
// useRoute
// 返回当前路由地址。相当于在模板中使用 $route。必须在 setup() 中调用。
// useRouter
// 返回 router 实例。相当于在模板中使用 $router。必须在 setup() 中调用。


let props = defineProps(['path'])
const route = useRoute()
const router = useRouter()
//computed返回一个只读的响应式 ref 对象。该 ref 通过 .value 暴露 getter 函数的返回值，在template中使用不需要使用.value
let isActive = computed(() => route.path == props.path)
function changeUrl (link) {

    router.push(link)
}


</script>
<style scoped>
/*@import url(); 引入公共css类*/
.active {
    color: red;
}
</style>



