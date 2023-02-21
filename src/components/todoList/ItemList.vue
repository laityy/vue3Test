<!--  -->
<template>
    <div class="itemlist">
        <h1 class="h1">ToDoList</h1>
        <input type="text" placeholder="请输入内容" @keyup.enter="add" v-model="inputData" />
        <button @click="add" class="button">添加事件</button>
        <Items :msg="msg" @deleteItem="itemDelete" />
    </div>
</template>

<script setup>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Items from 'components/todoList/Items.vue'
import { ref, reactive, onBeforeUpdate, onUpdated } from 'vue'

let inputData = ref('') //文本框内容
let msg = reactive([]) //列表数据数组
function add () {
    if (inputData.value == '') {
        alert('输入不能为空')
    } else {
        msg.push(inputData.value)
        inputData.value = ''
    }
}
function itemDelete (index) {
    msg.splice(index, 1)
}
//组件在数据变化，重新渲染时调用
onBeforeUpdate(() => {
    console.log('onBeforeUpdate')
})
onUpdated(() => {
    console.log('onUpdated')
})
</script>
<style scoped>
/*@import url(); 引入公共css类*/
.itemlist {
    padding: 35px 50px 50px 50px;
    margin: 0 auto;
}

.button {
    margin-left: 60px;
}

.h1 {
    color: #7983c6;
    font-weight: 700;
}
</style>
