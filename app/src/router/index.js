import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Vidoe from '@/components/vidoe'
import Zhibo from '@/components/zhibo'
import MyInfo from '@/components/myInfo'
import XiangQing from '@/components/xiangqing'



import Toutiao from '@/components/homeChilder/toutiao'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children:[{
      	path:'',
      	name: 'Home',
      	component: Toutiao,
      }]
    },
    {
      path: '/vidoe',
      name: 'Vidoe',
      component: Vidoe
    },
    {
      path: '/zhibo',
      name: 'Zhibo',
      component: Zhibo
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: MyInfo
    },
    {
      path: '/xiangQing',
      name: 'XiangQing',
      component: XiangQing
    },
    {
      path: '*',
      redirect:'/'
    }
  ]
})
