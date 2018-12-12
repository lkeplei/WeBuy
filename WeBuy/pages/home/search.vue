<template>
	<view class="page">
		<wb-nav ref="nav" :leftBtn="leftBtn" :rightBtn="rightBtn" @rightBtnClick="cancel">
			<view class="input-view">
				<image src="../../static/search.png"></image>
				<input focus="true" confirm-type="search" class="input" type="text" v-model="searchKey" :placeholder="placeSearch" />
			</view>
		</wb-nav>
		
		<!-- 用了自定义导航栏，需要占位 -->
		<view :style="{'height': navHeight + 'px'}"></view>
		
		<view v-if="searchList.showHistory" class="history">
			<block v-for="(object, index) in searchList.list" :key="index">
				<view class="item">
					<view class="item-header">
						<image :src="object.icon"></image>
						<text>{{object.title}}</text>
					</view>
					<view class="item-value">
						<block v-for="(item, key) in object.list" :key="key">
							<view :style="{'color': item.textColor, 'background-color': item.bgColor}" @tap="search(item.key)">
								<text>{{item.key}}</text>
							</view>
						</block>
					</view>
				</view>
			</block>
		</view>
		
		<view v-else>
			
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
				searchKey: '',
				page: 0,
				placeSearch: this.local('searchPlace'),
				
				navHeight: 64,
				leftBtn: {},
				rightBtn: {text: this.local('publicCancel')},
				
				searchList: {
					showHistory: true,
					list: [
						{
							title: '搜索历史',
							icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							list: [
								{key: '男装', bgColor: '#FFFF00', textColor: '#FF0000'},
								{key: '男装', bgColor: '#FFFF00', textColor: '#333333'},
								{key: '男装男装男装男装', bgColor: '#FFFF00', textColor: '#333333'},
								{key: '男装', bgColor: '#FFFF00', textColor: '#333333'},
								{key: '男装', bgColor: '#FFFF00', textColor: '#000FFF'},
								{key: '男装', bgColor: '#FFFF00', textColor: '#333333'}
							]
						},
						{
							title: '热门搜索',
							icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
							list: [
								{key: '男装', bgColor: '#FF0000', textColor: '#AA3333'},
								{key: '男装', bgColor: '#F0FF00', textColor: '#333A33'},
								{key: '男装男装男装男装', bgColor: '#FFFF00', textColor: '#3A3333'},
								{key: '男装', bgColor: '#FF0F00', textColor: '#33A33A'},
								{key: '男装男装男', bgColor: '#FFFF00', textColor: '#333A33'},
								{key: '男装', bgColor: '#0FFF00', textColor: '#33333A'}
							]
						}
					]
				}
			};
		},
		onLoad() {
			this.post('home/search', {}).then(res => {
				// this.searchList = res.list;
			});
		},
		onReady() {
			this.navHeight = this.$refs.nav.navHeight();
		},
		methods: {
			cancel: function () {
				uni.navigateBack({
					delta: 1
				});
			},
			search: function (key) {
				this.searchKey = key;
				
				this.post('home/search', {key: this.searchKey, page: this.page}).then(res => {
					// this.searchList = res.list;
				});
			}
		}
	}
</script>

<style scoped>
	.page {
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
	}
	
	.input-view {
		width: 500upx;
		display: flex;
		flex-direction: row;
		height: 28px;
		border-radius: 14px;
		padding: 0 10px;
		border: 2upx solid;
		border-color: #eee;
		margin-top: 8px;
	}
	
	.input-view image {
		width: 24px;
		height: 24px;
		margin-top: 3px;
	}
	
	.input {
		height: 28px;
		padding: 0 5px;
	}
	
	/* history */
	.history {
		display: flex;
		flex-direction: column;
		font-size: 26upx;
	}
	
	.item {
		display: flex;
		flex-direction: column;
	}
	
	.item-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 80upx;
		color: #1C1C1C;
		background-color: #F8F8F8;
	}
	
	.item-header image {
		width: 32upx;
		height: 28upx;
		margin: 26upx 20upx 26upx 30upx;
	}
	
	.item-value {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		color: #666666;
		padding: 15upx 0;
	}
	
	.item-value view {
		margin: 15upx 30upx;
		height: 64upx;
		border-radius: 32upx;
		background-color: #F8F8F8;
	}
	
	.item-value text {
		line-height: 64upx;
		padding: 0 32upx;
	}
</style>
