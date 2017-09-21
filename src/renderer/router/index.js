import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
  //     path: '/',
  //     name: 'landing-page',
  //     component: require('@/components/LandingPage'),
  //     meta: {
  //       keepAlive: true
  //     }
  //   },
    {
      path: '/',
      name: 'gps-trans',
      component: require('@/components/GPSTransfer'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})