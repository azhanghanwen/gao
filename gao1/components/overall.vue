<template>
	<div class="box">
		<div class="item-all">
			<p>已选条件：</p>
			<div class="selected-all">
				<span>{{$store.getters.selected_range}}<em @click='clearRange'>x</em></span>
				<span>{{$store.getters.selected_college}}<em @click="clearArea">x</em></span>
			</div>
		</div>

		<div class="content">
			<div class="professional-levels">
				<p>专业层次：</p>
				<professional-levels :pathname="'major_range'"></professional-levels>
			</div>
			<div class="university-levels">
				<p>高校层次：</p>
				<university-levels :pathname="'school_range'"></university-levels>
			</div>
			<div class="district-college">
				<p>高效地区：</p>
				<district-college :pathname="'school_area'"></district-college>
			</div>
			<div style="clear:both"></div>
		</div>
		<div class="info">
			<h1>选考科目分析</h1>
			<h2>科目比例：要求所选选考科目的专业总数/条件范围内专业总数。以专业为例：经济统计学专业历史所占比例为66.7%，意为选考历史，66.7%的经济统计学专业均可报考</h2>
			<div class="cons">
				<div>
					<p>高考科目</p>
					<p>高校数</p>
					<p>专业（类）数</p>
					<p>科目比列</p>
					<p>高考科目</p>
					<p>高校数</p>
					<p>专业（类）数</p>
					<p>科目比列</p>
				</div>
				<div is = "subjects" :pathname="'analysisData'"></div>
			</div>
		</div>
		<collegial-school :title="collegialData" :contentInfo="collegeContentData">
			<tab-row v-for="i in collegeContentData" :row="i"></tab-row>
		</collegial-school>
	</div>
</template>
<script>
	import axios from '../axios/axios.js';
	import pro from './professional.js';
	import uni from './university.js';
	import dis from './district.js';
	import tabStart from './proSubject.js';
	import collegial from './collegial.vue';
	import tabr from './tabr.vue';
	export default {
		data(){
			return {
				collegialData:[],
				collegeContentData:[]
			}
		},
		components: {
			"professional-levels":pro,
			"university-levels":uni,
			"district-college":dis,
			"subjects":tabStart,
			"collegial-school":collegial,
			"tab-row":tabr
		},
		created:function(){
			var vm = this;
			this.$http.get('../data/school_range.json').then(function(res){
				vm.collegialData = res.data.result.title;
				vm.collegeContentData = res.data.result.rows;
			})
		},
		methods:{
			clearRange:function () {
				// console.log(1)
				this.$store.commit('clear_range')
			},
			clearArea:function () {
				// console.log(1)
				this.$store.commit('clear_area')
			}
		}
	}
</script>
<style>
	.box{
		width: 1000px;
		height: auto;
	}
	.box .item-all{
		width: 100%;
		height: auto;
		padding:15px 0;
	}
	.box .item-all p{
		float: left;
		padding-top: 5px;
	}
	.box .item-all .selected-all span{
		display: inline-block;
		padding:6px;
		background: #fff;
		border:1px solid #ccc;
		position: relative;
	}
	.box .item-all .selected-all span em{
		display: inline-block;
		font-size: 10px;
		position: absolute;
		top: 0;
		right: 2px;
		cursor: pointer;
	}
	.content{
		width: 100%;
		height: auto;
		border:1px solid #ccc;
	}
	.professional-levels,.university-levels{
		width: 1000px;
		overflow: hidden;
	}
	.content p{
		float: left;
		padding-top: 15px;
	}
	.university-levels-selected,.district-college-selected,.professional-levels-selected{
		width: 900px;
		float: left;
	}
	.content span{
		display: inline-block;
		padding:6px;
		margin-left: 5px;
		cursor: pointer;
	}
	.content span:hover{
		background: green;
		color: #fff;
	}
	.content div{
		margin-top: 10px;
	}
	.active{
		background: green;
		color: #fff;
	}
	.university-levels p,.district-college p{
		float: left;
	}
	.info{
		width: 1000px;
		height: auto;
		overflow: hidden;
	}
	.info h1{
		height: 50px;
		line-height: 50px;
		font-size: 16px;
		border-bottom: 1px solid #ccc;
	}
	.info h2{
		font-size: 13px;
		color: #f00;
		padding:10px 0;
	}
	.info .tab1{
		width: 480px;
		height: auto;
		float: left;
	}
	.tab1 tr{
		width: 500px;
		height: 50px;
	}
	.con div{
		width: 1125px;
		height: 50px;
	}
	.con div p{
		width: 125px;
		height: 50px;
		line-height: 50px;
		color: #fff;
		background: green;
		float: left;
		text-align: center;
	}
	.cons div p{
		width: 120px;
		height: 50px;
		line-height: 50px;
		color: #fff;
		background: green;
		float: left;
		text-align: center;
	}
	.tab1 tr td{
		text-align: center;
		width: 125px;
		line-height: 50px;
		border:1px solid #ccc;
	}
	.left tr{
		width: 500px;
	}
	.left tr td{
		width: 125px;
	}
	.bot{
		width: 1000px;
		height: auto;
	}
	.collegial{
		width: 1125px;
		height: auto;
		margin-top: 20px;
	}
	.school_collegial{
		width:964px;
		height: 50px;
	}
	.school_collegial p{
		float: left;
		width: 120px;
		text-align: center;
		line-height: 50px;
		background: green;
		color: #fff;
	}

</style>