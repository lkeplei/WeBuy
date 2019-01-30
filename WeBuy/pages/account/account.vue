<template>
	<view class="page">
		<!-- <image class="header-bg" src="../../static/account/account-top-bg.png"></image> -->
		<view class="header" :style="{'height': headerHeight + 'px'}">
			<view class="user" @click="userClick" :style="{'margin-top': statusHeight + 44 + 'px'}">
				<image src="../../static/userDefault.png" @click.stop="avatarClick"></image>
				<text>{{accountName}}</text>
			</view>
			
			<view class="func">
				<block v-for="(item, index) in funcList" :key="index">
					<view @click="clickAction(item.action)">
						<image :src="item.image"></image>
						<text>{{item.text}}</text>
					</view>
				</block>
			</view>
		</view>
		
		<view class="order">
			<view class="order-all order-all-right" @click="clickItem('all')"> 
				<text>{{accountAllOrder}}</text>
				<text> </text>
			</view>
			
			<view class="order-status">
				<block v-for="(item, index) in orderStatusList" :key="index">
					<view @click="clickItem(item.type)">
						<image :src="item.image"></image>
						<text>{{item.text}}</text>
					</view>
				</block>
			</view>
		</view>
		
		<view class="service">
			<block v-for="(list, index) in serviceList" :key="index">
				<view class="service-line">
					<block v-for="(item, indexKey) in list" :key="indexKey">
						<view @click="clickAction(item.action)">
							<image :src="item.image"></image>
							<text>{{item.text}}</text>
						</view>
					</block>
				</view>
			</block>
		</view>
		
		<view class="container">
			<text class="cart-guess-title">{{guessTitleText}}</text>
			
			<view class="news-grid-9">
				<view class="news-grid-9-item" v-for="(item, index) in guessList" :key="index" @click="goProductDetail(item.proId)">
					<image class="news-grid-9-image" :src="item.url"></image>
					<text class="news-grid-9-text">{{item.price}}</text>
					<view class="news-grid-heart" @click.stop="clickHeart(item)">
						<image :src="item.wishImg"></image>
						<text>{{item.number}}</text>
					</view>
				</view>
			</view>
			<load-more v-show="guessList.length > 6" :loadingType="loadingType" :contentText="contentText"></load-more>
		</view>
	</view>
</template>

<script>
	import loadMore from '../../components/load-more.vue'
	
	export default {
		components: {
			'load-more': loadMore
		},
		data() {
			return {
				statusHeight: 20,
				accountAllOrder: this.local('accountAllOrder'),
				accountName: this.local('accountUnlogin'),
				funcList: [
					{image:'/static/account/account-wish.png', text: this.local('accountFuncWish'), action: 'wb://account/wish'},
					{image:'/static/account/account-history.png', text: this.local('accountFuncHistory'), action: 'wb://account/history'}
				],
				orderStatusList: [
					{image:'/static/account/account-unpaid.png', text: this.local('accountOrderUnpaid'), type: 'unpaid'},
					{image:'/static/account/account-preparing.png', text: this.local('accountOrderPreparing'), type: 'preparing'},
					{image:'/static/account/account-shipped.png', text: this.local('accountOrderShipped'), type: 'shipped'},
					{image:'/static/account/account-reviews.png', text: this.local('accountOrderReviews'), type: 'reviews'},
					{image:'/static/account/account-returns.png', text: this.local('accountOrderReturns'), type: 'returns'}
				],
				serviceList: [
					[
						{image:'/static/account/account-FAQ.png', text: this.local('accountFAQ'), action: 'wb://'},
						{image:'/static/account/account-contact.png', text: this.local('accountContact'), action: 'wb://'},
						{image:'/static/account/account-support.png', text: this.local('accountSupport'), action: 'wb://'}
					]
				],
				
				guessTitleText: this.local('cartGuessTitle'),
				guessPage: 0,
				guessList: [
					{
						"proId": 12,    /*商品id*/
						"url": "/static/account/guess-1.jpg",    /*商品图片地址*/
						"wish": true,    /*是否已在心愿表*/
						"number": "17230",    /*有多少人加入心愿*/
						"price": "$121.30",    /*商品价格*/
						wishImg: '../../static/cart/cartLike.png',
						"discount": "30%"    /*折扣数*/
					},
					{
						"proId": 12,    /*商品id*/
						"url": "/static/account/guess-2.jpg",    /*商品图片地址*/
						"wish": true,    /*是否已在心愿表*/
						"number": "12230",    /*有多少人加入心愿*/
						"price": "$121.30",    /*商品价格*/
						wishImg: '../../static/cart/cartDislike.png',
						"discount": "30%"    /*折扣数*/
					},
					{
						"proId": 12,    /*商品id*/
						"url": "/static/account/guess-3.jpg",    /*商品图片地址*/
						"wish": true,    /*是否已在心愿表*/
						"number": "12130",    /*有多少人加入心愿*/
						"price": "$121.30",    /*商品价格*/
						wishImg: '../../static/cart/cartDislike.png',
						"discount": "30%"    /*折扣数*/
					},
					{
						"proId": 12,    /*商品id*/
						"url": "/static/account/guess-4.jpg",    /*商品图片地址*/
						"wish": true,    /*是否已在心愿表*/
						"number": "12",    /*有多少人加入心愿*/
						"price": "$121.30",    /*商品价格*/
						wishImg: '../../static/cart/cartLike.png',
						"discount": "30%"    /*折扣数*/
					},
					{
						"proId": 12,    /*商品id*/
						"url": "/static/account/guess-5.jpg",    /*商品图片地址*/
						"wish": true,    /*是否已在心愿表*/
						"number": "13",    /*有多少人加入心愿*/
						"price": "$121.30",    /*商品价格*/
						wishImg: '../../static/cart/cartDislike.png',
						"discount": "30%"    /*折扣数*/
					},
					{
						"proId": 12,    /*商品id*/
						"url": "/static/account/guess-6.jpg",    /*商品图片地址*/
						"wish": true,    /*是否已在心愿表*/
						"number": "1220",    /*有多少人加入心愿*/
						"price": "$121.30",    /*商品价格*/
						wishImg: '../../static/cart/cartDislike.png',
						"discount": "30%"    /*折扣数*/
					},
					{
						"proId": 12,    /*商品id*/
						"url": "/static/account/guess-7.jpg",    /*商品图片地址*/
						"wish": true,    /*是否已在心愿表*/
						"number": "1290",    /*有多少人加入心愿*/
						"price": "$121.30",    /*商品价格*/
						wishImg: '../../static/cart/cartLike.png',
						"discount": "30%"    /*折扣数*/
					},
					{
						"proId": 12,    /*商品id*/
						"url": "/static/account/guess-8.jpg",    /*商品图片地址*/
						"wish": true,    /*是否已在心愿表*/
						"number": "1830",    /*有多少人加入心愿*/
						"price": "$121.30",    /*商品价格*/
						wishImg: '../../static/cart/cartDislike.png',
						"discount": "30%"    /*折扣数*/
					},
					{
						"proId": 12,    /*商品id*/
						"url": "/static/account/guess-9.jpg",    /*商品图片地址*/
						"wish": true,    /*是否已在心愿表*/
						"number": "10",    /*有多少人加入心愿*/
						"price": "$121.30",    /*商品价格*/
						wishImg: '../../static/cart/cartDislike.png',
						"discount": "30%"    /*折扣数*/
					},
					{
						"proId": 12,    /*商品id*/
						"url": "/static/account/guess-10.jpg",    /*商品图片地址*/
						"wish": true,    /*是否已在心愿表*/
						"number": "30",    /*有多少人加入心愿*/
						"price": "$121.30",    /*商品价格*/
						wishImg: '../../static/cart/cartLike.png',
						"discount": "30%"    /*折扣数*/
					},
					{
						"proId": 12,    /*商品id*/
						"url": "/static/account/guess-11.jpg",    /*商品图片地址*/
						"wish": true,    /*是否已在心愿表*/
						"number": "11230",    /*有多少人加入心愿*/
						"price": "$121.30",    /*商品价格*/
						wishImg: '../../static/cart/cartDislike.png',
						"discount": "30%"    /*折扣数*/
					},
					{
						"proId": 12,    /*商品id*/
						"url": "/static/account/guess-12.jpg",    /*商品图片地址*/
						"wish": true,    /*是否已在心愿表*/
						"number": "30",    /*有多少人加入心愿*/
						"price": "$121.30",    /*商品价格*/
						wishImg: '../../static/cart/cartDislike.png',
						"discount": "30%"    /*折扣数*/
					},
					{
						"proId": 12,    /*商品id*/
						"url": "/static/account/guess-13.jpg",    /*商品图片地址*/
						"wish": true,    /*是否已在心愿表*/
						"number": "1237",    /*有多少人加入心愿*/
						"price": "$121.30",    /*商品价格*/
						wishImg: '../../static/cart/cartLike.png',
						"discount": "30%"    /*折扣数*/
					},
					{
						"proId": 12,    /*商品id*/
						"url": "/static/account/guess-14.jpg",    /*商品图片地址*/
						"wish": true,    /*是否已在心愿表*/
						"number": "1430",    /*有多少人加入心愿*/
						"price": "$121.30",    /*商品价格*/
						wishImg: '../../static/cart/cartDislike.png',
						"discount": "30%"    /*折扣数*/
					},
					{
						"proId": 12,    /*商品id*/
						"url": "/static/account/guess-15.jpg",    /*商品图片地址*/
						"wish": true,    /*是否已在心愿表*/
						"number": "2230",    /*有多少人加入心愿*/
						"price": "$121.30",    /*商品价格*/
						wishImg: '../../static/cart/cartDislike.png',
						"discount": "30%"    /*折扣数*/
					},
					{
						"proId": 12,    /*商品id*/
						"url": "/static/account/guess-16.jpg",    /*商品图片地址*/
						"wish": true,    /*是否已在心愿表*/
						"number": "123",    /*有多少人加入心愿*/
						"price": "$121.30",    /*商品价格*/
						wishImg: '../../static/cart/cartLike.png',
						"discount": "30%"    /*折扣数*/
					},
					{
						"proId": 12,    /*商品id*/
						"url": "/static/account/guess-17.jpg",    /*商品图片地址*/
						"wish": true,    /*是否已在心愿表*/
						"number": "230",    /*有多少人加入心愿*/
						"price": "$121.30",    /*商品价格*/
						wishImg: '../../static/cart/cartDislike.png',
						"discount": "30%"    /*折扣数*/
					},
					{
						"proId": 12,    /*商品id*/
						"url": "/static/account/guess-18.jpg",    /*商品图片地址*/
						"wish": true,    /*是否已在心愿表*/
						"number": "130",    /*有多少人加入心愿*/
						"price": "$121.30",    /*商品价格*/
						wishImg: '../../static/cart/cartDislike.png',
						"discount": "30%"    /*折扣数*/
					}
				],
				loadingType: 0,
				contentText: {
					contentdown: this.local('loadingDown'),
					contentrefresh: this.local('loadingFresh'),
					contentnomore: this.local('loadingNomore')
				}
			};
		},
		onLoad() {
			// 设置导航栏标题
			uni.setNavigationBarTitle({
				title: this.local('navTitleAccount')
			});
			
			this.statusHeight = uni.getSystemInfoSync().statusBarHeight;
		},
		onShow() {
			// 获取用户信息
			this.post('user/info', {}).then(res => {
				this.accountName = res.data.name;
			});
		},
		onReachBottom() {
			if (this.loadingType != 0) {
				return;
			}
			this.loadingType = 1;
			for (let i = 0; i < 3; i++) {
				this.guessList.push(this.guessList[Math.floor(Math.random()*this.guessList.length)]);
			}
			setTimeout(() => {
				if (this.guessList.length >= 60) {
					this.loadingType = 2;
					return;
				}
				this.loadingType = 0;
			}, 50);
			
// 			if (this.loadingType != 0) {
// 				return;
// 			}
// 			
// 			this.loadingType = 1;
// 			this.post('user/getGuessList', {page: this.guessPage}).then(res => {
// 				this.guessPage++;
// 				this.loadingType = res.data.haveMore ? 0 : 2;
// 				
// 				if (res.data.list && res.data.list.length > 0) {
// 					res.data.list.forEach((product) => {
// 						product.wishImg = '../../static/cart/' + item.wish ? 'cartLike.png' : 'cartDislike.png';
// 					});	
// 					
// 					this.guessList.concat(res.data.list);
// 				}
// 			});
		},
		onNavigationBarButtonTap(index) {
			this.router('wb://account/setting', () => {});
		},
		computed: {
			headerHeight() {
				return this.statusHeight + 204;
			}
		},
		methods: {
			userClick: function() {
				var sign = uni.getStorageSync(this.staticVar.sign);

				if (typeof sign == 'string' && sign.length > 0) {
					uni.navigateTo({
						url: '/pages/account/my-info?userName=' + this.accountName
					});
				} else {
					uni.navigateTo({
						url: '/pages/login/login'
					});
				}
			},
			avatarClick: function() {
				uni.showToast({
					title: 'avatarClick'
				});
			},
			clickItem: function(type) {
				this.router('wb://order/list?type=' + type, () => {
					
				});
			},
			clickAction: function(action) {
				this.router(action, () => {
					
				});
			},
			goProductDetail: function(proId) {
				this.router('wb://product/detail?proId=' + proId, () => {});	
			},
			clickHeart: function(item) {
				this.post('product/like', {proId: item.proId}).then(res => {
					item.number = res.data.number;
					item.wish = res.data.wish;
				});
			}
		}
	}
</script>

<style scoped>
	.page {
		color: #686868;
		font-size: 24upx;
	}
	
	.header {
		display: flex;
		flex-direction: column;
		color: #FFFFFF;
		height: 400upx;
		background-color: #D24C30;
	}
	
	.header-bg {
		position: fixed;
		top: 0;
		left: 0;
		/* z-index: 0; */
		width: 750upx;
		height: 400upx;
	}
	
	.user {
		display: flex;
		flex-direction: row;
		height: 180upx;
		align-items: center;
	}
	
	.user image {
		width: 120upx;
		height: 120upx;
		margin: 30upx 20upx 10upx 20upx;
	}
	
	.user text {
		font-size: 28upx;
	}
	
	.func {
		display: flex;
		flex-direction: row;
		height: 140upx;
	}
	
	.func view {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 375upx;
	}
	
	.func image {
		margin: 10upx 0upx;
		width: 70upx;
		height: 66upx;
	}
	
	/* order */
	.order {
		display: flex;
		flex-direction: column;
		height: 240upx;
		color: #3A3A3A;
		font-size: 30upx;
		background-color: #FFFFFF;
	}
	
	.order-status {
		display: flex;
		flex-direction: row;
		height: 160upx;
		justify-content: space-around;
		border-top: 1upx solid;
		border-color: #eee;
		color: #686868;
		font-size: 24upx;
	}
	
	.order-status view {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.order-status image {
		margin: 30upx 0;
		width: 42upx;
		height: 42upx;
	}
	
	/* service */
	.service {
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		margin: 20upx 0;
	}
	
	.service-line {
		display: flex;
		flex-direction: row;
		height: 166upx;
		font-size: 24upx;
		margin: 32upx 0 0 0;
		color: #686868;
	}
	
	.service-line view {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 250upx;
	}
	
	.service-line image {
		margin: 32upx 0;
		width: 44upx;
		height: 44upx;
	}
	
	.order-all {
		padding: 0upx 30upx;
		line-height: 80upx;
		position: relative;
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		justify-content: space-between;
		align-items: center;
	}
	
	.order-all.order-all-right:after {
		font-family: uniicons;
		content: '\e583';
		position: absolute;
		right: 24upx;
		top: 50%;
		color: #bbb;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	
	/* 猜你喜欢 */
	.container {
		font-size: 28upx;
		color: #666666;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #FFFFFF;
	}
	
	.cart-img {
		margin-top: 70upx;
		width: 240upx;
		height: 240upx;
	}
	
	.cart-desc {
		margin: 20upx 0;
	}
	
	.cart-buy {
		width: 220upx;
		height: 54upx;
		color: #FFFFFF;
		background-color: #333333;
		margin-bottom: 90upx;
	}
	
	.cart-buy text {
		width: 100%;
		line-height: 60upx;
		text-align: center;
	}
	
	.cart-guess-title {
		color: #333333;
		font-size: 34upx;
		margin-top: 30upx;
	}
	
	/* 九宫格 */
	.news-grid-9 {
		background: #FFF;
		width: 750upx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.news-grid-9-item {
		width: 250upx;
		height: 360upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-bottom: 2upx solid;
		border-color: #eee;
		box-sizing: border-box;
		margin-top: 30upx;
	}
	
	.news-grid-9-image {
		width: 180upx;
		height: 260upx;
	}
	
	.news-grid-9-text {
		width: 250upx;
		line-height: 60upx;
		height: 60upx;
		text-align: center;
		color: #FF0013;
	}
	
	.news-grid-heart {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 10upx;
	}
	
	.news-grid-heart image {
		width: 30upx;
		height: 30upx;
		margin-right: 12upx;
	}
	
	.news-grid-heart text {
		font-size: 22upx;
	}
</style>
