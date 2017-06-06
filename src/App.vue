<!-- <template>
  <div id="app">
      <div class="navLeft">
        
        <router-link to="/news">新闻</router-link>
        <router-link to="/index">index</router-link>
      </div>
    <div class="indexRight">
      <router-view></router-view>
    </div>
  </div>
</template> -->
<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
// export default {
//   name: 'app',
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App',
//       navItem:[
//       // /user/eric/age/70
//           {text:"新品",oid:"/index"},
//           // {text:"新品",oid:"/index/eric/age/70"}
//           {text:"豪车",oid:"/index/pageId/2"},
//           {text:"奢品",oid:"/index/pageId/3"},
//           {text:"美妆",oid:"/index/pageId/4"}
//         ]
//     }
//   }
// }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
