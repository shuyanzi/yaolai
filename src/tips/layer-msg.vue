<template>
	<div class="fixed tips-wrap">
		<div class="abs o-txt"><span v-text="giveTipData.proInfo"></span></div>
	</div>
</template>

<script>
export default {
  // name:'app',
	props:{
		giveTipData:{}
	},
	methods:{
		// tipTime(){
		// console.log(this.giveTipData)
		// }
	},
	watch:{
		giveTipData:function(newValue,oldValue){
			console.log(newValue,oldValue)
          // this.myIndex=newValue*2;
        }
	},
	mounted(){
		// this.tipTime();
		var _this = this;
		setTimeout(function () {
			console.log(_this.giveTipData.showTips)
			_this.giveTipData.showTips = false
		},this.giveTipData.time*1000)
	}
}
</script>

<style>
.tips-wrap, .tips-wrap .o-txt{
	-webkit-transition:all .2s;
	transition:all .2s
}
.tips-wrap{ width:100%; top:0; right:0; bottom:0; left:0;}
.tips-wrap .o-txt{ opacity:1; right:10%; bottom:40%; left:10%; text-align:center;}
.tips-wrap .o-txt span{ display:inline-block; padding:.2rem; background:rgba(0,0,0,.8); color:white; border-radius:.1rem;}
.layer-msg-enter-active .o-txt{ opacity:0; bottom:0}
</style>