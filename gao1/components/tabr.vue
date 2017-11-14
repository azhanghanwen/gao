<template>
	<tbody class="tabb">
		<tr>
			<td v-for="(item, index) in item_all"><span v-if="index==0" @click="fun">{{add}}</span>{{item}}</td>
		</tr>
		<tr v-show="active">
			<td colspan="9">
				<table cellpadding="0" cellspacing="0">
					<thead>
						<tr>
                            <td>高校地区</td>
                            <td>高校名称</td>
                            <td>专业（类）</td>
                            <td>类中所含专业</td>
                            <td>远考科目范围</td>
                        </tr>
						<tr v-for="(i, index) in item_all_a" :key='index'>
                            <td>{{i.province}}</td>
                            <td>{{i.collegeName}}</td>
                            <td>{{i.majorName}}</td>
                            <td>{{i.remark.join('、')}}</td>
                            <td>{{i.subjectRangeNames.join('、')}}</td>
                        </tr> 
					</thead>
				</table>
			</td>
		</tr>
	</tbody>
</template>
<script>
	export default {
		data(){
			return {
				item_all:[],
				item_all_a:[],
				active:false,
				add:'+'
			}
		},
		props:{
			"row":{
				type:Array,
				required:true
			}
		},
		created:function(){
			this.item_all = this.row.slice(0,8);
			this.item_all_a = this.row[9];
		},
		methods:{
			fun(){
				this.active = !this.active;
				if (this.active) {
					this.add = '-';
				} else {
					this.add = '+';
				}
			}
		}
	}
</script>
<style>
	tbody{
		width: 100%;
	}
	tr{
		width: 1125px;
		height: 50px;
	}
	tr td{
		text-align: center;
		border:1px solid #ccc;
		height: 50px;
		width: 962px;
	}
	.tabb table{
		background: #eee;
		width: 959px;
	}
	.tabb table tr{
		width: 100%;
	}
	.tabb td{
		width: 118px;
	}
	.tabb span{
		font-size: 14px;
		float: left;
		display: inline-block;
		width:20px;
		height:20px;
		background: green;
		color: #fff;
		text-align: center;
		line-height: 20px;
	}
	.tabb span:hover{
		cursor: pointer;
	}
</style>