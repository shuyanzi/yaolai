// import News from './components/News.vue'
import Index from './components/Index.vue'
import IndexList from './components/IndexList.vue'
import GoodsList from './components/GoodsList.vue'
import GoodsDetail from './components/GoodsDetail.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Car from './components/Car.vue'
import GoToPay from './components/goToPay.vue'


// var indexDetail={
//     template:'<div>{{$route.params}}</div>'
// };
export default[
        {path:'/login', component:Login},
        {path:'/goToPay', component:GoToPay},
        {path:'/car', component:Car},
        {path:'/register', component:Register},
        {
            path:'/index',
            component:Index,
            children:[
                {path:':index', component:IndexList}
                // {path:':index/pageId/:pageId', component:IndexDetail}
                // {path:':index/:Oid', component:IndexDetail}
            ]
        },
        {path:'/goodsList/:id', component:GoodsList},
        {path:'/goodsDetail/:id', component:GoodsDetail},
        // {path:':index/pageId/:pageId', component:IndexDetail},
        // {path:':index/age/:age', component:Index},
        {path:'*', redirect:'/index'}
    ]