<template>
	<div id="goodslist">
		商品列表页
		<div>{{$route.params}}</div>
		<div>{{$route.params.id}}</div>
		<div>
			<a href="/goodsDetail/1">点击商品</a>
		</div>


		<div class="bg-white fixed abs-trl" style="z-index:10">
			<div class="border_b d-box d-boxc top-search">
				<div class="d-box d-boxw bg-gray o-redius m-l">
					<div class="d-box d-boxc"><i class="ico ico50 ico50-search"></i></div>
					<a href="javascript:" class="d-box d-boxw"></a>
				</div>
				<a href="javascript:" class="d-box d-boxc" v-on:click="vmtoggle=!vmtoggle"><i class="ico ico50 ico50-sortswitch" v-bind:class="{ico50sortswitch:vmtoggle}"></i></a>
			</div>
			<div class="rel">
				<div class="d-flex border_b text-c t-screenbox">
					<a href="javascript:" class="d-flexw" v-on:click="orderByZH()"><span class="j_toggles">综合排序</span><i class="rel t-screenbox-graphicalA"></i></a>
					<a href="javascript:" class="d-flexw" v-on:click="priceFlag()" v-bind:class="{active:toggleClass}">价格排序<i class="rel t-screenbox-graphicalB"></i></a>
				</div>
				<div class="border_b abs bg-white t-screenbox-list animated flipInX" v-if="toggle">
					<a href="javascript:" class="color-yellow">综合排序</a>
					<a href="javascript:">新品优先</a>
				</div>
			</div>
		</div>
		<a href="javascript:" class="t-mask" v-if="toggle" v-on:click="clearMask()"></a>

		<div class="bg-gray fixed goodslist-container hidden" id="goodslist-container">
			<ul class="lb fs26 t-list" v-bind:class="{'t-list-one':!vmtoggle,'t-list-two':vmtoggle}">
				<li>
					<a href="/goodsDetail/1">
						<div class="o-img img01">
							<img src="/src/assets/logo.png">
						</div>
						<div class="o-con">
							<h2 class="p1 fs32 color-black text-ellipsis">拉菲奥希耶</h2>
							<p class="p2 color-gray text-block">古堡干红葡萄酒 750m</p>
							<p class="p3 color-red">¥ <span class="fs32">64</span></p>
						</div>
					</a>
				</li>
				<li>
					<a href="/goodsDetail/1">
						<div class="o-img img01">
							<img src="/src/assets/logo.png">
						</div>
						<div class="o-con">
							<h2 class="p1 fs32 color-black text-ellipsis">拉菲奥希耶</h2>
							<p class="p2 color-gray text-block">古堡干红葡萄酒 750m 古堡干红葡萄酒 750m 古堡干红葡萄酒 750m 古堡干红葡萄酒 750m 古堡干红葡萄酒 750m</p>
							<p class="p3 color-red">¥ <span class="fs32">64</span></p>
						</div>
					</a>
				</li>
				<li>
					<a href="/goodsDetail/1">
						<div class="o-img img01">
							<img src="/src/assets/logo.png">
						</div>
						<div class="o-con">
							<h2 class="p1 fs32 color-black text-ellipsis">拉菲奥希耶</h2>
							<p class="p2 color-gray text-block">古堡干红葡萄酒 750m 古堡干红葡萄酒 750m 古堡干红葡萄酒 750m 古堡干红葡萄酒 750m 古堡干红葡萄酒 750m</p>
							<p class="p3 color-red">¥ <span class="fs32">64</span></p>
						</div>
					</a>
				</li>
				<li>
					<a href="/goodsDetail/1">
						<div class="o-img img01">
							<img src="/src/assets/logo.png">
						</div>
						<div class="o-con">
							<h2 class="p1 fs32 color-black text-ellipsis">拉菲奥希耶</h2>
							<p class="p2 color-gray text-block">古堡干红葡萄酒 750m 古堡干红葡萄酒 750m 古堡干红葡萄酒 750m 古堡干红葡萄酒 750m 古堡干红葡萄酒 750m</p>
							<p class="p3 color-red">¥ <span class="fs32">64</span></p>
						</div>
					</a>
				</li>
				<li>
					<a href="/goodsDetail/1">
						<div class="o-img img01">
							<img src="/src/assets/logo.png">
						</div>
						<div class="o-con">
							<h2 class="p1 fs32 color-black text-ellipsis">拉菲奥希耶</h2>
							<p class="p2 color-gray text-block">古堡干红葡萄酒 750m</p>
							<p class="p3 color-red">¥ <span class="fs32">64</span></p>
						</div>
					</a>
				</li>
				<li>
					<a href="/goodsDetail/1">
						<div class="o-img img01">
							<img src="/src/assets/logo.png">
						</div>
						<div class="o-con">
							<h2 class="p1 fs32 color-black text-ellipsis">拉菲奥希耶</h2>
							<p class="p2 color-gray text-block">古堡干红葡萄酒 750m 古堡干红葡萄酒 750m 古堡干红葡萄酒 750m 古堡干红葡萄酒 750m 古堡干红葡萄酒 750m</p>
							<p class="p3 color-red">¥ <span class="fs32">64</span></p>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
// var t_screenbox_container;
// function loaded() {
// 	t_screenbox_container = new iScroll('goodslist-container',{
// 		checkDOMChanges: true,
// 		hScroll: false
// 	});
// }
// document.addEventListener('touchmove', function (e) {
// 	e.preventDefault();
// }, false);
// document.addEventListener('DOMContentLoaded', loaded, false);


export default{
	name:'goodslist',
	data(){
		return {
			vmtoggle:false,
			toggle:false,
			toggleClass:false
		}
	},
	methods: {
		orderByZH: function() {
			this.toggle = !this.toggle
		},
		priceFlag: function() {
			this.toggleClass = !this.toggleClass;
			this.toggle = false;
		},
		clearMask: function() {
			this.toggle = !this.toggle
		}
	}
}
</script>

<style>
	.t-screenbox{ height:.8rem; line-height:.8rem}
	.t-screenbox-graphicalA:after{ content:''; width:0;height:0; position:absolute; top:50%; left:.1rem; margin-top:-0.05rem;
		border-left:.1rem solid transparent;
		border-right: .1rem solid transparent;
		border-top: .1rem solid #a9a9a9;
	}
	.t-screenbox-graphicalB:before{ content:''; width:0;height:0; position:absolute; top:50%; left:.1rem; margin-top:-0.12rem;
		border-left:.08rem solid transparent;
		border-right: .08rem solid transparent;
		border-bottom: .1rem solid #a9a9a9;
	}
	.t-screenbox-graphicalB:after{ content:''; width:.06rem; height:.14rem; background:#a9a9a9; position:absolute; top:50%; left:.15rem; margin-top:-.02rem;}
	.active .t-screenbox-graphicalB:before{ margin-top:.02rem;
		border-bottom:0 none;
		border-top: .1rem solid #a9a9a9;
	}
	.active .t-screenbox-graphicalB:after{margin-top:-0.12rem;}

	.t-screenbox-list{ padding:.1rem 0; top:100%; right:0; left:0}
	.t-screenbox-list a{ display:block; padding:.1rem .2rem;}
	.goodslist-container{ top:1.76rem; right:0; bottom:0; left:0; overflow-y:scroll; -webkit-overflow-scrolling:touch;}

	.t-list{}
	.t-list li a{ display:block; overflow:hidden; background:white; padding:.2rem}
	.t-list li{ margin-bottom:.1rem}
	.t-list li .p1{ margin-top:.2rem}
	.t-list li .p2{ margin:.2rem 0}
	.t-list-one .o-img{ float:left; width:2.3rem; height:2.3rem}
	.t-list-one .o-con{ height:100%; padding-left:2.5rem}
	.t-list-one .o-con .p2{ height:4em; overflow:hidden;}

	.t-list-two{ overflow:hidden; margin:0 -0.1rem}
	.t-list-two li{ float:left; width:50%;}
	.t-list-two li a{ margin-right:.05rem; margin-left:.05rem}
	.t-list-two .o-con .p2{overflow:hidden; text-overflow:ellipsis; white-space:nowrap}

	.t-list-two .o-img{ padding-top:100%;}
</style>