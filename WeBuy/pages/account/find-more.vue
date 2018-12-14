<template>
	<view>
		<view class="product" @tap="choosePro(product.proId)">
			<view class="pro-img">
				<image :src="product.image"></image>
			</view>
			<view class="pro-desc">
				<view>
					<text class="pro-name">{{product.name}}</text>
					<view class="pro-price">
						<text>{{product.price}}</text>
						<text class="original-price">{{product.originalPrice}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			// 设置导航栏标题
			uni.setNavigationBarTitle({
				title: this.local('navTitleFindMore')
			});
		},
		methods: {
			choosePro: function (proId) {
				uni.navigateTo({
					url: '../product/pro-detail?proId=' + proId
				});
			}
		}
	}
</script>

<style>

</style>
