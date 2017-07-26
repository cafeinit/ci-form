/**
 * @fileoverview main
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import CIUIBase from 'ci-ui-base'
import CIButton from 'ci-button'
import CIForm from 'ci-form'

Vue.use(VueRouter)
Vue.use(CIUIBase.plugin)
Vue.use(CIButton.plugin)
Vue.use(CIForm.plugin)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'Default',
      path: '/',
      component: resolve => require(['./views/Index.vue'], resolve)
    },

    {
      name: 'Index',
      path: '/index',
      component: resolve => require(['./views/Index.vue'], resolve)
    },

    {
      name: 'FormGroup',
      path: '/form-group',
      component: resolve => require(['./views/FormGroup.vue'], resolve)
    }
  ]
})

var app = new Vue({
  router: router
}).$mount('#app')