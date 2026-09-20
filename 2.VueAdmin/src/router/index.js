	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import news from '@/views/news/list'
	import address from '@/views/address/list'
	import maijia from '@/views/maijia/list'
	import shangpinxinxi from '@/views/shangpinxinxi/list'
	import shangpinqiugou from '@/views/shangpinqiugou/list'
	import fankuixinxi from '@/views/fankuixinxi/list'
	import storeup from '@/views/storeup/list'
	import cart from '@/views/cart/list'
	import forum from '@/views/forum/list'
	import yonghu from '@/views/yonghu/list'
	import discussshangpinxinxi from '@/views/discussshangpinxinxi/list'
	import orders from '@/views/orders/list'
	import config from '@/views/config/list'
	import shangpinleixing from '@/views/shangpinleixing/list'
	import maijiaRegister from '@/views/maijia/register'
	import maijiaCenter from '@/views/maijia/center'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页Home',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/maijiaCenter',
			name: '卖家个人中心',
			component: maijiaCenter
		}
		,{
			path: '/news',
			name: '公告信息',
			component: news
		}
		,{
			path: '/address',
			name: '地址',
			component: address
		}
		,{
			path: '/maijia',
			name: '卖家',
			component: maijia
		}
		,{
			path: '/shangpinxinxi',
			name: '商品信息',
			component: shangpinxinxi
		}
		,{
			path: '/shangpinqiugou',
			name: '商品求购',
			component: shangpinqiugou
		}
		,{
			path: '/fankuixinxi',
			name: '反馈信息',
			component: fankuixinxi
		}
		,{
			path: '/storeup',
			name: '我的收藏',
			component: storeup
		}
		,{
			path: '/cart',
			name: '购物车',
			component: cart
		}
		,{
			path: '/forum',
			name: '我的发布',
			component: forum
		}
		,{
			path: '/yonghu',
			name: '用户',
			component: yonghu
		}
		,{
			path: '/discussshangpinxinxi',
			name: '商品信息评论',
			component: discussshangpinxinxi
		}
		,{
			path: '/orders',
			name: '订单管理',
			component: orders
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		,{
			path: '/shangpinleixing',
			name: '商品类型',
			component: shangpinleixing
		}
		]
	},
	{
		path: '/maijiaRegister',
		name: '卖家注册',
		component: maijiaRegister
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
