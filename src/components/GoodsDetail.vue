<template>
	<div>
		<div id="goodsDetail">
			商品详情页
			<div>{{$route.params}}</div>
			<button v-on:click="goBuy($route.params.id)">点击购买</button>
			<button v-on:click="goBuy(isLogin)">点击购买,参数isLogin</button>
			<button @click="checkLogin">checkLogin</button>
			<div>{{isLogin}}</div>

			<!-- <Slider></Slider> -->
			<div class="detailSwiper">
		      	<mt-swipe :auto="4000">
					<mt-swipe-item><img src="../assets/logo.png" alt=""></mt-swipe-item>
					<mt-swipe-item><img src="../assets/logo.png" alt=""></mt-swipe-item>
					<mt-swipe-item><img src="../assets/logo.png" alt=""></mt-swipe-item>
				</mt-swipe>
			</div>

			<div class="wrapper-con border_b pd30">
				<h1 class="fs32 color-black">Boucheron宝诗龙 布龙 女士淡香水50ml</h1>
				<h2 class="fs26 color-gray">三八女人节特价限量免运费</h2>
				<p class="fs36 color-red">¥6400</p>
			</div>

			<div class="wrapper-con pd30">
				<div class="t-sku fs26">
					<dl>
						<dt class="fs24">颜色：</dt>
						<dd> 
							<a href="javascript:;" v-for="(colorItem,key) in colors" :class="{active:key==currentColor}" v-on:click="currentColor=key" v-text="colorItem"></a>
							<!-- <a href="javascript:;" v-for="(colorItem,key) in colors" :class="{active:key==currentColor}" v-on:click="selectedProduct()" v-text="colorItem"></a> -->
						</dd>
					</dl>
					<dl>
						<dt class="fs24">尺码：</dt>
						<dd>
							<a href="javascript:;" v-for="(sizesItem,key) in sizes" :class="{active:key==currentSize}" v-on:click="currentSize=key" v-text="sizesItem"></a>
						</dd>
					</dl>
				</div>
				<div class="hidden">
					<p class="l fs24 t-skuSizett">数量：</p>
					<div class="l t-skuSize">
						<a href="javascript:" class="o-min">-</a>
						<input class="o-val" type="text" name="" Value="1" autocomplete="off" readonly="readonly">
						<a href="javascript:" class="o-max">+</a>
					</div>
				</div>
			</div>

			<div class="wrapper-con border_t pd30">
				<h2 class="fs32 color-black">商品详情</h2>
				<div class="text-block fs24">
					法国进口红酒 拉菲奥希耶古拉菲奥希耶古拉菲奥希耶古堡干红葡萄酒法国进口红酒 拉菲奥希耶古拉菲奥希耶古拉菲奥希耶拉菲奥希耶古拉菲奥希耶古拉菲奥希耶古堡干红葡萄酒法国进口红酒 拉菲奥希耶古拉菲奥希耶古拉菲奥希耶拉菲奥希耶古拉菲奥希耶古拉菲奥希耶古堡干红葡萄酒法国进口红酒 拉菲奥希耶古拉菲奥希耶古拉菲奥希耶
				</div>
			</div>
		</div>
		<detailFooter :goodId="goodId"></detailFooter>
	</div>
	
</template>
<script>
	import {mapState, mapActions,mapGetters} from 'vuex'

	// import Slider from './Slider.vue'
	import DetailFooter from './DetailFooter.vue'


	import axios from 'axios'
	export default{
	    name:'goodsDetail',
	    data(){
	      return {
	      	goodId:21,
	      	currentColor:1,
	      	colors:['红色','绿色','蓝色','深空灰','黑','宝石蓝'],
	      	currentSize:1,
	      	sizes:['S','M','L','XL','XXL']
	      }
	    },
		components:{
			// Slider,
			DetailFooter
		},

		watch: {
			isLogin: function (val, oldVal) {
				console.log('new: %s, old: %s', val, oldVal)
				if(val){
					console.log('isLogin变化，已经登录')
				}else{
					console.log('isLogin变化，未登录')
				}
			}
		},
	    computed:mapGetters([
	      'isLogin'
	    ]),
	  //   methods:mapActions([
			// 'checkLogin',
			// "getSliders"
	  //   ]),
	    methods:{
	    	...mapActions(['checkLogin','getSliders']),
			goBuy(n){
				// console.log('去购买，检测是否登录')
				// this.checkLogin();
				// var _this = this;
				// setTimeout(function(){
				// 	console.log(_this.isLogin)
				// },1000)
				// this.checkLogin01();
				// console.log(this.isLogin)

				if(window.sessionStorage){
					if( sessionStorage.getItem('ylUserInfo')!='' && (window.sessionStorage.length)!=0 ){
						console.log(sessionStorage.getItem('ylUserInfo')) ;
						console.log('已登录，直接购买')
					}else{
						console.log('没有登录');//如果没有登录状态则跳转到登录页
						this.$router.push('/login');
					}
				}else{ 
					alert("浏览暂不支持本地存储") 
				} 
			},
			setStorage(ylzx,nameval,tokenval){
			 	sessionStorage.setItem(ylzx,JSON.stringify({'name':nameval,'token':tokenval}));
			 	console.log( JSON.parse(sessionStorage.getItem(ylzx)).name )
			},

			// setCookie: function (name,nameVal,paswd,paswdVal,days) {
			//     var d = new Date;
			//     d.setTime(d.getTime() + 24*60*60*1000*days);
			//     window.document.cookie = name + "=" + nameVal + ";path=/;expires=" + d.toGMTString();
			//     window.document.cookie = paswd + "=" + paswdVal + ";path=/;expires=" + d.toGMTString();
			//     console.log(window.document.cookie)
			// },

			// getCookie: function (name) {
			//     var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
			//     return v ? v[2] : null;
			// },

			// deleteCookie: function (name) {
			//     // this.setCookie(name, '', -1);
			//     window.document.cookie = name + "= ;path=/;expires=-1";
			// },

			// 购物前检测是否已登录
			checkLogin01(){
				var cookieName = this.getCookie('ylUserName') ;
				var cookiePswd = this.getCookie('ylPswd');
				console.log(cookieName+"|"+cookiePswd);
				var loginFlag = false;
				if(cookieName&&cookiePswd){
					var loginFlag = false;
					axios.get('/src/mock/user.json').then((response)=>{
						for (var value of response.data.users) {
  							if(value.username==cookieName&&value.password==cookiePswd){
	  							console.log(value);
	  							this.isLogin = true;
	  							console.log('已登录可以继续购买');
  							}
						}
						if(!loginFlag){
							console.log('没有2登录');//如果没有登录状态则跳转到登录页
							this.$router.push('/login');
  							// return false;
						}
					});
				}else{
					console.log('没有1登录');//如果没有登录状态则跳转到登录页
					this.$router.push('/login');
				}
				// return loginFlag;
			},
			storageLogin(){

			},

			// selectedProduct: function (product) {
			// 	if(typeof product.checked == "undefined"){
			// 		//Vue.set(product,"checked",true);
			// 		this.$set(product,"checked",true);
			// 	}else{
			// 		product.checked = !product.checked;
			// 	}
			// 	this.calcTotalMoney();
			// 	this.isCheckAll();
			// }
			selectedProduct: function () {
				console.log(123)
			},
			getProductInfo: function () {
				axios.get('/src/mock/goodSku.json').then((response)=>{
					// var a = JSON.parse(response.data);
					console.log( response.data)
					// for (var value of JSON.parse(response.data) ) {
    	// 				console.log(value);
					// }
					// if(response.data.list){
					// 	commit(types.GET_SLIDERS,response.data.list);
					// }
				});
			}

	    },
	  //   methods:{
	  //   	// ...mapActions(['checkLogin']),
			// goBuy(n){
			// 	alert('去购买，检测是否登录')
			// 	// this.checkLogin();
			// 	// checkLogin();
			// },
			// // // 购物前检测是否已登录
			// // checkLogin(){
			// // 	var cookieName = this.getCookie('ylUserName') ;
			// // 	var cookiePswd = this.getCookie('ylPswd');
			// // 	console.log(cookieName+"|"+cookiePswd);
			// // 	if(cookieName&&cookiePswd){
			// // 		var loginFlag = false;
			// // 		axios.get('/src/mock/user.json').then((response)=>{
			// // 			for (var value of response.data.users) {
  	// // 						if(value.username==cookieName&&value.password==cookiePswd){
	  // // 							console.log(value);
	  // // 							loginFlag = true;
	  // // 							alert('已登录可以继续购买')
  	// // 						}
			// // 			}
			// // 			if(!loginFlag){
			// // 				alert('没有2登录');//如果没有登录状态则跳转到登录页
			// // 				this.$router.push('/login');
			// // 			}
			// // 		});
			// // 	}else{
			// // 		alert('没有1登录');//如果没有登录状态则跳转到登录页
			// // 		this.$router.push('/login');
			// // 	}
			// // },

			// setCookie: function (name,nameVal,paswd,paswdVal,days) {
			//     var d = new Date;
			//     d.setTime(d.getTime() + 24*60*60*1000*days);
			//     window.document.cookie = name + "=" + nameVal + ";path=/;expires=" + d.toGMTString();
			//     window.document.cookie = paswd + "=" + paswdVal + ";path=/;expires=" + d.toGMTString();
			//     // console.log(window.document.cookie)
			// },

			// getCookie: function (name) {
			//     var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
			//     return v ? v[2] : null;
			// },

			// deleteCookie: function (name) {
			//     // this.setCookie(name, '', -1);
			//     window.document.cookie = name + "= ;path=/;expires=-1";
			// }
	  //   },
		mounted(){
			// console.log(this.isLogin)
			this.getSliders();
			// sessionStorage.clear()
			// var pageId = this.$route.params.index;
			this.setStorage('ylUserInfo','usernameaaa','token123456');
			// this.setCookie('ylUserName','usernameaaa','ylPswd','passwordaaa',1);
			this.getProductInfo()
			// this.deleteCookie('ylUserName');
			// this.deleteCookie('ylPswd');
		},

    }
</script>
<style>
	.detailSwiper{

        width: 100%;
        padding-top: 100%;
        position: relative;
	}
    .detailSwiper .mint-swipe{
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
    }
    .detailSwiper .mint-swipe img{
    	width: 100%;
    }
    #goodsDetail{
        padding-bottom: 1.2rem;
    }
    #goodsDetail .title p{
        font-size: 0.24rem;
        line-height: 0.3rem;
    }
    .t-sku dt{padding:.1rem 0 .2rem}
.t-sku dd{ overflow:hidden;}
.t-sku a{ float:left; line-height:.58rem; margin:0 .2rem .2rem 0; padding:0 .24rem; border:1px solid #dadada; color:#736E6A; border-radius:.08rem;}
.t-sku .active{ border-color:#bca249; color:#bca249;
  -webkit-box-shadow: 0 0 1px #bca249 inset;
  box-shadow: 0 0 1px #bca249 inset
}


#goodsDetail .mint-swipe{ height:7.5rem;}
#goodsDetail .mint-swipe:after{ content:''; display:block; width:100%; height:1px; background:#eee; position:absolute; right:0; bottom:0; left:0; z-index:6;
  -webkit-box-shadow:0 0 10px rgba(0,0,0,.8);
  box-shadow:0 0 10px rgba(0,0,0,.8)
}
#goodsDetail .mint-swipe-item{ height:100%}
#goodsDetail .mint-swipe-indicator{ opacity:1; background-color:#dcdcdc}
#goodsDetail .mint-swipe-indicator.is-active{ background-color:#bca249}
#goodsDetail .mint-swipe img{ width:100%; height:100%}


.t-sku dt{padding:.1rem 0 .2rem}
.t-sku dd{ overflow:hidden;}
.t-sku a{ float:left; line-height:.58rem; margin:0 .2rem .2rem 0; padding:0 .24rem; border:1px solid #dadada; color:#736E6A; border-radius:.08rem;}
.t-sku .active{ border-color:#bca249; color:#bca249;
  -webkit-box-shadow: 0 0 1px #bca249 inset;
  box-shadow: 0 0 1px #bca249 inset
}

.t-skuSizett{ line-height:.58rem;}
.t-skuSize{ width:2.2rem; height:.58rem;; line-height:.58rem; border:1px solid #ddd; border-radius:.03rem; position:relative;}
.t-skuSize .o-min, .t-skuSize .o-max{ width:.58rem; font-size:0; position:absolute; top:0;}
.t-skuSize .o-min:before,
.t-skuSize .o-max:before,
.t-skuSize .o-max:after{ content:''; display:block; background:#979797; position:absolute; top:50%; left:50%}
.t-skuSize .o-min:before,
.t-skuSize .o-max:before{ width:.24rem; height:.04rem; margin:-0.02rem 0 0 -0.12rem}
.t-skuSize .o-max:after{ width:.04rem; height:.24rem; margin:-0.12rem 0 0 -0.02rem}
.t-skuSize .o-min{ left:0; border-right:1px solid #ddd}
.t-skuSize .o-max{ right:0; border-left:1px solid #ddd}
.t-skuSize .o-val{ height:.46rem; border:0 none; width:100%; text-align:center; color:#333}
.t-foot .ico50-collection,
.t-foot .ico50-shopBag{ margin-bottom:.05rem}

.t-shopBagNumber{ position:absolute; top:.1rem; padding:.03rem .1rem; background:#FF4D4D; color:white; border-radius:.12rem;}

</style>