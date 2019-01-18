<template>
	<view>
		<view v-if="proList.length > 0">
			<scroll-view scroll-y :style="{height:winHeight - 44 + 'px;'}">
				<checkbox-group @change.stop="checkboxChange">
					<block v-for="(item, index) in proList" :key="index">
						<view class="cart-item" :animation="item.animationData">
							<view class="product">
								<checkbox :value="item.proId" :checked="item.checked" />
								<image :src="item.image"></image>
								
								<view class="pro-info" @tap="goProductDetail(item.proId)">
									<view class="edit" @tap.stop="proEdit(item)">
										<text v-show="!isEdit">{{editText}}</text>
									</view>
									<text class="name" :style="{'margin-top': isEdit ? '24upx' : '0'}">{{item.name}}</text>
									<view class="select" @tap.stop="tapSelect(item)">
										<view class="sel-content">
											<text>{{item.desc}}</text>
											<wb-icon size="10" :type="'arrowdown'"></wb-icon>
										</view>
										<text></text>
									</view>
									<view class="count">
										<view class="pro-price">
											<text class="price">${{item.price}}</text>
											<text class="original">{{item.originalPrice}}</text>
										</view>
										<wb-number-box v-model="item.count" :min="1" :height="40"></wb-number-box>
									</view>
								</view>
							</view>
							<view class="pro-edit" @tap.stop="proDelete(item)">
								<text>{{deleteText}}</text>
							</view>
						</view>
					</block>
				</checkbox-group>
			</scroll-view>
			
			<view class="bottom">
				<view class="bottom-select">
					<radio :value="all" :checked="checkAll" />
					<text>{{allText}}</text>
				</view>
					
				<view class="bottom-info">
					<view class="total-price">
						<text>{{totalText}}</text>
						<text class="money">${{totalPrice}}</text>
					</view>
					<view class="buy-now" :style="{'background-color': totalPrice > 0 ? '#D24C30' : '#DBDBDB'}">
						<text>{{buyText}}</text>
					</view>
				</view>
			</view>
		</view>
		
		<view v-else class="container">
			<image class="cart-img" src=../../static/cart/cartIcon.png mode=""></image>
			<text class="cart-desc">{{buyNowDescText}}</text>
			<view class="cart-buy"> <text>{{buyNowText}}</text></view>
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
	import wbNumberBox from '../../components/wb-number-box.vue'
	import wbIcon from '../../components/wb-icon.vue'
	
	export default {
		components: {
			'load-more': loadMore,
			'wb-number-box': wbNumberBox,
			'wb-icon': wbIcon
		},
		data() {
			return {
				isEdit: false,
				editText: this.local('cartEdit'),
				deleteText: this.local('cartDelete'),
				animation: uni.createAnimation({
					duration: 500,
					timingFunction: 'ease',
				}),
				
				allText: this.local('cartAll'),
				totalText: this.local('cartTotal'),
				buyText: this.local('cartBuy'),
				checkAll: false,
				winHeight: uni.getSystemInfoSync().windowHeight,
				
				proList: [
					{
						"proId": 1232,
						"name": "男装我是一个小步的端口，你年直接上去",
						"image": "http://dummyimage.com/180x150",
						"desc": "xl red",
						"count": 1,
						"price": 1224,
						"originalPrice": "$230",
						checked: false
					},
					{
						"proId": 1213,
						"name": "男装",
						"image": "http://dummyimage.com/180x150",
						"desc": "xl red",
						"count": 1,
						"price": 1124,
						"originalPrice": "$230",
						checked: true
					},
					{
						"proId": 1323,
						"name": "男装",
						"image": "http://dummyimage.com/180x150",
						"desc": "xl red",
						"count": 1,
						"price": 124,
						"originalPrice": "$230",
						checked: false
					},
					{
						"proId": 1243,
						"name": "男装",
						"image": "http://dummyimage.com/180x150",
						"desc": "xl red",
						"count": 1,
						"price": 124,
						"originalPrice": "$230",
						checked: false
					},
					{
						"proId": 12543,
						"name": "男装",
						"image": "http://dummyimage.com/180x150",
						"desc": "xl red",
						"count": 1,
						"price": 124,
						"originalPrice": "$230",
						checked: false
					},
					{
						"proId": 1253,
						"name": "男装",
						"image": "http://dummyimage.com/180x150",
						"desc": "xl red",
						"count": 1,
						"price": 124,
						"originalPrice": "$230",
						checked: false
					}
				],
				
				buyNowDescText: this.local('cartBuyNowDesc'),
				buyNowText: this.local('cartBuyNow'),
				guessTitleText: this.local('cartGuessTitle'),
				
				guessPage: 0,
				guessList: [
// 					{
// 					"proId": 12,    /*商品id*/
// 					"url": "http://dummyimage.com/150X200",    /*商品图片地址*/
// 					"wish": true,    /*是否已在心愿表*/
// 					"number": "1230",    /*有多少人加入心愿*/
// 					"price": "$123",    /*商品价格*/
// 					wishImg: '../../static/cart/cartLike.png',
// 					"discount": "30%"    /*折扣数*/
// 				},{
// 					"proId": 12,    /*商品id*/
// 					"url": "http://dummyimage.com/150X200",    /*商品图片地址*/
// 					"wish": true,    /*是否已在心愿表*/
// 					"number": "1230",    /*有多少人加入心愿*/
// 					"price": "$123",    /*商品价格*/
// 					wishImg: '../../static/cart/cartDislike.png',
// 					"discount": "30%"    /*折扣数*/
// 				},{
// 					"proId": 12,    /*商品id*/
// 					"url": "http://dummyimage.com/150X200",    /*商品图片地址*/
// 					"wish": true,    /*是否已在心愿表*/
// 					"number": "1230",    /*有多少人加入心愿*/
// 					"price": "$123",    /*商品价格*/
// 					wishImg: '../../static/cart/cartDislike.png',
// 					"discount": "30%"    /*折扣数*/
// 				},{
// 					"proId": 12,    /*商品id*/
// 					"url": "http://dummyimage.com/150X200",    /*商品图片地址*/
// 					"wish": true,    /*是否已在心愿表*/
// 					"number": "1230",    /*有多少人加入心愿*/
// 					"price": "$123",    /*商品价格*/
// 					wishImg: '../../static/cart/cartLike.png',
// 					"discount": "30%"    /*折扣数*/
// 				},{
// 					"proId": 12,    /*商品id*/
// 					"url": "http://dummyimage.com/150X200",    /*商品图片地址*/
// 					"wish": true,    /*是否已在心愿表*/
// 					"number": "1230",    /*有多少人加入心愿*/
// 					"price": "$123",    /*商品价格*/
// 					wishImg: '../../static/cart/cartDislike.png',
// 					"discount": "30%"    /*折扣数*/
// 				},{
// 					"proId": 12,    /*商品id*/
// 					"url": "http://dummyimage.com/150X200",    /*商品图片地址*/
// 					"wish": true,    /*是否已在心愿表*/
// 					"number": "1230",    /*有多少人加入心愿*/
// 					"price": "$123",    /*商品价格*/
// 					wishImg: '../../static/cart/cartDislike.png',
// 					"discount": "30%"    /*折扣数*/
// 				}
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
				title: this.local('navTitleCart')
			});
		},
		onShow() {
			// 刷新页面数据
			this.freshPageData();
		},
		onPullDownRefresh() {
			// 刷新页面数据
			this.freshPageData();
		},
		onReachBottom() {
			if (this.loadingType != 0) {
				return;
			}
			
			this.loadingType = 1;
			this.post('user/getGuessList', {page: this.guessPage}).then(res => {
				this.guessPage++;
				this.loadingType = res.data.haveMore ? 0 : 2;
				
				if (res.data.list && res.data.list.length > 0) {
					res.data.list.forEach((product) => {
						product.wishImg = '../../static/cart/' + item.wish ? 'cartLike.png' : 'cartDislike.png';
					});	
					
					this.guessList.concat(res.data.list);
				}
			});
		},
		computed: {
			totalPrice: function() {
				var money = 0;
				this.proList.forEach((product) => {
					if (product.checked) {
						money += product.price * product.count;
					}
				});
				
				return money;
			}
		},
		methods: {
			clickHeart(item) {
				this.post('product/like', {proId: item.proId}).then(res => {
					item.number = res.data.number;
					item.wish = res.data.wish;
				});
			},
			goProductDetail: function(proId) {
				this.router('wb://product/detail?proId=' + proId, () => {
					
				});
			},
			checkboxChange: function(e) {
				var items = this.proList, values = e.detail.value, checkedNum = 0;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					items[i].checked = false;
					for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
						if (items[i].proId == values[j]) {
							items[i].checked = true;
							checkedNum++;
							break
						}
					}
				}
				
				this.checkAll = checkedNum == this.proList.length;
			},
			onNumberChange: function(value, product) {
				// product.count = value;
				console.log('value == ' + value + JSON.stringify(product));
			},
			freshPageData: function() {
				this.guessPage = 0;
				this.post('cart/list', {}).then(res => {
					if (res.data.list && res.data.list.length > 0) {
						this.proList = res.data.list;
						
						this.proList.forEach((product) => {
							product.checked = false;
						});
					} else {
						this.post('user/getGuessList', {page: this.guessPage}).then(res => {
							this.guessPage++;
							this.loadingType = res.data.haveMore ? 0 : 2;
							
							if (res.data.list && res.data.list.length > 0) {
								this.guessList = res.data.list;
							
								this.guessList.forEach((product) => {
									product.wishImg = '../../static/cart/' + item.wish ? 'cartLike.png' : 'cartDislike.png';
								});	
							}
						});
					}
				});
			},
			tapSelect: function(pro) {
				uni.showToast({
					icon: 'none',
					title: 'show select view'
				})
			},
			// 编辑相关功能
			proEdit: function(pro) {
				this.animation.translate(-100, 0).step();
				pro.animationData = this.animation.export();
				
				this.isEdit = true;
			},
			proDelete: function(pro) {
				this.animation.translate(0, 0).step();
				pro.animationData = this.animation.export();
				
				this.isEdit = false;
			}
		}
	}
</script>

<style scoped>
	.container {
		font-size: 28upx;
		color: #666666;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #FFFFFF;
    }
	
	/* 有购物车的商品 */
	.cart-item {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.product {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 232upx;
		width: 750upx;
		border-bottom: #EEEEEE 1upx solid;
		background-color: #FFFFFF;
	}
	
	.pro-edit {
		width: 100px;
		height: 232upx;
		background-color: #FE0650;
	}
	
	.pro-edit text {
		width: 100px;
		line-height: 232upx;
		text-align: center;
		color: #FFFFFF;
	}

	.product image {
		width: 140upx;
		height: 184upx;
		margin-top: 24upx;
	}
	
	.pro-info {
		width: 510upx;
		padding-right: 20upx;
		margin: 0 0 24upx 12upx;
		font-size: 22upx;
	}
	
	.pro-info .edit {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		color: #D9D9D9;
		height: 24upx;
	}
	
	.pro-info .name {
		color: #606060;
		height: 24upx;
	}
	
	.pro-info .select {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 20upx 0;
	}
	
	.sel-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #F9F9F9;
		padding: 0 20upx;
		height: 50upx;
		color: #ABABAB;
	}
	
	.sel-content text {
		margin-right: 20upx;
	}
	
	.pro-info .count {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.pro-price {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
	}
	
	.pro-price .price {
		color: #FF0714;
		font-size: 28upx;
		margin-right: 12upx;
	}
	
	.pro-price .original {
		color: #666666;
		text-decoration: line-through;
	}
	
	/* 有购物车的底部 bottom */
	.bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 44px;
		border: #EEEEEE 1upx solid;
		/* position: fixed; */
	}
	
	.bottom text {
		font-size: 30upx;
		line-height: 44px;
	}
	
	.bottom-select {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 20upx;
		
		font-weight: bold;
	}
	
	.bottom-info {
		display: flex;
		flex-direction: row;
	}
	
	.total-price {
		display: flex;
		flex-direction: row;
		margin-right: 20upx;
	}
	
	.total-price .money {
		color: #FF0714;
	}
	
	.buy-now {
		font-size: 30upx;
		/* background-color: #D24C30; */
		color: #FFFFFF;
		padding: 0 44upx;
	}
	
	/* 购物车空时 */
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
		font-size: 32upx;
	}

	/* 九宫格 */
	.news-grid-9 {
		background: #FFF;
		width: 750upx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-top: 20upx;
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
