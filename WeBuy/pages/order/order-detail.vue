<template>
	<view class="container">
		<view class="info">
			<block v-for="(item, index) in order.orderPrice" :key="index">
				<view class="item">
					<text>{{item.title}}</text>
					<text>{{item.value}}</text>
				</view>
			</block>
		</view>
		
		<view class="contact">
			<view class="contact-info">
				<text class="name">{{order.contact.name}}</text>
				<text class="phone">{{order.contact.phone}}</text>
			</view>
			<text class="address">{{order.contact.address}}</text>
		</view>
		
		<view class="product">
			<text class="title">{{order.productInfo.title}}</text>
			<block v-for="(pro, index) in order.productInfo.list" :key="index">
				<view class="pro" @tap="clickPro(pro)">
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
		
		<view class="info">
			<block v-for="(item, index) in order.orderPrice" :key="index">
				<view class="item">
					<text>{{item.title}}</text>
					<text>{{item.value}}</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order: {
					orderPrice: [ 
						{ title: "订单状态", value: "未付款" },
						{ title: "商品价格", value: "￥12.00" },
						{ title: "运费", value: "￥0.00" },
						{ title: "订单总价", value: "￥12.00" }
					],
					contact: {
						name: "ken", 
						address: "zhe jiang hang zhou gong shu qu",   
						phone: "17487182311" 
					},
					productInfo: { 
						title: "商品清单",
						list: [
							{
								proId: 123, 
								name: "春装这里只是商品名字的占位符不要介意",  
								image: "http://dummyimage.com/120x240",
								price: "$123", 
								desc: "white XXL",
								count: "x1" 
							},
							{
								proId: 123, 
								name: "春装这里只是商品名字的占位符不要介意",  
								image: "http://dummyimage.com/120x240",
								price: "$123", 
								desc: "white XXL",
								count: "x1" 
							}
						]
					},
					orderInfo: [ 
						{ title: "订单编号", value: "293482394820384023" },
						{ title: "创建时间", value: "2018-12-12 16:12:12" },
						{ title: "付款时间", value: "2018-12-12 18:12:12" },
						{ title: "发货时间", value: "2018-12-13 16:12:12" }
					]
				}
			};
		},
		onLoad(prop) {
			uni.setNavigationBarTitle({
				title: this.local('navTitleOrderDetail')
			});
			
			this.post('order/detail', {orderId: prop.orderId}).then(res => {
				// this.orderList = res.list;
			});
		},
		methods: {
			clickPro: function (pro) {
				this.router('wb://product/detail?proId=' + pro.proId, () => {
					
				});
			}
		}
	}
</script>

<style scoped>
	.container {
		background-color: #F8F8F8;
	}
	
	.info {
		padding: 10upx 20upx;
		background-color: #FFFFFF;
	}
	
	.item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.contact {
		margin: 20upx 0;
		padding: 0 20upx;
		height: 160upx;
		background-color: #FFFFFF;
	}
	
	.contact-info {
		direction: flex;
		flex-direction: row;
		height: 60upx;
		align-items: flex-end;
	}
	
	.contact-info .name {
		font-size: 32upx;
		color: #333333;
	} 
	
	.contact-info .phone {
		font-size: 26upx;
		color: #999999;
		margin-left: 20upx;
	}
	
	.contact .address {
		font-size: 28upx;
		color: #666666;
	}
	
	.product {
		margin-bottom: 20upx;
		background-color: #FFFFFF;
	}
	
	.product .title {
		padding: 0 20upx;
		line-height: 80upx;
		border-bottom: #EEEEEE 1upx solid;
	}
	
	.pro {
		display: flex;
		flex-direction: row;
		height: 250upx;
	}
	
	.pro image {
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
</style>
