<template>
	<view class="page">
		<wb-nav ref="nav" :leftBtn="leftBtn" :rightBtn="rightBtn" @rightBtnClick="cancel">
			<view class="input-view">
				<image src="../../static/search.png"></image>
				<input focus="true" confirm-type="search" class="input" type="text" 
					v-model="searchKey" :placeholder="placeSearch" @confirm="search"/>
			</view>
		</wb-nav>
		
		<!-- 用了自定义导航栏，需要占位 -->
		<view :style="{'height': navHeight + 'px'}"></view>
		
		<view v-if="searchList.showHistory" class="container">
			<block v-for="(object, index) in searchList.list" :key="index">
				<view class="item">
					<view class="item-header">
						<image :src="object.icon"></image>
						<text>{{object.title}}</text>
					</view>
					<view class="item-value">
						<block v-for="(item, key) in object.list" :key="key">
							<view :style="{'color': item.textColor, 'background-color': item.bgColor}" @tap="search(item.key)">
								<text>{{item.key}}</text>
							</view>
						</block>
					</view>
				</view>
			</block>
		</view>
		
		<view v-else class="container">
			<view class="filtrate">
				<text>排序</text>
			</view>
			
			<view class="pro-list">
				<block v-for="(product, index) in searchList.proList" :key="index">
					<view class="product" @tap="choosePro(product.proId)">
						<view class="pro-img">
							<image :src="product.image"></image>
						</view>
						<view class="pro-desc">
							<view class="pro-name">
								<image :src="product.tag"></image>
								<text>{{product.name}}</text>
							</view>
							<view class="pro-price">
								<text>{{product.price}}</text>
							</view>
						</view>
					</view>
				</block>
			</view>
			<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
		</view>
	</view>
</template>

<script>
	import wbNav from '../../components/wb-nav.vue'
	import loadMore from '../../components/load-more.vue'
	
	export default {
		components: {
			'wb-nav': wbNav,
			'load-more': loadMore
		},
		data() {
			return {
				searchKey: '',
				page: 0,
				placeSearch: this.local('searchPlace'),
				
				navHeight: 64,
				leftBtn: {},
				rightBtn: {text: this.local('publicCancel')},
				
				loadingType: 0,
				contentText: {
					contentdown: this.local('loadingDown'),
					contentrefresh: this.local('loadingFresh'),
					contentnomore: this.local('loadingNomore')
				},
				
				searchList: {
					showHistory: true,
					list: [
						{
							title: '搜索历史',
							icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							list: [
								{key: '男装', bgColor: '#FFFF00', textColor: '#FF0000'},
								{key: '男装', bgColor: '#FFFF00', textColor: '#333333'},
								{key: '男装男装男装男装', bgColor: '#FFFF00', textColor: '#333333'},
								{key: '男装', bgColor: '#FFFF00', textColor: '#333333'},
								{key: '男装', bgColor: '#FFFF00', textColor: '#000FFF'},
								{key: '男装', bgColor: '#FFFF00', textColor: '#333333'}
							]
						},
						{
							title: '热门搜索',
							icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
							list: [
								{key: '男装', bgColor: '#FF0000', textColor: '#AA3333'},
								{key: '男装', bgColor: '#F0FF00', textColor: '#333A33'},
								{key: '男装男装男装男装', bgColor: '#FFFF00', textColor: '#3A3333'},
								{key: '男装', bgColor: '#FF0F00', textColor: '#33A33A'},
								{key: '男装男装男', bgColor: '#FFFF00', textColor: '#333A33'},
								{key: '男装', bgColor: '#0FFF00', textColor: '#33333A'}
							]
						}
					],
					haveMore: false,
					proList: [
						{
							name: '我只是一我只是一个小饰品啊个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							tagImg: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
							price: '$12.12',
							tag: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg'
						},
						{
							name: '我只是一个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							tagImg: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
							price: '$12.12',
							tag: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg'
						},
						{
							name: '我只是一个小饰品啊我只是一个小饰品啊我只是一个小饰品啊我只是一个小饰品啊我只是一个小饰品啊我只是一个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							tagImg: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
							price: '$12.12',
							tag: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg'
						},
						{
							name: '我只是一个小饰品啊我只是一个小饰品啊我只是一个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							tagImg: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
							price: '$12.12',
							tag: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg'
						},
						{
							name: '我只是一个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							tagImg: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
							price: '$12.12',
							tag: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg'
						},
						{
							name: '我只是一个小饰品啊我只是一个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							tagImg: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
							price: '$12.12',
							tag: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg'
						},
						{
							name: '我只是一个小我只是一个小饰品啊饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							tagImg: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
							price: '$12.12',
							tag: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg'
						}
					]
				}
			};
		},
		onLoad() {
			this.post('home/search', {}).then(res => {
				// this.searchList = res.list;
			});
		},
		onReady() {
			this.navHeight = this.$refs.nav.navHeight();
		},
		onReachBottom() {
			if (this.loadingType != 0) {
				return;
			}
			this.loadingType = 1;
			
			if (searchList.haveMore) {
				this.page++;
				this.search(this.searchKey);
			} else {
				this.loadingType = 2;
			}
		},
		methods: {
			cancel: function () {
				uni.navigateBack({
					delta: 1
				});
			},
			search: function (key) {
				this.searchKey = key.length > 0 ? key : this.searchKey;
				
				//测试用的，真实要去掉
				this.searchList.showHistory = this.searchKey.length <= 0;
				
				this.post('home/search', {key: this.searchKey, page: this.page}).then(res => {
					// this.searchList = res.list;
					this.loadingType = 0;
				});
			},
			choosePro: function (proId) {
				uni.navigateTo({
					url: '../product/pro-detail?proId=' + proId
				});
			}
		}
	}
</script>

<style scoped>
	.page {
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
	}
	
	.input-view {
		width: 500upx;
		display: flex;
		flex-direction: row;
		height: 28px;
		border-radius: 14px;
		padding: 0 10px;
		border: 2upx solid;
		border-color: #eee;
		margin-top: 8px;
	}
	
	.input-view image {
		width: 24px;
		height: 24px;
		margin-top: 3px;
	}
	
	.input {
		height: 28px;
		padding: 0 5px;
	}
	
	.container {
		display: flex;
		flex-direction: column;
	}
	
	/* history */
	.item {
		display: flex;
		flex-direction: column;
		font-size: 26upx;
	}
	
	.item-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 80upx;
		color: #1C1C1C;
		background-color: #F8F8F8;
	}
	
	.item-header image {
		width: 32upx;
		height: 28upx;
		margin: 26upx 20upx 26upx 30upx;
	}
	
	.item-value {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		color: #666666;
		padding: 15upx 0;
	}
	
	.item-value view {
		margin: 15upx 30upx;
		height: 64upx;
		border-radius: 32upx;
		background-color: #F8F8F8;
	}
	
	.item-value text {
		line-height: 64upx;
		padding: 0 32upx;
	}
	
	/* pro list */
	.filtrate {
		display: flex;
		flex-direction: row;
		height: 80upx;
		background-color: #FFFFFF;
	}
	
	.pro-list {
		display: flex;
		flex-direction: column;
	}
	
	.product {
		display: flex;
		flex-direction: row;
		height: 250upx;
		background-color: #FFFFFF;
		border-bottom: #EEEEEE 1upx solid;
	}
	
	.pro-img {
		width: 250upx;
		height: 250upx;
	}
	
	.pro-img image {
		width: 200upx;
		height: 200upx;
		margin: 25upx 20upx 25upx 30upx;
	}
	
	.pro-desc {
		display: flex;
		flex-direction: column;
		width: 500upx;
		height: 250upx;
	}
	
	.pro-name {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		height: 160upx;
		margin-top: 25upx;
	}
	
	.pro-name image {
		width: 100upx;
		height: 28upx;
	}
	
	.pro-name text {
		font-size: 26upx;
		line-height: 30upx;
		margin-left: 10upx;
	}
	
	.pro-price {
		color: #DC143C;
		font-size: 32upx;
		height: 40upx;
		line-height: 40upx;
		margin-bottom: 25upx;
	}
</style>
