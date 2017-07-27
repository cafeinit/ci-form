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
    },

    {
      name: 'Checkbox',
      path: '/checkbox',
      component: resolve => require(['./views/Checkbox.vue'], resolve)
    },

    {
      name: 'Radio',
      path: '/radio',
      component: resolve => require(['./views/Radio.vue'], resolve)
    },

    {
      name: 'Select',
      path: '/select',
      component: resolve => require(['./views/Select.vue'], resolve)
    },

    {
      name: 'Text',
      path: '/text',
      component: resolve => require(['./views/Text.vue'], resolve)
    },

    {
      name: 'Textarea',
      path: '/textarea',
      component: resolve => require(['./views/Textarea.vue'], resolve)
    }
  ]
})

var app = new Vue({
  router: router
}).$mount('#app')
