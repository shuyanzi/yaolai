import axios from 'axios'
import * as types from './mutation-types.js'

/* 异步操作 */
export default {

	/*loading*/
	hideLoading:({commit})=>{
		commit(types.HIDE_LOADING)
	},
	showLoading:({commit})=>{
		commit(types.SHOW_LOADING)
	},
	
	handlerScroll({commit,state}){
		let _top_ = document.body.scrollTop;
			if(_top_>50){
				commit(types.IS_FIXED_HEADER, true);
			}else{
				commit(types.IS_FIXED_HEADER, false);
			}
	},
	getSliders({commit,state}) {
		axios.get('/src/mock/home/sliders.json').then((response)=>{
			console.log(response)
			// if(response.data.list){
			// 	commit(types.GET_SLIDERS,response.data.list);
			// }
		});
	},
	// 购物前检测是否已登录
	checkLogin({commit,state}){
		// alert(123)

		// getCookie(name) {
		//     var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
		//     return v ? v[2] : null;
		// };
		function getCookie(name) {
		    var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
		    return v ? v[2] : null;
		}
		var cookieName = getCookie('ylUserName') ;
		var cookiePswd = getCookie('ylPswd');
		// console.log(cookieName)
		console.log(document.cookie)
		// console.log(state.loginFlag)
		// console.log(cookieName+"|"+cookiePswd);
		if(cookieName&&cookiePswd){
			var loginFlag = false;
			axios.get('/../src/mock/user.json').then((response)=>{
				for (var value of response.data.users) {
					if(value.username==cookieName&&value.password==cookiePswd){
						console.log(value);
						loginFlag = true;
						console.log('已登录可以继续购买')
						commit(types.IS_LOGIN, true);
					}
				}
				if(!loginFlag){
					console.log('没有2登录');//如果没有登录状态则跳转到登录页
					// this.$router.push('/login');
					commit(types.IS_LOGIN, false);
				}
			});
		}else{
			console.log('没有1登录');//如果没有登录状态则跳转到登录页
			// this.$router.push('/login');
			commit(types.IS_LOGIN, false);
		}
	},

	// getCookie: function (name) {
	//     var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
	//     return v ? v[2] : null;
	// },

	// deleteCookie: function (name) {
	//     // this.setCookie(name, '', -1);
	//     window.document.cookie = name + "= ;path=/;expires=-1";
	// }

	getHotProducts({commit,state}){
		axios.get('/mock/products/products.json').then((response)=>{
			let result = response.data.list;
			if(result){
				commit(types.GET_HOT_PRODUCTS,result.slice(0,6));
			}
		});
	},
	getHotShops({commit,state}){
		state.busy = true;
		commit(types.IS_SHOW_LOADING_TIPS,true);
		axios.get('/mock/home/hot_shop.json').then((response)=>{
			commit(types.IS_SHOW_LOADING_TIPS,false);
			let result = response.data.list.slice(state.num-5,state.num);
			if(result.length !== 0){
				commit(types.GET_HOT_SHOPS,result);
				state.busy = false;
				state.num+=5;
			}else{
				commit(types.IS_SHOW_LOADED_TIPS,true);
			}
		})
	},
	getProducts({commit,state}){
		state.busy = true;
		commit(types.IS_SHOW_LOADING_TIPS,true);
		axios.get('/mock/products/products.json').then((response)=>{
			commit(types.IS_SHOW_LOADING_TIPS,false);
			let result = response.data.list.slice(state.num-5,state.num);
			if(result.length !== 0){
				commit(types.GET_PRODUCTS,result);
				state.busy = false;
				state.num+=5;
			}else{
				commit(types.IS_SHOW_LOADED_TIPS,true);
			}
		})
	}
}

