<template>
	<view class="page">
		<view>
			<image src=https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg mode=""></image>
		</view>
		<view>
			You have a free gift to receive.
		</view>
		<button type="primary">
			Get Now
		</button>
		<view>
			You May Also Like
		</view>
		
		<view class="uni-grid-9">
			<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" v-for="(item,index) in list" :key="index" :class="index % 3 === 2 ? 'no-border-right' : ''">
				<image class="uni-grid-9-image" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg"></image>
				<text class="uni-grid-9-text" style="margin-top: 20upx;">grid</text>
				<text class="uni-grid-9-text">1234</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{},
					{},
					{},
					{},
					{},
					{},
					{}
				]
			};
		},
		onLoad() {
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					console.log(res);
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>
	.page {
        padding-top: 10upx;
		
		display: flex;
		flex-direction: column;
		align-items: center;
    }

    page {
        background: #efeff4;
    }
</style>
