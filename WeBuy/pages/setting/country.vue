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
							{name: 'Albania', key: 'Albania'},
							{name: 'Australia', key: 'Australia'},
							{name: 'Austria', key: 'Austria'}
						]
					},
					{
						letter: 'B',
						data: [
							{name: 'Bahrain', key: 'Bahrain'},
							{name: 'Bangladesh', key: 'Bangladesh'},
							{name: 'Belgium', key: 'Belgium'},
							{name: 'Bosnia and Herzegovina', key: 'Bosnia and Herzegovina'}
						]
					},
					{
						letter: 'C',
						data: [
							{name: 'Cambodia', key: 'Cambodia'},
							{name: 'Canada', key: 'Canada'},
							{name: 'Canary Islands', key: 'Canary Islands'},
							{name: 'China(P.R.C)', key: 'China(P.R.C)'},
							{name: 'Cyprus', key: 'Cyprus'},
							{name: 'Czech Republic', key: 'Czech Republic'}
						]
					},
					{
						letter: 'D',
						data: [
							{name: 'Denmark', key: 'Denmark'}
						]
					},
					{
						letter: 'F',
						data: [
							{name: 'Faroe Islands', key: 'Faroe Islands'},
							{name: 'Finland', key: 'Finland'},
							{name: 'France', key: 'France'}
						]
					},
					{
						letter: 'G',
						data: [
							{name: 'Georgia', key: 'Georgia'},
							{name: 'Germany', key: 'Germany'},
							{name: 'Greenland', key: 'Greenland'}
						]
					},
					{
						letter: 'H',
						data: [
							{name: 'Hong Kong', key: 'Hong Kong'}
						]
					},
					{
						letter: 'I',
						data: [
							{name: 'Iceland', key: 'Iceland'},
							{name: 'Indonesia', key: 'Indonesia'},
							{name: 'Ireland', key: 'Ireland'},
							{name: 'Italy', key: 'Italy'}
						]
					},
					{
						letter: 'J',
						data: [
							{name: 'Japan', key: 'Japan'},
							{name: 'Jordan', key: 'Jordan'}
						]
					},
					{
						letter: 'K',
						data: [
							{name: 'Korea(Republic)', key: 'Korea(Republic)'},
							{name: 'Kuwait', key: 'Kuwait'}
						]
					},
					{
						letter: 'L',
						data: [
							{name: 'Lebanon', key: 'Lebanon'},
							{name: 'Lithuania', key: 'Lithuania'}
						],
					},
					{
						letter: 'M',
						data: [
							{name: 'Macau', key: 'Macau'},
							{name: 'Malaysia', key: 'Malaysia'},
							{name: 'Mauritius', key: 'Mauritius'},
							{name: 'Mexico', key: 'Mexico'},
							{name: 'Morocco', key: 'Morocco'},
							{name: 'Myanmar', key: 'Myanmar'}
						]
					},
					{
						letter: 'N',
						data: [
							{name: 'Netherlands', key: 'Netherlands'},
							{name: 'New Zealand', key: 'New Zealand'}
						]
					},
					{
						letter: 'O',
						data: [
							{name: 'Oman', key: 'Oman'}
						]
					},
					{
						letter: 'P',
						data: [
							{name: 'Philippines', key: 'Philippines'},
							{name: 'Poland', key: 'Poland'},
							{name: 'Portugal', key: 'Portugal'}
						]
					},
					{
						letter: 'Q',
						data: [
							{name: 'Qatar', key: 'Qatar'}
						]
					},
					{
						letter: 'R',
						data: [
							{name: 'Romania', key: 'Romania'}
						]
					},
					{
						letter: 'S',
						data: [
							{name: 'San Marino', key: 'San Marino'},
							{name: 'Saudi Arabia', key: 'Saudi Arabia'},
							{name: 'Singapore', key: 'Singapore'},
							{name: 'Slovenia', key: 'Slovenia'},
							{name: 'South Africa', key: 'South Africa'},
							{name: 'Spain', key: 'Spain'},
							{name: 'Sri Lanka', key: 'Sri Lanka'},
							{name: 'Sweden', key: 'Sweden'},
							{name: 'Switzerland', key: 'Switzerland'}
						]
					},
					{
						letter: 'T',
						data: [
							{name: 'Thailand', key: 'Thailand'},
							{name: 'Turkey', key: 'Turkey'}
						]
					},
					{
						letter: 'U',
						data: [
							{name: 'United Arab Emirates', key: 'United Arab Emirates'},
							{name: 'United Kingdom', key: 'United Kingdom'},
							{name: 'United States', key: 'United States'},
							{name: 'Uzbekistan', key: 'Uzbekistan'}
						]
					},
				]
			}
		},
		onLoad() {
			let winHeight = uni.getSystemInfoSync().windowHeight;
			this.itemHeight = winHeight / this.lists.length;
			this.winHeight = winHeight;
			
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
