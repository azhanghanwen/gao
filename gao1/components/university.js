let uni = {
	template:`
		<div class="district-college">
			<span v-for="(item, index) in $store.state.school_range_obj" :class="{active:item.selected}" @click="fun($event,index,item.value,item.selected)">{{item.value}}</span>
		</div>
	`,
	data:function(){
		return {
			txt:null
		}
	},
	props: {
		'pathname':{
			type:String,
			required: true
		}
	},
	created:function(){
		var vm = this;
		this.$http.get('../data/js.json').then(function(res){
			let arr;
			arr = res.data[vm.pathname].map(function(value,index){
				return index==0?{index:index,selected:true,value:value}:{index:index,selected:false,value:value}
			})
			// console.log(vm.school_obj)
			vm.$store.commit('updata', arr);
		});
	},
	methods: {
		fun(event, index, value, selected){
			this.$store.commit('reset_school_range', {index: index,selected:!selected, value:value});
		}
	}
}
export default uni;