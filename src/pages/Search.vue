<template>
  <div id="search">
    <div class="top">
      <input type="text" v-model="name" @keyup.enter="getName" placeholder="输入用户名">
      <button @click='getName'>点击搜索</button>
    </div>
    <div class="bottom">
      <span v-if="!search.getDone" v-html="search.loading"></span>
      <img :src="search.imgUrl" class="img" v-else>
    </div>
  </div>
</template>

<!-- <script>
import { mapActions, mapState } from 'vuex'
export default {
    data () {
        return {
            name: ''
        }
    },
    methods: {
        ...mapActions(['getMsg']),
        getName () {
            this.getMsg(this.name)
        }
    },
    computed: {
        ...mapState(['search'])
    }
}
</script> -->
<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
// console.log(store)
const name = ref('');
function getName () {
  getMsg(name.value)
}
const search = computed(() => store.state.search)
//从计算属性返回的值是派生状态，源状态变化，派生状态才变化，
//修改派生状态是无意义的，因此计算属性应当只读，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。
const getMsg = (name) => store.dispatch('getMsg', name)
</script>

<!-- <script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    // console.log(store)
    const name = ref('');
    function getName () {
      getMsg(name.value)
    }
    const search = computed(() => store.state.search)
    //从计算属性返回的值是派生状态，源状态变化，派生状态才变化，
    //修改派生状态是无意义的，因此计算属性应当只读，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。
    const getMsg = (name) => store.dispatch('getMsg', name)

    return {
      name,
      search,
      getName,
      getMsg
    }
  }
}
</script> -->



<style scoped>
* {
  margin: 0;
  padding: 0;
}

.top {
  margin-top: 30px;
}

.bottom {
  width: 200px;
  height: 200px;
  margin: auto;
  margin-top: 20px;
}

.img {
  width: 200px;
  height: 200px;
}
</style>
