<template>
	<div class="routes">
		<ul class="uls">
			<li><router-link :to="{name:'overall',path:'/overall'}">综合检索</router-link></li>
			<li><router-link :to="{name:'college',path: '/college'}">高效检索</router-link></li>
			<li><router-link :to="{name:'major',path:'/major'}">专业检索</router-link></li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		data(){
			return {}
		}
	}
</script>
<style scoped>
	.routes{
		width: 1200px;
		height: auto;
		margin:0 auto;
	}
	a{
		text-decoration: none;
		color: #000;
	}
	.uls{
		width: 1200px;
		height: 40px;
	}
	.uls li{
		float: left;
		width: 100px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-size: 16px;
	}
	.uls li:hover{
		background: #ccc;
	}
	.router-link-active{
		display: inline-block;
		width: 100%;
		height: 40px;
		background: #ccc;
	}
</style>