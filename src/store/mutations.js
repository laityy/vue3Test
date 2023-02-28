import { getData } from '../network'
//更改 Vuex 的 store 中的 state 的唯一方法是提交(commit) mutation
//mutatioons里面方法的第一个参数是state
export default {
    getUserMsg(state, name) {
        getData(name).then(
            (response) => {
                // console.log(response)
                state.search.imgUrl = response.data.avatar_url
                state.search.getDone = true
            },
            (error) => {
                console.log(error)
                if (state.search.getDone == false) {
                    state.search.loading = `<p style="color:red">加载出错！</p>`
                }
            }
        )
    },
}

// 可以在组件中使用 this.$store.commit('xxx',options) 提交 mutation，
// 或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。
