<template>
	<view>
		<wb-nav ref="nav" :title="navTitle" :rightBtn="rightBtn" @rightBtnClick="newAddress"></wb-nav>
		
		<!-- 用了自定义导航栏，需要占位 -->
		<view :style="{'height': navHeight + 'px'}"></view>
		
		<view class="container">
			form
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
				navTitle: this.local('navTitleAddressBook'),
				rightBtn: {text: this.local('publicSave')}
			};
		},
		onLoad(prop) {
			this.navTitle = prop.title;
		},
		onReady() {
			this.navHeight = this.$refs.nav.navHeight();
		},
		methods: {
			newAddress: function () {
				uni.showToast({
					title: 'save'
				});
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}
</style>
