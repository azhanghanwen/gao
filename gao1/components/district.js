let dis = {
	template:`
		<div class="professional-levels-selected">
			<span v-for="(item, index) in $store.state.school_college_obj" :class="{active:item.selected}" @click="fn($event,index,item.value,item.selected)">{{item.value}}</span>
		</div>
	`,
	props:{
		"pathname":{
			type:String,
			required:true
		}
	},
	created:function(){
		var vm = this;
		this.$http.get('../data/js.json').then(function(res){
			let arr;
			arr = res.data[vm.pathname].map(function(value,index){
				return index==0?{index:index,selected:true,value:value}:{index:index,selected:false,value:value}
			})
			vm.$store.commit('updata_college', arr);
		});
	},
	methods:{
		fn(event,index,value,selected){
			this.$store.commit('reset_school_college', {index: index,selected:!selected, value:value});
		}
	}
}
export default dis;