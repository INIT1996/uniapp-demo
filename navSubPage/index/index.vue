<template>
	<view class="container">
		<image class="bg" src="../static/myBg.png" mode="aspectFill"></image>
		<view class="bar_box">
			<view class="status_bar" :style="{height:statusBarHeight+'px'}"></view>
			<view class="nav_bar" :style="{ height:navBarHeight+'px' }">
				自定义nav
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onBeforeMount
	} from 'vue';
	// 状态栏高度
	let statusBarHeight = ref(0);
	// 导航栏样式
	let navBarHeight = ref(0);
	onBeforeMount(() => {
		const systemInfo = uni.getSystemInfoSync();
		// 状态栏的高度
		statusBarHeight.value = systemInfo.statusBarHeight;
		// 获取胶囊的定位
		const custom = wx.getMenuButtonBoundingClientRect();
		// 导航栏的高度 = 胶囊的高度 + （胶囊最上侧距离手机顶部的高度 - 状态栏的高度）* 2
		navBarHeight.value = custom.height + (custom.top - statusBarHeight.value) * 2;
		
		// ----------------------拓展与思考-------------------------
		
		// 导航栏的实际宽度（扒除胶囊的部分）= 胶囊最左侧距离手机屏幕最左侧的距离
		let navBarWidth = custom.left;
		// 导航栏的左右边距 = 手机宽度 - 胶囊最右侧距离手机屏幕最左侧的距离
		let navPaddingLeft = systemInfo.screenWidth - customInfo.right;
		// 导航栏的上下边距 = 胶囊最上侧距离手机顶部的高度 - 状态栏的高度
		let navPaddingTop = custom.top - statusBarHeight.value;
	});
</script>

<style lang="less" scoped>
	.container {
		height: 100vh;
		box-sizing: border-box;
		.bg {
			width: 100%;
			height: 45vh;
			position: fixed;
		}
		.bar_box {
			z-index: 1;
			position: relative;

			.nav_bar {
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
</style>