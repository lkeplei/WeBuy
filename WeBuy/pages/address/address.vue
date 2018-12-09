<template>
	<view style="overflow: hidden;">
		<wb-back-nav ref="nav" :title="navTitle" @rightBtnClick="edit"></wb-back-nav>
		
		<!-- 用了自定义导航栏，需要占位 -->
		<view :style="{'height': navHeight + 'px'}"></view>
		
		<view class="container">
			<view class="" :style="{'height': contentHeight + 'px'}">
				<view class="">
					address-7
				</view>
			</view>
			
			<wb-button :text="newAddressText" @btnTap="newAddress"></wb-button>
		</view>
	</view>
</template>

<script>
	import wbNav from '../../components/wb-nav.vue'
	import wbButton from '../../components/wb-button.vue'
	
	export default {
		components: {
			'wb-back-nav': wbNav,
			'wb-button': wbButton
		},
		data() {
			return {
				isEditing: false,
				navHeight: 64,
				contentHeight: 0,
				newAddressText: this.local('addressNew'),
				navTitle: this.local('navTitleAddressBook')
			};
		},
		onReady() {
			this.navHeight = this.$refs.nav.navHeight();
			this.$refs.nav.resetRightBtn({text: this.local('publicEdit')});
			
			this.contentHeight = uni.getSystemInfoSync().screenHeight - this.navHeight - 44;
		},
		methods: {
			edit: function (index) {
				if (this.isEditing) {
					uni.showToast({
						title: 'finish'
					});
				} else {
					uni.showToast({
						title: 'edit'
					});
				}
				
				this.isEditing = !this.isEditing;
				this.$refs.nav.resetRightBtn({text: this.local(this.isEditing ? 'publicFinish' : 'publicEdit')});
			},
			newAddress: function () {
				
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
