const state = {//设置全局访问的state对象
    //初始化的值
    num: 1000
}
//派生的数据，会被缓存
const getters = {
    //格式化时间
    data(state) {
        let date = new Date();
        let year = date.getFullYear()
    }
}
//模块中同步的改变
const mutations = {
    changeNum(state, {payload}) {
        state.num = payload == '+' ? state.num + 1 : state.num - 1
    }
}
//模块中的异步改变
const actions = {
    changeNumAsync({commit}, action) {
        return new Promise((reslove, reject) => {
            setTimeout(() => {
                commit('changeNum', action)
                reslove();
            },1000);
        })
    }
}
export default {
    //命名空间
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}