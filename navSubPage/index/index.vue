<template>
	<view class="container">
		<view class="bar_box">
			<view class="status_bar" :style="{height:statusBarHeight+'px'}"></view>
			<view class="nav_bar" :style="navBarStyle">
				<view class="nav_bar_left">
					XX街道
				</view>
				<view class="nav_bar_right">
					订阅
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onBeforeMount,
		reactive
	} from 'vue';
	// 状态栏高度
	const statusBarHeight = ref(0);
	// 导航栏样式
	const navBarStyle = reactive({
		width: 0, //宽度
		height: 0, //高度
		paddingTop: 0, //上内边距
		paddingBottom: 0, //下内边距
		paddingLeft: 0, //左内边距
		paddingRight: 0 //右内边距
	});
	onBeforeMount(() => {
		const systemInfo = uni.getSystemInfoSync();
		statusBarHeight.value = systemInfo.statusBarHeight;
		const customInfo = uni.getMenuButtonBoundingClientRect();
		// 导航栏的宽度 = 胶囊最左侧距离手机屏幕最左侧的距离
		navBarStyle.width = `${customInfo.left}px`;
		// 导航栏的上下边距 = 胶囊最上侧距离手机顶部的高度 - 状态栏的高度
		navBarStyle.paddingTop = `${customInfo.top - statusBarHeight.value}px`;
		navBarStyle.paddingBottom = `${customInfo.top - statusBarHeight.value}px`;
		// 导航栏的左右边距 = 手机宽度 - 胶囊最右侧距离手机屏幕最左侧的距离
		navBarStyle.paddingLeft = `${systemInfo.screenWidth - customInfo.right}px`;
		navBarStyle.paddingRight = `${systemInfo.screenWidth - customInfo.right}px`;
		// 导航栏的高度 = 胶囊的高度 + （胶囊最上侧距离手机顶部的高度 - 状态栏的高度）* 2
		navBarStyle.height = `${customInfo.height + (customInfo.top - statusBarHeight.value)*2}px`;
	});
</script>

<style lang="less" scoped>
	.container {
		height: 100vh;

		.bar_box {
			background-color: #FFE233;

			.status_bar {}

			.nav_bar {
				display: flex;
				align-items: center;
				box-sizing: border-box;
				justify-content: space-between;

				.nav_bar_left {
					font-weight: bold;
				}

				.nav_bar_right {
					height: 100%;
					display: flex;
					padding: 0 1rem;
					font-size: 0.9rem;
					border-radius: 1rem;
					align-items: center;
					background-color: #FFF3AD;
				}
			}
		}
	}
</style>