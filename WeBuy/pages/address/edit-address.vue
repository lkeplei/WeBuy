<template>
	<view>
		<wb-nav ref="nav" :title="navTitle" :rightBtn="rightBtn" @rightBtnClick="newAddress"></wb-nav>
		
		<!-- 用了自定义导航栏，需要占位 -->
		<view :style="{'height': navHeight + 'px'}"></view>
		
		<view class="container">
			<view class="content">
				<view class="element wb-list-cell-navigate">
					<text>{{titleFirstName}}</text>
					<input type="text" v-model="address.firstName">
				</view>
				
				<view class="element wb-list-cell-navigate">
					<text>{{titleLastName}}</text>
					<input type="text" v-model="address.lastName">
				</view>
				
				<view class="element wb-list-cell-navigate wb-navigate-right" @tap="selectCountry">
					<text>{{titleCountry}}</text>
					<input type="text" v-model="address.country" :placeholder="placeSelect" disabled="true">
				</view>
				
				<view class="element wb-list-cell-navigate wb-navigate-right" @tap="selectProvince">
					<text>{{titleState}}</text>
					<input type="text" v-model="address.province" :placeholder="placeSelect" disabled="true">
				</view>
				
				<view class="element wb-list-cell-navigate wb-navigate-right" @tap="selectCity">
					<text>{{titleCity}}</text>
					<input type="text" v-model="address.city" :placeholder="placeSelect" disabled="true">
				</view>
				
				<view class="element wb-list-cell-navigate">
					<text>{{titleLine1}}</text>
					<input type="text" v-model="address.address" :placeholder="placeAddress">
				</view>
				
				<view class="element wb-list-cell-navigate">
					<text>{{titlePostalCode}}</text>
					<input type="text" v-model="address.postalCode">
				</view>
				
				<view class="element wb-list-cell-navigate">
					<text>{{titlePhone}}</text>
					<input type="number" v-model="address.phone">
				</view>
				
				<view class="element wb-list-cell-navigate">
					<text>{{titleAlterPhone}}</text>
					<input type="number" v-model="address.phone1" :placeholder="placeOption">
				</view>
				
				<view class="element wb-list-cell-navigate">
					<text>{{titleNote}}</text>
					<input type="text" v-model="address.remark" :placeholder="placeOption">
				</view>
			</view>
			
			<view class="content">
				<view class="element">
					<text>{{titleSetDefault}}</text>
					<switch @change="switchChange" />
				</view>
			</view>
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
				rightBtn: {text: this.local('publicSave')},
				isEdit: true,
				
				titleFirstName: this.local('addressFirstName'),
				titleLastName: this.local('addressLastName'),
				titleCountry: this.local('addressCountry'),
				titleState: this.local('addressState'),
				titleCity: this.local('addressCity'),
				titleLine1: this.local('addressLine1'),
				titleLine2: this.local('addressLine2'),
				titlePostalCode: this.local('addressPostalCode'),
				titlePhone: this.local('addressPhone'),
				titleAlterPhone: this.local('addressAlternativePhone'),
				titleNote: this.local('addressNote'),
				titleSetDefault: this.local('addressSetDefault'),
				
				placeSelect: this.local('placeholderSelect'),
				placeOption: this.local('placeholderOption'),
				placeAddress: this.local('addressPlaceAddress'),
				
				address: {}
			};
		},
		onLoad(prop) {
			this.isEdit = prop.isEdit == 'true' ? true : false;
			this.navTitle = this.local(this.isEdit ? 'addressEditTitle' : 'addressAddTitle');
			
			if (this.isEdit) {
				this.post('user/addressDetail', {addressId: prop.id}).then(res => {
					// this.address = res;
				});				
			} else {
				this.address = {};
			}
		},
		onReady() {
			this.navHeight = this.$refs.nav.navHeight();
		},
		methods: {
			newAddress: function () {
				uni.showToast({
					title: 'save'
				});
			},
			selectCountry: function () {
				this.router('wb://setting/country', () => {});	
			},
			selectProvince: function () {
				uni.navigateTo({
					url: './province'
				});
			},
			selectCity: function () {
				uni.navigateTo({
					url: './city'
				});
			},
			switchChange: function (e) {
				console.log('switch2 发生 change 事件，携带值为' + e.detail.value)
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		margin-top: 20upx;
	}
	
	.content {
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		margin-top: 30upx;
		border-top: #EEEEEE 1upx solid;
	}
	
	.element {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		height: 80upx;
		border-bottom: #EEEEEE 1upx solid;
		padding-left: 20upx;
	}
	
	.element text {
		color: #333333;
	}
	
	.element input {
		margin-left: 30upx;
	}
</style>
