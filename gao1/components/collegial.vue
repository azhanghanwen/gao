<template>
	<div class="collegial">
		<div class="school_collegial">
			<p v-for="item in title">{{item}}</p>
		</div>
		<slot></slot>
	</div>
</template>
<script>
	export default {
		data(){
			return {}
		},
		props:{
			"title":{
				type:Array,
				required:true
			},
			"contentInfo":{
				type:Array,
				required:true
			}
		}
	}
</script>
<style>
	
</style>