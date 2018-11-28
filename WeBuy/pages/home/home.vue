<template>
	<view class="container" @touchmove="touchMove" @touchstart="touchStart">
		<!-- #ifdef APP-PLUS -->
		<view class="nav">
			<view class="nav-bar" :style="{'margin-top': statusHeight + 'px'}">
				<image src="../../static/scan.png"></image>
				<view class="input-view">
					<image src="../../static/search.png"></image>
					<input confirm-type="search" class="input" type="text" placeholder="输入搜索关键词" />
				</view>
				<image src="../../static/info.png"></image>
			</view>
		</view>
		<!-- #endif -->
		
		<block v-for="(template, index) in templateList" :key="index">
			<tem-banners v-if="template.type == 1" :list="template.list"></tem-banners>
			<tem-items v-if="template.type == 2" :template="template"></tem-items>
			<tem-grid v-if="template.type == 3" :template="template"></tem-grid>
			<tem-one4two v-if="template.type == 4" :template="template"></tem-one4two>
			<tem-one4four v-if="template.type == 5" :template="template"></tem-one4four>
			<tem-page v-if="template.type == 6" :template="template"></tem-page>
		</block>
	</view>
</template>

<script>
	import temGrid from '../../components/template/template-grid.vue'
	import temItems from '../../components/template/template-items.vue'
	import temOne4four from '../../components/template/template-one4four.vue'
	import temOne4two from '../../components/template/template-one4two.vue'
	import temPage from '../../components/template/template-page.vue'
	import temBanners from '../../components/template/template-banners.vue'
	
	export default {
		components: {
			'tem-grid': temGrid,
			'tem-items': temItems,
			'tem-one4four': temOne4four,
			'tem-one4two': temOne4two,
			'tem-page': temPage,
			'tem-banners': temBanners
		},
		data() {
			return {
				statusHeight: 20,
				currentY: 0,
				templateList: [
					{
						type: 1,
						list: [
							{image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://login/login'},
							{image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg', action: 'wb://cart/cart'},
							{image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg', action: 'wb://account/setting'}
						]
					},
					{
						type: 2,
						lineNumber: 4,
						list: [
							{title: '11', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '22', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '33', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '66', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '11', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '22', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '33', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '66', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'}
						]
					},
					{
						type: 3,
						title: '精品分类',
						headerImg: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						list: [
							{title: '11', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '22', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '33', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '44', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '55', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '66', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'}
						]
					},
					
					{
						type: 4,
						main: {image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg', action: 'wb://account/setting'},
						top: {image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://cart/cart'},
						bottom: {image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg', action: 'wb://login/login'}
					},
					{
						type: 6,
						title: '测试专区',
						haveMore: false,
						headerImg: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						list: [
							{title: '11', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '33', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg', action: 'wb://account/setting'}
						]
					},
					{
						type: 5,
						title: '精品一拖四',
						headerImg: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						main: {image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg', action: 'wb://account/setting'},
						items: [
							{title: '11', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '22', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '33', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '66', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'}
						]
					},
					{
						type: 6,
						title: '精品专区',
						haveMore: true,
						headerImg: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						list: [
							{title: '11', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '22', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '33', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg', action: 'wb://account/setting'},
							{title: '11', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '33', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg', action: 'wb://account/setting'},
							{title: '11', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '22', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '33', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg', action: 'wb://account/setting'},
							{title: '11', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '22', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg', action: 'wb://account/setting'},
							{title: '22', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg', action: 'wb://account/setting'},
							{title: '33', image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg', action: 'wb://account/setting'}
						]
					}
				]
			};
		},
		onLoad() {
			this.post('home/template', {}).then(res => {
				console.log(res);
			});
			
			this.statusHeight = uni.getSystemInfoSync().statusBarHeight;
		},
		methods: {
			touchStart: function(e) {
				this.currentY = e.clientY;
			},
			touchMove: function(e) {
				var offsetY = e.clientY - this.currentY;
				this.currentY = e.clientY;
				
				// this.statusHeight += offsetY;
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
    }
	
    page {
        background: #efeff4;
    }
	
	/* nav */
	.nav {
		display: flex;
		flex-direction: column;
		position: fixed;
		z-index: 99;
		height: 64px;
		width: 750upx;
	}
	
	.nav-bar {
		display: flex;
		flex-direction: row;
		height: 44px;
		justify-content: space-around;
	}
	
	.nav-bar image {
		width: 26px;
		height: 26px;
		margin-top: 8px;
	}
	
	.input-view {
		width: 500upx;
		display: flex;
		flex-direction: row;
		height: 30px;
		border-radius: 15px;
		padding: 0 10px;
		border: 2upx solid;
		border-color: #eee;
		margin-top: 6px;
	}
	
	.input-view image {
		width: 24px;
		height: 24px;
		margin-top: 3px;
	}
	
	.input {
		height: 30px;
		padding: 0 5px;
	}
	
</style>
