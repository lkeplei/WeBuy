<template>
	<view>
		<wb-nav ref="nav" :title="navTitle" :rightBtn="rightBtn" @rightBtnClick="postReview"></wb-nav>
		<!-- 用了自定义导航栏，需要占位 -->
		<view :style="{'height': navHeight + 'px'}"></view>
		
		<view class="header-star">
			<block v-for="n in 5">
				<image @tap="star(n)"
					:src="point > n ? '../../static/star-1.png' : '../../static/star-0.png'">
				</image>
			</block>
		</view>
		
		<view class="review">
			<textarea :focus="true" v-model="review" :placeholder="reviewHolder"></textarea>
		</view>
	</view>
</template>

<script>
	import wbNav from '../../components/wb-nav.vue'
	
	export default {
		components: {
			'wb-nav': wbNav
		},
		data() {
			return {
				navHeight: 64,
				
				orderId: -1,
				point: 0,
				navTitle: this.local('navTitleAppraise'),
				rightBtn: {text: this.local('appraisePost')},
				review: '',
				reviewHolder: this.local('appraiseHoldr')
			};
		},
		onLoad(prop) {
			this.orderId = prop.orderId;
		},
		onReady() {
			this.navHeight = this.$refs.nav.navHeight();
		},
		methods: {
			postReview: function () {
				this.post('order/appraise', {orderId: this.orderId, review: this.review}).then(res => {
					// this.orderList = res.list;
				});
			},
			star: function (n) {
				this.point = n;
			}
		}
	}
</script>

<style scoped>
	.header-star {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.header-star image {
		width: 64upx;
		height: 64upx;
		margin: 20upx;
	}
	
	.review textarea {
		padding: 20upx;
	}
</style>
