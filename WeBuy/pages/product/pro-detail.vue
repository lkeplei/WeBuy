<template>
	<view>
		<scroll-view class="scrollList" scroll-y :style="{height:winHeight - 44 + 'px;'}">
			<swiper autoplay="true" indicator-dots="true" circular="true" class="swiper-banners">
				<swiper-item v-for="(item, key) in product.banners" :key="key">
					<image :src="item.image" class="swiper-banners" />
				</swiper-item>
			</swiper>
			
		</scroll-view>
		
		<view class="bottom">
			<view class="bottom-cart" @tap="goToCart">
				<text>cart</text>
			</view>
			<view class="bottom-add" @tap="addToCart">
				<text>add to cart</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				proId: -1,
				winHeight: uni.getSystemInfoSync().windowHeight,
				
				product: {
					banners: [
						{image: 'http://dummyimage.com/100x60'},
						{image: 'http://dummyimage.com/220x160'},
						{image: 'http://dummyimage.com/320x260'},
						{image: 'http://dummyimage.com/420x360'}
					],
					name: '这是一个商品名称',
					originalPrice: '32.99',
					price: '$14.99',
					likenum: 123,
					funcList: [
						{title: '货运说明', action: 'wb://product/buyyer-reading'},
						{title: '货运说明', action: 'wb://product/buyyer-reading'},
						{title: '货运说明', action: 'wb://product/buyyer-reading'}
					],
					details: [
						{title: 'item', value: 'lkajsdlf'},
						{title: 'item', value: 'lkajsdlf'},
						{title: 'item', value: 'lkajsdlf'},
						{title: 'item', value: 'lkajsdlf'},
						{title: 'item', value: 'lkajsdlf'},
						{title: 'item', value: 'lkajsdlf'}
					],
					review: {
						title: 'Reviews(4)',
						desc: '综合评分 4.9',
						info: { 
							avatar: 'http://dummyimage.com/40X40',
							name: 'a****t',
							message: '我觉得这个东东不错', 
							desc: 'color: green  size: xxl'
						}
					}
				}
			};
		},
		onLoad(prop) {
			// 设置导航栏标题
			uni.setNavigationBarTitle({
				title: this.local('navTitleProductDetail')
			});
			
			this.proId = prop.proId;
			
			this.post('product/detail', {proId: this.proId}).then(res => {
				// this.orderList = res.list;
			});
		},
		methods: {
			goToCart: function () {
				this.router('wb://cart/cart', () => {
					
				});
			},
			addToCart: function () {
				uni.showToast({
					title: 'add'
				})
			}
		}
	}
</script>

<style scoped>
	.swiper-banners {
		width: 750upx;
		height: 600upx;
	}
	
	.bottom {
		display: flex;
		flex-direction: row;
		height: 44px;
	}
	
	.bottom-cart {
		width: 250upx;
		height: 100%;
	}
	
	.bottom-add {
		width: 500upx;
		height: 100%;
	}
</style>
