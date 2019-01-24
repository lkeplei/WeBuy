<template>
	<view>
		<scroll-view id="tab-bar" class="swiper-tab" scroll-x :scroll-left="scrollLeft">
			<view v-for="(tab,index) in tabBars" :key="tab.id" :id="tab.id"  @tap="tapTab"
				:class="['swiper-tab-list',tabIndex==index ? 'active' : '']" :data-current="index">
				{{tab.name}}
			</view>
		</scroll-view>
		
		<scroll-view class="list" scroll-y>
			<block v-for="(order, index) in orderList" :key="index">
				<view class="order" @tap="clickOrder(order.orderId)">
					<view class="order-header">
						<text>{{order.title}}</text>
					</view>
					
					<view class="order-content">
						<block v-for="(pro, indexKey) in order.list" :key="indexKey">
							<view class="order-product">
								<image :src="pro.image"></image>
								<view class="pro-value">
									<text>{{pro.name}}</text>
									<text>{{pro.desc}}</text>
									<text>{{pro.price}}</text>
									<text class="pro-count">{{pro.count}}</text>
								</view>
							</view>
						</block>
					</view>
					
					<view class="order-bottom">
						<text>{{order.desc}}</text>
						<view v-if="order.funBtns" class="bottom-func">
							<block v-for="(func, indexKey) in order.funBtns" :key="indexKey">
								<view @click.stop="funcClick(func, order.orderId)">
									<text>{{func.title}}</text>
								</view>
							</block>
						</view>
					</view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: -1,
				
				orderList: [
					{
						title: '2018-11-12 12:10:12',
						orderId: 123,
						desc: '共计 2件商品 订单总额：￥12',
						funBtns: [
							{title: '评价', action: 'wb://order/appraise'}
						],
						list: [
							{
								name: '秋装',    /*商品名*/
								price: '$123',    /*商品售价*/
								image: 'http://dummyimage.com/120x60',
								desc: '白色 XXXL',    /*商品描述*/
								count: 'X1'    /*数量*/
							},
							{
								name: '秋装',    /*商品名*/
								price: '$123',    /*商品售价*/
								image: 'http://dummyimage.com/120x60',
								desc: '白色 XXXL',    /*商品描述*/
								count: 'X1'    /*数量*/
							}
						]
					},
					{
						title: '2018-11-12 15:10:12',
						orderId: 125,
						desc: '共计 1件商品 订单总额：￥12',
						list: [
							{
								name: '秋装',    /*商品名*/
								price: '$123',    /*商品售价*/
								image: 'http://dummyimage.com/120x60',
								desc: '白色 XXXL',    /*商品描述*/
								count: 'X1'    /*数量*/
							}
						]
					}
				],
				
				tabBars: [
					{ name: this.local('accountAll'), key: 'all'},
					{ name: this.local('accountOrderUnpaid'), key: 'unpaid'},
					{ name: this.local('accountOrderPreparing'), key: 'preparing'},
					{ name: this.local('accountOrderShipped'), key: 'shipped'},
					{ name: this.local('accountOrderReviews'), key: 'reviews'},
					// { name: this.local('accountOrderReturns'), key: 'returns'}
				]
			};
		},
		onLoad(prop) {
			uni.setNavigationBarTitle({
				title: this.local('navTitleOrder')
			});
			
			for (let i = 0; i < this.tabBars.length; i++) {
				if (prop.type == this.tabBars[i].key) {
					this.tabIndex = i;
					break;
				}
			}
			
			this.tabIndex = this.tabIndex < 0 ? 0 : this.tabIndex;
		},
		watch: {
			tabIndex: function (newVal, oldVal) {
				this.post('order/list', {status: this.tabBars[this.tabIndex].key}).then(res => {
					// this.orderList = res.list;
				});
			}
		},
		methods: {
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			async tapTab(e) { //点击tab-bar
				if (this.tabIndex === e.target.dataset.current) {
					return false;
				} else {
// 					let tabBar = await this.getElSize("tab-bar"),
// 						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.tabIndex = e.target.dataset.current;
				}
			},
			clickOrder: function (orderId) {
				uni.navigateTo({
					url: './order-detail?orderId=' + orderId
				});
			},
			funcClick: function (func, orderId) {
				this.router(func.action + '?orderId=' + orderId, () => {
					
				});
			}
		}
	}
</script>

<style scoped>
	view {
		display: flex;
		flex-direction: column;
	}
	
    .swiper-tab {
        width: 100%;
        white-space: nowrap;
        line-height: 100upx;
        height: 100upx;
        border-bottom: 1px solid #c8c7cc;
    }

    .list {
        width: 750upx;
        height: 100%;
		background-color: #F8F8F8;
    }
	
    .swiper-tab-list {
        font-size: 30upx;
        width: 150upx;
        display: inline-block;
        text-align: center;
        color: #555;
    }

    .active {
        color: #007AFF;
    }
	
	/* order */
	.order {
		margin-top: 20upx;
		background-color: #FFFFFF;
	}
	
	.order-header {
		height: 80upx;
		padding: 0 20upx;
		border-bottom: #EEEEEE 1upx solid;
	}
	
	.order-header text {
		font-size: 28upx;
		line-height: 80upx;
	}
	
	.order-content {

	}
	
	.order-product {
		display: flex;
		flex-direction: row;
		height: 250upx;
	}
	
	.order-product image {
		width: 160upx;
		height: 210upx;
		margin: 20upx;
	}
	
	.pro-value {
		width: 510upx;
		height: 210upx;
		margin: 20upx;
	}
	
	.pro-count {
		align-self: flex-end;
	}
	
	.order-bottom {
		padding: 0 20upx;
		align-items: flex-end;
		border-top: #EEEEEE 1upx solid;
	}
	
	.order-bottom text {
		font-size: 28upx;
		line-height: 80upx;
	}
	
	.bottom-func {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		margin: 0 20upx 20upx 20upx;
	}
	
	.bottom-func text {
		font-size: 28upx;
		line-height: 50upx;
		padding: 0 30upx;
		border-radius: 25upx;
		border: #EEEEEE 1upx solid;
	}
	
	.bottom-func view {
		padding: 20upx;
	}
</style>
