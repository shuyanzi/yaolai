<template>
<div>
    <div class="bg-white fixed abs-rbl d-box border_ts t-detailsFooter">
        <div class="d-box text-c fs20">
            <a href="javascript:;" class="d-box d-boxc d-flexw o-min border_rs" v-on:click="collection()">
                <i class="ico ico50 ico50-collection" v-bind:class="{'ico50collection':collectionState}"></i>
                <br>
                <span>{{ collectionState ? '已收藏' : '收藏' }}</span>
            </a>
            <a href="/car" class="d-box d-boxc d-flexw rel shop-car o-min">
                <i class="ico ico50 ico50-shoppingBag"></i><br><span>购物袋</span>
                <mt-badge class="abs shopCarBadge" size="small">30</mt-badge>
                <!-- <b class="abs fs20 color-white" style="display: block;">15</b> -->
            </a>
        </div>
        <div class="d-box d-boxw d-flex">
            <a href="javascript:" v-on:click="addCar(goodId)" class="d-box d-boxc d-flexw fs28 bg-black color-white"><span>加入购物袋</span></a>
            <a href="javascript:"  v-on:click="goBuy(goodId)" class="d-box d-boxc d-flexw fs28 bg-yellow color-white"><span>立即购买</span></a>
            <!-- <button v-on:click="goBuy($route.params.id)">点击购买</button> -->
        </div>
    </div>


    <transition name="layer-msg">
        <layer-msg :giveTipData="giveTipData" v-if="giveTipData.showTips"></layer-msg>
      </transition>
      <!-- <layer-msg :giveTipData="giveTipData" v-if="giveTipData.showTips"></layer-msg> -->
    
</div>

</template>
<script>
    import layerMsg from '../tips/layer-msg.vue'
    export default {
        components:{
          layerMsg
        },

        props:{
            goodId:{}
        },
        data(){
            return {
                collectionState: false,
                giveTipData:{
                  showTips:false,
                  proInfo:'收藏成功',
                  time:2.2  
                }
            }
        },
        mounted(){
            // this.fnSlider();
        },
        watch:{
            // '$route':function(){
            //  alert(1);
            // }
        },
        methods:{
            // fnSlider(){
            //   var swiper = new Swiper('.goodsDetailsSwiper', {
            //     pagination: '.swiper-pagination',
            //     paginationClickable: true
            //   });

            // }
            goBuy(n){
                console.log(n)

                if(window.sessionStorage){
                    if( sessionStorage.getItem('ylUserInfo')!='' && (window.sessionStorage.length)!=0 ){
                        console.log(sessionStorage.getItem('ylUserInfo')) ;
                        console.log('已登录，直接购买');
                        this.$router.push('/goToPay');
                    }else{
                        console.log('没有登录');//如果没有登录状态则跳转到登录页
                        this.$router.push('/login');
                    }
                }else{ 
                    alert("浏览暂不支持本地存储") 
                } 
            },

            addCar(n){
                console.log(n)

                if(window.sessionStorage){
                    if( sessionStorage.getItem('ylUserInfo')!='' && (window.sessionStorage.length)!=0 ){
                        console.log(sessionStorage.getItem('ylUserInfo')) ;
                        console.log('已登录，addCar')
                    }else{
                        console.log('没有登录');//如果没有登录状态则跳转到登录页
                        this.$router.push('/login');
                    }
                }else{ 
                    alert("浏览暂不支持本地存储") 
                } 
            },
            collection:function(){
                this.collectionState = !this.collectionState;
                this.giveTipData.showTips = true
                if(this.collectionState){
                   this.giveTipData.proInfo ='收藏成功'
                }else{
                    this.giveTipData.proInfo ='取消收藏'
                }
            }
        }
    }
</script>
<style>
.t-detailsFooter{ height:1rem}
.t-detailsFooter .o-min{ width:1.2rem;}
.t-detailsFooter .shopCarBadge{
    background: #FF4D4D;
    top: 4px;
    right: 8%;
    padding: 1px 6px;
}


.ico50-collection{ background-position:0 -1.5rem}
.ico50collection{ background-position:0 -2rem}
</style>