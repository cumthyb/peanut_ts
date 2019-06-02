import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    currentView: 'create',
    eidtCourseId: ''
  },
  mutations: {
    login(state, data) {
      // 这里的 `state` 对象是模块的局部状态
      // Cookies.set('name', data.name, { expires: 7 })
      // Cookies.set('token', data.token, { expires: 1.0 / 24.0 })
      state.user = Object.assign({}, state.user, data)
      console.log('login', data)
    },
    logout(state, data) {
      // 这里的 `state` 对象是模块的局部状态
      debugger
      state.user = {}
      // Cookies.remove('name')
      Cookies.remove('jwt')
      Cookies.remove('koa:sess')
      Cookies.remove('koa:sess.sig')

    },
    changeCurrentView(state, data) {
      // 这里的 `state` 对象是模块的局部状态
      state.currentView = data.view
      state.eidtCourseId = data.id
    },
    changeCourseId(state, data) {
      state.eidtCourseId = data
    }
  },
  actions: {

  },
  getters: {
    user(state) {
      console.log('getters-user', state.user)
      return state.user
    },
    token(state) {
      return state.user.token
    },
    currentView(state) {
      return state.currentView
    },
    eidtCourseId(state) {
      return state.eidtCourseId
    }
  }
})
