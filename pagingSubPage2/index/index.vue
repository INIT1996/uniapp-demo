<template>
	<view class="container">
		<view class="imgBox">
			<image class="img" src="../static/myBg.png" mode="aspectFill"></image>
		</view>
		<scroll-view class="main" scroll-y="true" enable-flex="true" refresher-enabled="true" refresher-background="#f5f5f5"
			:refresher-threshold="80" :refresher-triggered="triggered" @refresherrefresh="onRefresh"
			@scrolltolower="onLoadMore">
			<uni-list class="list_box">
				<uni-list-item v-for="(item,index) in list" :key="index" :title="item.title" :note="item.title" />
			</uni-list>
			<uni-load-more :status="status"></uni-load-more>
		</scroll-view>
	</view>
</template>

<script setup>
	import {
		ref,
		onBeforeMount
	} from 'vue';
	import {
		onLoad
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
	const triggered = ref(false);
	const status = ref('more');
	const onRefresh = () => {
		triggered.value = true;
		setTimeout(() => {
			list.value = JSON.parse(JSON.stringify(originList));
			status.value = 'more';
			triggered.value = false;
		}, 2000)
	};
	const onLoadMore = () => {
		if (status.value == 'no-more') return;
		status.value = 'loading';
		setTimeout(function() {
			list.value.push({
				title: 'listItem14'
			});
			status.value = 'no-more';
		}, 1000);
	};
</script>

<style lang="less" scoped>
	.container {
		height: 100vh;
		box-sizing: border-box;

		.imgBox {
			width: 100%;
			height: 10vh;

			.img {
				width: 100%;
				height: 100%;
			}
		}

		.main {
			height: 90vh;
		}
	}
</style>