<template>
	<div class="college">
		<p class="inp">
			<input type="text" placeholder="请输入要搜索的高校名称" class="filter_name">
			<button class="btn">检索</button>
		</p>
		<h1>选考科目分析</h1>
		<h2>科目比例：要求所选选考科目的专业总数/条件范围内专业总数。以专业为例：经济统计学专业历史所占比例为66.7%，意为选考历史，66.7%的经济统计学专业均可报考</h2>
		<div class="con">
			<div>
				<p>选考科目</p>
				<p>专业（类）数</p>
				<p>科目比例</p>
				<p>选考科目</p>
				<p>专业（类）数</p>
				<p>科目比例</p>
				<p>选考科目</p>
				<p>专业（类）数</p>
				<p>科目比例</p>
			</div>
			<div is = "tab-college" :pathname="'analysisData'"></div>
		</div>
	</div>
</template>
<script>
	import tabColl from './tabCollege.js';
	export default {
		data(){
			return {}
		},
		components:{
			"tab-college":tabColl
		}
	}
</script>
<style>
	.college{
		width: 1125px;
		height: auto;
	}
	.college .inp{
		width: 400px;
		border:2px solid green;
		margin:10px 0;
	}
	.inp .filter_name{
		width: 315px;
		height: 40px;
		border:none;
		outline: none;
		font-size: 15px;
		display: inline-block;
		float: left;
	}
	.college .btn{
		width: 85px;
		height:40px;
		display: inline-block;
		background: green;
		color: #fff;
		border:none;
	}
	.college h1{
		height: 50px;
		line-height: 50px;
		font-size: 16px;
		border-bottom: 1px solid #ccc;
	}
	.college h2{
		font-size: 13px;
		color: #f00;
		padding:10px 0;
	}
	.con div{
		width: 1125px;
		height: 50px;
	}
	.con p{
		width: 125px;
		height: 50px;
		line-height: 50px;
		color: #fff;
		background: green;
		float: left;
		text-align: center;
	}
	.tab_college{
		width: 375px;
		float: left;
	}
	.tab_college tr{
		width: 375px;
		height: 50px;
	}
	.tab_college tr td{
		width: 125px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		border:1px solid #ccc;
	}
</style>