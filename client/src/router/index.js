import Vue from 'vue'
import Router from 'vue-router'
import Signing from '@/components/Signing'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
			name: 'Signing',
			component: Signing
		}
  ]
})
