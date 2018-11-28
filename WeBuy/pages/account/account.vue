<template>
	<view class="page">
		<view class="header" :style="{'height': headerHeight + 'px'}">
			<view class="user" @click="userClick" :style="{'margin-top': statusHeight + 44 + 'px'}">
				<image src="../../static/userDefault.png" @click.stop="avatarClick"></image>
				<text>{{accountName}}</text>
			</view>
			
			<view class="func">
				<block v-for="(item, index) in funcList" :key="index">
					<view @click="clickAction(item.action)">
						<image :src="item.image"></image>
						<text>{{item.text}}</text>
					</view>
				</block>
			</view>
		</view>
		
		<view class="order">
			<view class="uni-list-cell-navigate uni-navigate-right" @click="clickItem('all')"> {{accountAllOrder}} </view>
			
			<view class="order-status">
				<block v-for="(item, index) in orderStatusList" :key="index">
					<view @click="clickItem(item.type)">
						<image :src="item.image"></image>
						<text>{{item.text}}</text>
					</view>
				</block>
			</view>
		</view>
		
		<view class="service">
			<block v-for="(list, index) in serviceList" :key="index">
				<view class="service-line">
					<block v-for="(item, indexKey) in list" :key="indexKey">
						<view @click="clickAction(item.action)">
							<image :src="item.image"></image>
							<text>{{item.text}}</text>
						</view>
					</block>
				</view>
			</block>
		</view>
		
		<view style="height: 1000upx;">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusHeight: 20,
				accountAllOrder: this.local('accountAllOrder'),
				accountName: this.local('accountUnlogin'),
				funcList: [
					{image:'/static/search.png', text: this.local('accountFuncWish'), action: 'unpaid'},
					{image:'/static/search.png', text: this.local('accountFuncHisgtory'), action: 'unpaid'}
				],
				orderStatusList: [
					{image:'/static/search.png', text: this.local('accountOrderUnpaid'), type: 'unpaid'},
					{image:'/static/search.png', text: this.local('accountOrderPreparing'), type: 'preparing'},
					{image:'/static/search.png', text: this.local('accountOrderShipped'), type: 'shipped'},
					{image:'/static/search.png', text: this.local('accountOrderReviews'), type: 'reviews'},
					{image:'/static/search.png', text: this.local('accountOrderReturns'), type: 'returns'}
				],
				serviceList: [
					[
						{image:'/static/setting.png', text: this.local('accountOrderReviews'), action: 'wb://'},
						{image:'/static/setting.png', text: this.local('accountOrderReviews'), action: 'wb://'},
						{image:'/static/setting.png', text: this.local('accountOrderReviews'), action: 'wb://'}
					],
					[
						{image:'/static/setting.png', text: this.local('accountOrderReviews'), action: 'wb://'},
						{image:'/static/setting.png', text: this.local('accountOrderReviews'), action: 'wb://'}
					]
				]
			};
		},
		onLoad() {
			// 设置导航栏标题
			uni.setNavigationBarTitle({
				title: this.local('navTitleAccount')
			});
			
			this.statusHeight = uni.getSystemInfoSync().statusBarHeight;
			
			// 获取用户信息
			this.post('user/info', {}).then(res => {
				this.accountName = res.name;
			});
		},
		onNavigationBarButtonTap(index) {
			uni.navigateTo({
				url: './setting'
			});
		},
		computed: {
			headerHeight() {
				return this.statusHeight + 204;
			}
		},
		methods: {
			userClick: function() {
				var sign = uni.getStorageSync(this.staticVar.sign);
				if (typeof sign == 'string' && sign.length > 0) {
					uni.navigateTo({
						url: '/pages/account/my-info?userName=' + this.accountName
					});
				} else {
					uni.navigateTo({
						url: '/pages/login/login'
					});
				}
			},
			avatarClick: function() {
				uni.showToast({
					title: 'avatarClick'
				});
			},
			clickItem: function(type) {
				this.router('wb://order/list?type=' + type, () => {
					
				});
			},
			clickAction: function(action) {
				this.router(action, () => {
					
				});
			}
		}
	}
</script>

<style scoped>
	.page {
		display: flex;
		flex-direction: column;
		width: 750upx;
	}
	
	.header {
		display: flex;
		flex-direction: column;
		background-color: #DC143C;
		color: #FFFFFF;
	}
	
	.user {
		display: flex;
		flex-direction: row;
		height: 180upx;
		align-items: center;
	}
	
	.user image {
		width: 160upx;
		height: 160upx;
		margin: 30upx 20upx 10upx 20upx;
	}
	
	.func {
		display: flex;
		flex-direction: row;
		height: 140upx;
		font-size: 24upx;
	}
	
	.func view {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 375upx;
	}
	
	.func image {
		margin: 10upx 0upx;
		width: 60upx;
		height: 60upx;
	}
	
	/* order */
	.order {
		display: flex;
		flex-direction: column;
		height: 170upx;
		color: #333333;
		background-color: #FFF;
	}
	
	.order-status {
		display: flex;
		flex-direction: row;
		height: 100upx;
		justify-content: space-around;
		border-top: 1upx solid;
		border-color: #eee;
		color: #999999;
		font-size: 24upx;
	}
	
	.order-status view {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.order-status image {
		margin-top: 20upx;
		width: 40upx;
		height: 40upx;
	}
	
	/* service */
	.service {
		display: flex;
		flex-direction: column;
		background-color: #FFF;
		margin-top: 20upx;
	}
	
	.service-line {
		display: flex;
		flex-direction: row;
		height: 100upx;
		font-size: 24upx;
		margin: 20upx 0upx;
	}
	
	.service-line view {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 250upx;
	}
	
	.service-line image {
		margin-top: 20upx;
		width: 40upx;
		height: 40upx;
	}
</style>
