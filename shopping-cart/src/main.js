// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../static/css/bootstrap.min.css'
import '../static/js/bootstrap.min'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/routers/Home.vue'
import Lab from './components/routers/Lab.vue'
import About from './components/routers/About.vue'
import Comment from './components/routers/Comment.vue'
import Post from './components/routers/page/Post.vue'
import New from './components/routers/New.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
      path: '/home',
      component: Home
    },
    {
      path: '/lab',
      component: Lab
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/comment',
      component: Comment
    },
    {
      path: '/post/:_id',
      name: 'post',
      component: Post
    },
    {
      path: '/new',
      component: New
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
