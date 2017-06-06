import Vue from 'vue'
import Vuex from 'vuex'
// import vueRouter from 'vue-router'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex);
// Vue.use(vueRouter);

/* 项目全局State */
const state = {
	isLogin:false,
	isFixedHeader: false,
	isShowSearchBar: false,
	isShowMask: false,
	sliders: [],
	hotProducts: [],
	hotShops: [],
	products:[],
	num: 5,
	busy: false,
	isShowLoadingTips: false,
	isShowLoadedTips: false
}

/* Store实例 */
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})