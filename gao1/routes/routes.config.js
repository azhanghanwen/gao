import overall from '../components/overall.vue';
import collegesRet from '../components/collegesRet.vue';
let routes = [
	{
		path:'/',
		redirect:'/overall'
	},
	{
		path: '/overall',
		name: 'overall',
		component: overall
	},
	{
		path: '/college',
		name: 'college',
		component: collegesRet
	},
	{
		path: '/major',
		name: 'major',
		component: {
			template: `
				<h1>major</h1>
			`
		}
	}
]
export default routes;