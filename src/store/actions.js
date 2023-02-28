// Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象， 注意context不是store实例本身

//Action 类似于 mutation，不同在于：

// Action 提交commit的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
export default {
    getMsg({ state, commit }, name) {
        state.search.loading = '加载中。。。。'
        state.search.getDone = false
        commit('getUserMsg', name)
        //可以向 store.commit 传入额外的参数，即 mutation 的载荷（payload）
    },
}
