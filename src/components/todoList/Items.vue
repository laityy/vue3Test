<template>
    <div class="items">
        <Item v-for="(d, index) in msg_arr" :key="index">
            <template v-slot:item>
                <!-- <template #item> -->
                <!-- v-slot的简写为#
                    将多个插槽内容传入到各自目标插槽的出口。此时就需要用到具名插槽了：
                    要为具名插槽传入内容，我们需要使用一个含 v-slot 指令的 <template> 元素，并将目标插槽的名字传给该指令 -->
                <li>{{ index + 1 }}---{{ d }}</li>
                <button @click="$emit('deleteItem', index)">删除/已完成</button>
            </template>
        </Item>
        <!-- <template></template> template快捷键tem-->
    </div>
</template>

<script setup>
//在使用 <script setup> 的单文件组件中，导入的组件可以直接在模板中使用，无需注册：
//在使用 <script setup> 的单文件组件中，props 可以使用 defineProps() 宏来声明：传入 字符串数组
//在使用 <script setup> 的单文件组件中，emits 可以使用 defineEmits() 宏来声明：传入 字符串数组
import { defineEmits, defineProps, reactive } from 'vue'
import Item from './Item.vue'
// import Item from 'components/Item.vue' //components已经配置别名，可通过这种方式引入
defineEmits(['deleteItem']) //声明自定义事件，可写可不写
let props = defineProps(['msg'])

//console.log(props.msg)//Proxy {0: '2', 1: '3', 2: '4', 3: '5', 4: '6', 5: '67'}
let msg_arr = reactive(props.msg) //接收props传过来的数据用于渲染列表（v-for in msg_arr）

//console.log(msg_arr)//Proxy {0: '2', 1: '3', 2: '4', 3: '5', 4: '6', 5: '67'}
// function deleteItem (index) {
//     msg_arr.splice(index, 1)
//     console.log(props);
//     console.log('props.msg', props.msg);
//     console.log('msg_arr = reactive(props.msg)', msg_arr);
// }
</script>
<style scoped>
/*@import url(); 引入公共css类*/
.items {
    margin-top: 35px;
}
</style>
