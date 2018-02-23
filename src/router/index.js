import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Work from '@/components/Work'
import Photonorm from '@/components/Photonorm'
import ColorSearch from '@/components/ColorSearch'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/work/photonorm',
      name: 'Photonorm',
      component: Photonorm
    },
    {
      path: '/work/color_search',
      name: 'ColorSearch',
      component: ColorSearch
    }
  ]
})
