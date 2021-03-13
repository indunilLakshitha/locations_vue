import Vue from 'vue'
import Router from 'vue-router'
import UserLocation from '@/pages/UserLocations'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserLocation',
      component: UserLocation
    },
    
  ]
})
