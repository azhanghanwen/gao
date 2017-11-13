import overall from '../components/overall.vue';
let routes = [
	{
		path: '/overall',
		name: 'overall',
		component: overall
	},
	{
		path: '/college',
		name: 'college',
		component: {
			template: `
				<h1>college</h1>
			`
		}
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