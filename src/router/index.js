import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import SearchCharacters from '@/views/SearchCharacters'
import About from '@/views/About'

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
      path: '/search-characters',
      name: 'Search characters',
      component: SearchCharacters
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
