let tabStart = {
	template: `
		<div class="bot">
			<table class="tab1" cellpadding="0" cellspacing="0">
				<tr v-for="item in datas">
					<td>{{item.subject}}</td>
					<td>{{item.majorCount}}</td>
					<td>{{item.collegesCount}}</td>
					<td>{{item.rate}}</td>
				</tr>
			</table>
			<table class="tab1" cellpadding="0" cellspacing="0">
				<tr v-for="item in datas1">
					<td>{{item.subject}}</td>
					<td>{{item.majorCount}}</td>
					<td>{{item.collegesCount}}</td>
					<td>{{item.rate}}</td>
				</tr>
			</table>
		</div>
	`,
	data: function(){
		return {
			datas:[],
			datas1:[]
		}
	},
	props:{
		"pathname":{
			type: String,
			required: true
		}
	},
	created: function(){
		var vm = this;
		this.$http.get('../data/school_range.json').then(function(res){
			for(var i=0;i<13;i++){
				vm.datas.push(res.data.result[vm.pathname][i]);
			}
			for(var i=13;i<26;i++){
				vm.datas1.push(res.data.result[vm.pathname][i]);
			}
		})
	}
}
export default tabStart;