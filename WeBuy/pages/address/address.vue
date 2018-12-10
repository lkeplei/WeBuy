<template>
	<view>
		<wb-nav ref="nav" :title="navTitle" :rightBtn="rightBtn" @rightBtnClick="newAddress"></wb-nav>
		
		<!-- 用了自定义导航栏，需要占位 -->
		<view :style="{'height': navHeight + 'px'}"></view>
		
		<view class="container">
			<block v-for="(item, index) in addressList" :key="index">
				<view class="item">
					<view class="contact">
						<text class="name">{{item.name}}</text>
						<text class="phone">{{item.contact}}</text>
					</view>
					<view class="address">
						<text>
							<text class="default" v-if="item.isDefault">{{defaultText}}</text>
							{{item.address}}
						</text>
						<view class="control" @click="edit(item)">
							<text>{{editText}}</text>
						</view>
					</view>
				</view>
			</block>
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
				isEditing: false,
				navHeight: 64,
				editText: this.local('publicEdit'),
				defaultText: this.local('publicDefault'),
				navTitle: this.local('navTitleAddressBook'),
				rightBtn: {text: this.local('addressNew')},
				editTitle: this.local('addressAddTitle'),
				
				addressList: [
					{addressId: 12,name: '雷小姐', contact: '1358601891', isDefault: true,
					address: '浙江省 杭州市 拱墅区 翠苑街道 翠苑一区37-2-503'},
					{addressId: 13,name: '雷小姐', contact: '1358601891', isDefault: false,
					address: '浙江省 杭州市 拱墅区 翠苑街道 翠苑一区37-2-503'},
					{addressId: 14,name: '雷小姐', contact: '1358601891', isDefault: false,
					address: '浙江省 杭州市拱墅区翠苑街道翠苑一区37-2-503浙江省 杭州市拱墅区翠苑街道翠苑一区37-2-503浙江省 杭州市拱墅区翠苑街道翠苑一区37-2-503'},
					{addressId: 15,name: '雷小姐', contact: '1358601891', isDefault: false,
					address: '浙江省 杭州市拱墅区翠苑街道翠苑一区37-2-503'},
					{addressId: 16,name: '雷小姐', contact: '1358601891', isDefault: false,
					address: '浙江省 杭州市拱墅区翠苑街道翠苑一区37-2-503浙江省 杭州市拱墅区翠苑街道翠苑一区37-2-503'}
				]
			};
		},
		onLoad() {
			this.post('user/addressList', {}).then(res => {
				// this.addressList = res.list;
			});
		},
		onReady() {
			this.navHeight = this.$refs.nav.navHeight();
		},
		methods: {
			newAddress: function () {
				this.editTitle = this.local('addressAddTitle');
				
				uni.navigateTo({
					url: './edit-address?title=' + this.editTitle
				});
			},
			edit: function (item) {
				console.log(1111)
				this.editTitle = this.local('addressEditTitle');
				
				uni.navigateTo({
					url: './edit-address?title=' + this.editTitle + '&id=' + item.addressId
				});
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
	}
	
	.item {
		margin: 10upx 30upx;
		display: flex;
		flex-direction: column;
	}
	
	.contact {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		margin-bottom: 10upx;
	}
	
	.name {
		font-size: 32upx;
	}
	
	.phone {
		font-size: 24upx;
		color: #D9D9D9;
		margin-left: 20upx;
	}
	
	.address {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 26upx;
	}
	
	.address .default {
		color: #DC143C;
		width: 100upx;
		padding: 0 10upx;
		background-color: #FFB400;
	}
	
	.address text {
		width: 600upx;
		line-height: 36upx;
	}
	
	.control {
		width: 80upx;
		margin-left: 10upx;
		border-left: #D9D9D9 1upx solid;
	}
	
	.control text {
		color: #D9D9D9;
		padding-left: 20upx;
	}
</style>
