<template>
	<view class="container">
		<uni-list>
			<uni-list-item v-for="(item,index) in list" :key="index" ellipsis="1" :title="item.title"
				:note="item.title" showArrow :to="item.path"/>
		</uni-list>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const list = ref([{
		title: 'uniapp实现小程序之自定义导航栏',
		path:'/navSubPage/index/index'
	}]);
</script>

<style lang="less" scoped>
	.container {
		height: 100vh;
	}
</style>