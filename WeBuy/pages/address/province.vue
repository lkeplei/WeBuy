<template>
	<view class="page">
		<scroll-view class="scrollList" scroll-y :scroll-into-view="scrollViewId" :style="{height:winHeight + 'px;'}">
			<view class="uni-list">
				<block v-for="(list,key) in lists" :key="key" v-if="list.data[0]">
					<view class="uni-list-cell-divider" :id="list.letter">
						{{list.letter}}
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover" 
						v-for="(item,index) in list.data" :key="index" @tap="selectCountry(item)"
						:class="list.data.length -1 == index ? 'uni-list-cell-last' : ''">
						<view class="uni-list-cell-navigate">
							{{item.name}}
						</view>
					</view>
				</block>
			</view>
		</scroll-view>
		<view class="uni-indexed-list-bar" :class="touchmove ? 'active' : ''" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" @touchcancel="touchCancel" :style="{height:winHeight + 'px;'}">
			<text v-for="(list,key) in lists" :key="key" class="uni-indexed-list-text" :class="touchmoveIndex == key ? 'active' : ''"
			    :style="{heigth:itemHeight + 'px',lineHeight:itemHeight + 'px'}">{{list.letter}}</text>
		</view>
		<view class="uni-indexed-list-alert" v-if="touchmove">
			{{lists[touchmoveIndex].letter}}
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				touchmove: false,
				touchmoveIndex: -1,
				itemHeight: 0,
				winHeight:0,
				scrollViewId: "A",
				
				lists: [
					{
						letter: 'A',
						data: [
							{name: 'Anhui', key: 'Anhui'}
						]
					},
					{
						letter: 'B',
						data: [
							{name: 'Beijing', key: 'Beijing'}
						]
					},
					{
						letter: 'C',
						data: [
							{name: 'Chongqing', key: 'Chongqing'}
						]
					},
					{
						letter: 'F',
						data: [
							{name: 'Fujian', key: 'Fujian'}
						]
					},
					{
						letter: 'G',
						data: [
							{name: 'Gansu', key: 'Gansu'},
							{name: 'Guangdong', key: 'Guangdong'},
							{name: 'Guangxi', key: 'Guangxi'},
							{name: 'Guangzhou', key: 'Guangzhou'}
						]
					},
					{
						letter: 'H',
						data: [
							{name: 'Hainan', key: 'Hainan'},
							{name: 'Hebei', key: 'Hebei'},
							{name: 'Heilongjiang', key: 'Heilongjiang'},
							{name: 'Henan', key: 'Henan'},
							{name: 'Hubei', key: 'Hubei'},
							{name: 'Hunan', key: 'Hunan'}
						]
					},
					{
						letter: 'J',
						data: [
							{name: 'Jiangsu', key: 'Jiangsu'},
							{name: 'Jiangxi', key: 'Jiangxi'},
							{name: 'Jilin', key: 'Jilin'}
						]
					},
					{
						letter: 'L',
						data: [
							{name: 'Liaoning', key: 'Liaoning'}
						],
					},
					{
						letter: 'N',
						data: [
							{name: 'Ningxia', key: 'Ningxia'}
						]
					},
					{
						letter: 'Q',
						data: [
							{name: 'Qinghai', key: 'Qinghai'}
						]
					},
					{
						letter: 'S',
						data: [
							{name: 'Shandong', key: 'Shandong'},
							{name: 'Shanghai', key: 'Shanghai'},
							{name: 'Shanxi', key: 'Shanxi'},
							{name: 'Sichuan', key: 'Sichuan'}
						]
					},
					{
						letter: 'T',
						data: [
							{name: 'Tianjin', key: 'Tianjin'}
						]
					},
					{
						letter: 'X',
						data: [
							{name: 'Xinjiang', key: 'Xijiang'}
						]
					},
					{
						letter: 'Y',
						data: [
							{name: 'Yunnan', key: 'Yunnan'}
						]
					},
					{
						letter: 'Z',
						data: [
							{name: 'Zhejiang', key: 'Zhejiang'}
						]
					}
				]
			}
		},
		onLoad() {
			let winHeight = uni.getSystemInfoSync().windowHeight;
			this.itemHeight = winHeight / this.lists.length;
			this.winHeight = winHeight;
			
			// 设置导航栏标题
			uni.setNavigationBarTitle({
				title: this.local('navTitleProvince')
			});
		},
		methods: {
			touchStart(e) {
				this.touchmove = true;
				let pageY = e.touches[0].pageY;
				let index = Math.floor(pageY / this.itemHeight);
				this.scrollViewId = this.lists[index].letter;
				this.touchmoveIndex = index;
			},
			touchMove(e) {
				let pageY = e.touches[0].pageY;
				let index = Math.floor(pageY / this.itemHeight);
				if (index >= 0 && index < this.lists.length) {
					this.scrollViewId = this.lists[index].letter;
					this.touchmoveIndex = index;	
				}
			},
			touchEnd() {
				this.touchmove = false;
				this.touchmoveIndex = -1;
			},
			touchCancel(){
				this.touchmove = false;
				this.touchmoveIndex = -1;
			},
			selectCountry: function (item) {
				this.post('user/changeCountry', {country: item.key}).then(res => {	
					
				});	
				
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style scoped>
	.page {
		display: flex;
		flex-direction: row;
	}

	.scrollList {
		flex: 1;
		height: 100vh;
	}

	.uni-indexed-list-bar {
		width: 46upx;
		height: 100vh;
		background-color: lightgrey;
		display: flex;
		flex-direction: column;
	}

	.uni-indexed-list-bar.active {
		background-color: rgb(200, 200, 200);
	}

	.uni-indexed-list-text {
		color: #aaa;
		font-size: 22upx;
		text-align: center;
	}

	.uni-indexed-list-bar.active .uni-indexed-list-text {
		color: #333;
	}

	.uni-indexed-list-text.active,
	.uni-indexed-list-bar.active .uni-indexed-list-text.active {
		color: #007AFF;
	}

	.uni-indexed-list-alert {
		position: absolute;
		z-index: 20;
		width: 160upx;
		height: 160upx;
		left: 50%;
		top: 50%;
		margin-left: -80upx;
		margin-top: -80upx;
		border-radius: 80upx;
		text-align: center;
		line-height: 160upx;
		font-size: 70upx;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>
