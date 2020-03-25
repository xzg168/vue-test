import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  //存储全局变量的数据
  state: {
    user: JSON.parse(localStorage.getItem('userInfo')) || {},
  },
  //提供获取state数据的方法
  getters: {
    // 参数列表state指的是state数据
    getUserFn(state) {
      return state.user;
    },
  },
  // 提供存储设置stae数据的方法
  mutations: {
    // state指的是state的数据
    // info 传递过来的数据
    setUser(state, info) {
      localStorage.setItem('userInfo', JSON.stringify(info));
      state.user = info; //将传参设置给state的user
    },
  },
  // 提供跟后台接口交互的方法,并调用mutations提供的方法
  actions: {
    // 设置用户信息
    // 参数列表：{commit, state}
    // state指的是state数据
    // commit调用mutations的方法
    // info就是调用此方法时要传的参数
    setUserInfo({ commit, state }, info) {
      // 跟后台打交道
      // 调用mutaions里面的方法
      commit('setUser', info);
    },
  },
  // 分割模块
  modules: {},
});
