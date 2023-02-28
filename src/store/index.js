//vuex将数据存储在浏览器内存中
import { createStore } from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

const store = createStore({
    state,
    actions,
    mutations,
})
// console.log('store对象：',store) //store对象包含commit，dispatch方法，还有state属性-用于保存状态

export default store

//提交(commit)mutation，分发(dispatch)action
