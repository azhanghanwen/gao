let pro = {
	template: `	
		<div class="professional-levels-selected">
			<span v-for="(item,index) in data" :class="{active:ind==index}" @click="fun($event,index)">{{item}}</span>
		</div>
	`,
	data:function(){
		return {
			data:[],
			ind:''
		}
	},
	props: {
		"pathname":{
			type: String,
			required: true
		}
	},
	created: function(){
		var vm = this;
		this.$http.get('../data/js.json').then(function(res){
			vm.data = res.data[vm.pathname];
		})
	},
	methods: {
		fun(event, index){
			this.ind = index;
		}
	}
}
export default pro;