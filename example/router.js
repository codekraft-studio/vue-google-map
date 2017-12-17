import Vue from 'vue'
import VueRouter from 'vue-router'

import SimpleMap from './components/SimpleMap.vue'
import InfoWindows from './components/InfoWindows.vue'

const router = new VueRouter({
	mode: 'hash',
	routes: [
		{ path: '/', name: 'simple', component: SimpleMap },
		{ path: '/info-windows', name: 'info-windows', component: InfoWindows },
	],
})

Vue.use(VueRouter)

export default router
