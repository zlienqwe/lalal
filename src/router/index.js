import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/views/Movies'
import Music from '@/views/Music'
import Books from '@/views/Books'
import Pictures from '@/views/Pictures'
import MovieDetail from '@/views/MovieDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movies',
      name: 'Movies',
      component: Movies,
      alias: '/'
    },
    {
      name: 'moviedetail',
      path: '/movies/:id',
      component: MovieDetail
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/Pictures',
      name: 'Pictures',
      component: Pictures
    },

  ]
})
