<template>
    <div>Search</div>
    <p>{{ age }}</p>
    <h1>{{ name_mixin }}</h1>
    <button @click="hello">点击</button>
    <button @click="aaa">mixin</button>
</template>

<script>
import myMixins from 'mixins'

export default {
    mixins: [myMixins], //mixins底层会调用forEach方法
    methods: {
        aaa () {
            console.log(myMixins); //返回一个对象{methods: {…}, data: ƒ, mounted: ƒ}
        }
    },
    computed: {
        age () {
            return this.$store.state.age
        }
    },
}
</script>

<style></style>
