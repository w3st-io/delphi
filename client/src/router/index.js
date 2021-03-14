// [IMPORT] //
import Vue from 'vue'
import Router from 'vue-router'

// [IMPORT] Personal //
import home from '../pages/index'
import quote from '../pages/quote'
import NotFound from '../pages/404'

// [USE] //
Vue.use(Router)

// [EXPORT] //
export default new Router ({
	mode: 'history',
	
	routes: [
		{
			path: '/',
			name: '/',
			component: home,
			meta: {
				auth: true,
				title: 'Hashtag Project'
			}
		},
		{
			path: '/quote/:hashtag',
			name: 'quote',
			component: quote,
			meta: {
				auth: true,
				title: 'Quote'
			}
		},
		{
			path: '/**',
			name: '404',
			component: NotFound,
			meta: {
				auth: true,
				title: '404 Not Found..'
			},
		}
	]
})