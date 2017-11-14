let tabColl = {
	template:`
		<div class="college_item">
			<table class="tab_college" cellpadding="0" cellspacing="0" v-for="item in arr">
				<tr v-for="i in item">
					<td>{{i.subject}}</td>
                    <td>{{i.majorCount}}</td>
                    <td>{{i.rate}}</td>
				</tr>
			</table>
		</div>
	`,
	data:function(){
		return {
			arr:[]
		}
	},
	props:{
		"pathname":{
			type:String,
			required:true
		}
	},
	created:function(){
		var vm = this;
		this.$http.get('../data/school_range.json').then(function(res){
			var data = res.data.result[vm.pathname];
			var len = data.length;
			var num = 0;
			data.forEach((value, index) => {
				if (index%14 == 0) {	
					num += 14;
					vm.arr.push(data.slice(index,num));		
				}
			})
			console.log(vm.arr)
		})
	}
}
export default tabColl;