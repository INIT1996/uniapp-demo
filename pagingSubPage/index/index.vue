<template>
	<view class="container">
		<uni-list class="list_box">
			<uni-list-item v-for="(item,index) in list" :key="index" :title="item.title" :note="item.title" />
		</uni-list>
		<uni-load-more :status="status"></uni-load-more>
	</view>
</template>

<script setup>
	import {
		ref,
		onBeforeMount
	} from 'vue';
	import {
		onLoad,
		onReachBottom,
		onPullDownRefresh
	} from '@dcloudio/uni-app';
	const originList = [{
		title: 'listItem1',
	}, {
		title: 'listItem2'
	}, {
		title: 'listItem3'
	}, {
		title: 'listItem4'
	}, {
		title: 'listItem5'
	}, {
		title: 'listItem6'
	}, {
		title: 'listItem7'
	}, {
		title: 'listItem8'
	}, {
		title: 'listItem9'
	}, {
		title: 'listItem10'
	}, {
		title: 'listItem11'
	}, {
		title: 'listItem12'
	}, {
		title: 'listItem13'
	}];
	const list = ref([]);
	onLoad(() => {
		list.value = JSON.parse(JSON.stringify(originList))
	});
	// 下拉刷新
	onPullDownRefresh(() => {
		// 模拟接口请求
		setTimeout(function() {
			list.value = JSON.parse(JSON.stringify(originList));
			status.value = 'more';
			uni.stopPullDownRefresh();
		}, 1000);
	});
	const status = ref('more');
	// 触底加载
	onReachBottom(() => {
		if(status.value == 'no-more') return;
		status.value = 'loading';
		setTimeout(function() {
			list.value.push({
				title: 'listItem14'
			});
			status.value = 'no-more';
		}, 1000);
	});
</script>

<style lang="less" scoped>
	.container {
		height: 100vh;
		box-sizing: border-box;
	}
</style>