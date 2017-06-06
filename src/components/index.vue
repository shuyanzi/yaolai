
<template>
  <div id="index">

    <div class="bg-gray fixed abs-trl" style="z-index:10">
      <div class="border_bs d-box d-boxc top-search">
        <div class="d-box d-boxw bg-white o-redius m-l m-r">
          <div class="d-box d-boxc"><i class="ico ico50 ico50-search"></i></div>
          <a href="javascript:" class="d-box d-boxw"></a>
        </div>
      </div>
    </div>

    <div class="bg-gray fs30 navLeft">
      <div class="scroll">
        <ul>
          <!-- <div>{{$route.params.index}}</div> -->
          <li v-for="(item,key) in navItem" v-bind:class="{ active: key==$route.params.index }"><router-link :to="item.oid">{{item.text}}</router-link></li>
        </ul>
      </div>
    </div>

    <!-- <div class="indexRight">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div> -->
    <div class="indexRight">


      <!-- <transition name="tips-bounce-up">
        <layer-msg :giveTipData="giveTipData" v-if="giveTipData.showTips"></layer-msg>
      </transition> -->
      <!-- <transition name="tips-bounce-up">
        
      </transition> -->
      <transition name="layer-msg">
      <!-- enter-active-class="animated zoomIn"> -->
      <!-- leave-active-class="animated bounceInUp" v-on:leave="leave"> -->
        <layer-msg :giveTipData="giveTipData" v-if="giveTipData.showTips"></layer-msg>
      </transition>
      
      <mt-badge size="small"  type="error">10</mt-badge>

      <loading></loading>
      <transition name="slide-down">
        <!-- <keep-alive> -->
              <router-view></router-view>
            <!-- </keep-alive> -->
      </transition>
    </div>

  </div>
</template>
<script>
  import layerMsg from '../tips/layer-msg.vue'

  export default{
    name:'index',
    components:{
      layerMsg
    },
    data(){
      return {
        
        giveTipData:{
          showTips:false,
          proInfo:'收藏成功',
          time:2.2
        },
        share:"share",
        navItem:[
          {text:"新品",oid:"/index/0"},
          {text:"豪车",oid:"/index/1"},
          {text:"奢品",oid:"/index/2"},
          {text:"美妆",oid:"/index/3"},
          {text:"美妆",oid:"/index/4"},
          {text:"美妆",oid:"/index/5"},
          {text:"美妆",oid:"/index/6"},
          {text:"美妆",oid:"/index/7"},
          {text:"美妆",oid:"/index/8"},
          {text:"美妆",oid:"/index/9"},
          {text:"美妆",oid:"/index/10"},
          {text:"美妆",oid:"/index/11"},
          {text:"美妆",oid:"/index/12"},
          {text:"美妆",oid:"/index/13"},
          {text:"美妆",oid:"/index/14"},
          {text:"美妆",oid:"/index/15"},
          {text:"美妆",oid:"/index/16"},
          {text:"美妆",oid:"/index/17"},
          {text:"美妆",oid:"/index/18"},
          {text:"美妆",oid:"/index/19"},
          {text:"美妆",oid:"/index/20"},
          {text:"美妆",oid:"/index/21"},
          {text:"美妆",oid:"/index/22"},
          {text:"美妆",oid:"/index/23"},
          {text:"美妆",oid:"/index/24"},
        ]
      }
    },
    mounted(){
      this.giveTipData.showTips=true;
    },
    methods:{

      // leave: function (el, done) {
      //   console.log(el)
      //   el.style.opacity = 0
      //   console.log(done)
      //   // Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      //     // Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      //     // Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      //     // Velocity(el, {
      //     //   rotateZ: '45deg',
      //     //   translateY: '30px',
      //     //   translateX: '30px',
      //     //   opacity: 0
      //     // }, { complete: done })
      // }
    }
  }
</script>
<style>
.navLeft,.indexRight{ position:fixed; top:.96rem; bottom:0; overflow-y:auto; -webkit-overflow-scrolling:touch;}
.navLeft { width:20%; left:0; line-height:.88rem; text-align:center;}
.navLeft a{ display:block; border-bottom:1px solid #e4e5ea; color:#666;}
.navLeft .active a{ background-color:#fff; color:#111;}
.indexRight{ right:0; left:20%;}
</style>