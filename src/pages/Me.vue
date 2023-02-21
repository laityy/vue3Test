<template>
    <div>鼠标坐标为:x:{{ x1 }}-----y:{{ x2 }}</div>
    <button @click="addAge">点击触发mutation方法</button>
    <div>{{ name }}:{{ age }}</div>
</template>

<script setup>
import savePoint from 'hooks/usePoint'
import { computed } from 'vue'
import { useStore } from 'vuex'
import _store from 'store'

const store = useStore()  //与this.$store是等效的
//useStore用于获取store，store从main.js中引入，然后使用  与从stroe文件中引入完全相同
console.log('store === _store:', store === _store)//true  前者是用useStore返回，后者直接从文件引入

let name = computed(() => store.state.firstName + store.state.lastName)
let age = computed(() => store.state.age)


function addAge () {
    store.commit('addAge', { p: 1 })
}

let { x1, x2 } = savePoint()


</script>

<style></style>
