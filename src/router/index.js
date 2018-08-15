import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/recommend/recommend.vue'
import Rank from '../components/rank/rank.vue'
import Singer from '../components/singer/singer.vue'
import Search from '../components/search/search.vue'
import SingerDetail from '../components/singer-detail/singer-detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component:Recommend
    },{
      path: '/rank',
      name: 'Rank',
      component:Rank
    },{
      path: '/singer',
      name: 'Singer',
      component:Singer,
      children:[{
        path:':id',
        component:SingerDetail
      }]
    },{
      path: '/search',
      name: 'Search',
      component:Search
    }
  ]
})
