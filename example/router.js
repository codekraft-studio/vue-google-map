import Vue from 'vue'
import VueRouter from 'vue-router'

import SimpleMap from './components/SimpleMap.vue'
import InfoWindows from './components/InfoWindows.vue'
import PlaceSearch from './components/PlaceSearch.vue'

const router = new VueRouter({
	mode: 'hash',
	routes: [
		{ path: '/', name: 'simple', label: 'Simple', component: SimpleMap },
		{ path: '/info-windows', name: 'info-windows', label: 'Info Windows', component: InfoWindows },
		{ path: '/place-search', name: 'place-search', label: 'Place Search', component: PlaceSearch }
	],
})

Vue.use(VueRouter)

export default router
