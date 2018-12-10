<template>
	<view class="page">
		<scroll-view class="scrollList" scroll-y :scroll-into-view="scrollViewId" :style="{height:winHeight + 'px;'}">
			<view class="uni-list">
				<block v-for="(item, key) in list" :key="key" v-if="item.data[0]">
					<view class="uni-list-cell-divider" :id="item.letter">
						{{item.letter}}
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(name, index) in item.data" 
					:key="index" :class="item.data.length -1 == index ? 'uni-list-cell-last' : ''">
						<view class="uni-list-cell-navigate">
							{{name}}
						</view>
					</view>
				</block>
			</view>
		</scroll-view>
		<view class="uni-indexed-list-bar" :class="touchmove ? 'active' : ''" :style="{height:winHeight + 'px;'}"
			@touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" @touchcancel="touchCancel" >
			<text v-for="(item, key) in list" :key="key" class="uni-indexed-list-text" 
				:class="touchmoveIndex == key ? 'active' : ''"
			    :style="{heigth:itemHeight + 'px',lineHeight:itemHeight + 'px'}">
				{{item.letter}}
			</text>
		</view>
		<view class="uni-indexed-list-alert" v-if="touchmove">
			{{list[touchmoveIndex].letter}}
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
				
				list: [
					{
						letter: 'A',
						data: [
							'Albania',
							'Australia',
							'Austria'
						]
					},
					{
						letter: 'B',
						data: [
							'Bahrain',
							'Bangladesh',
							'Belgium',								
							'Bosnia and Herzegovina'
						]
					},
					{
						letter: 'C',
						data: [
							'Cambodia',
							'Canada',
							'Canary Islands',
							'China(P.R.C)',
							'Cyprus',
							'Czech Republic'
						]
					},
					{
						letter: 'D',
						data: [
							'Denmark'
						]
					},
					{
						letter: 'F',
						data: [
							'Faroe Islands',
							'Finland',
							'France'
						]
					},
					{
						letter: 'G',
						data: [
							'Georgia',
							'Germany',
							'Greenland'
						]
					},
					{
						letter: 'H',
						data: [
							'Hong Kong'
						]
					},
					{
						letter: 'I',
						data: [
							'Iceland',
							'Indonesia',
							'Ireland',
							'Italy'
						]
					},
					{
						letter: 'J',
						data: [
							'Japan',
							'Jordan'
						]
					},
					{
						letter: 'K',
						data: [
							'Korea(Republic)',
							'Kuwait'
						]
					},
					{
						letter: 'L',
						data: [
							'Lebanon',
								'Lithuania'
						],
					},
					{
						letter: 'M',
						data: [
							'Macau',
							'Malaysia',
							'Mauritius',
							'Mexico',
							'Morocco',
							'Myanmar'
						]
					},
					{
						letter: 'N',
						data: [
							'Netherlands',
								'New Zealand'
						]
					},
					{
						letter: 'O',
						data: [
							'Oman'
						]
					},
					{
						letter: 'P',
						data: [
							'Philippines',
							'Poland',
							'Portugal'
						]
					},
					{
						letter: 'Q',
						data: [
							'Qatar'
						]
					},
					{
						letter: 'R',
						data: [
							'Romania'
						]
					},
					{
						letter: 'S',
						data: [
							'San Marino',
							'Saudi Arabia',
							'Singapore',
							'Slovenia',
							'South Africa',
							'Spain',
							'Sri Lanka',
							'Sweden',
							'Switzerland'
						]
					},
					{
						letter: 'T',
						data: [
							'Thailand',
							'Turkey',
						]
					},
					{
						letter: 'U',
						data: [
							'United Arab Emirates',
							'United Kingdom',
							'United States',
							'Uzbekistan'
						]
					},
				]
			}
		},
		onLoad() {
			this.winHeight = uni.getSystemInfoSync().windowHeight;
			this.itemHeight = this.winHeight / 26;
			
			// 设置导航栏标题
			uni.setNavigationBarTitle({
				title: this.local('navTitleSelectCountry')
			});
		},
		methods: {
			touchStart(e) {
				this.touchmove = true;
				let pageY = e.touches[0].pageY;
				let index = Math.floor(pageY / this.itemHeight);
				this.scrollViewId = this.list[index].letter;
				this.touchmoveIndex = index;
			},
			touchMove(e) {
				let pageY = e.touches[0].pageY;
				let index = Math.floor(pageY / this.itemHeight);
				this.scrollViewId = this.list[index].letter;
				this.touchmoveIndex = index;
			},
			touchEnd() {
				this.touchmove = false;
				this.touchmoveIndex = -1;
			},
			touchCancel(){
				this.touchmove = false;
				this.touchmoveIndex = -1;
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
