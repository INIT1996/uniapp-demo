<template>
	<view class="container">
		<uni-list>
			<uni-list-item v-for="(item,index) in list" :key="index" ellipsis="1" :title="item.title" :note="item.note"
				showArrow :to="item.path" />
		</uni-list>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const list = ref([{
		title: 'uniapp之自定义小程序导航栏',
		note: 'uniapp之自定义小程序导航栏',
		path: '/navSubPage/index/index'
	}, {
		title: 'uniapp之下拉刷新和上拉加载（方式一）',
		note: '使用onPullDownRefresh和onReachBottom实现',
		path: '/pagingSubPage/index/index'
	}, {
		title: 'uniapp之下拉刷新和上拉加载（方式二）',
		note: '使用scroll-view实现',
		path: '/pagingSubPage2/index/index'
	}]);
</script>

<style lang="less" scoped>
	.container {
		height: 100vh;
	}
</style>