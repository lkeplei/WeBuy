<template>
	<view>
		<view class="wb-mask" v-show="showPop" :style="{top:offsetTop + 'px'}" @click="hidePopup"></view>
		<view class="wb-popup" v-show="showPop">
			<view class="container">
				<view class="header">
					<view class="content">
						<image :src="selectData.image"></image>
						<view class="header-info">
							<view class="header-price">
								<text>{{selectData.price}}</text>
								<text class="discount">{{selectData.discount}}</text>
							</view>
							<text class="original">{{selectData.originalPrice}}</text>
							<text>{{selectedDesc}}</text>
						</view>
					</view>
					<wb-icon size="32" :type="'closeempty'" @click="hidePopup"></wb-icon>
				</view>
				
				<block v-for="(select, index) in selectData.list" :key="index">
					<view class="select">
						<view class="line"></view>
						<text>{{select.title}}</text>
						<view class="sel-value">
							<block v-for="(item, indexKey) in select.list" :key="indexKey">
								<view class="sel-item" @tap="selectItem(select, item)">
									<text>{{item.value}}</text>
								</view>
							</block>
						</view>
					</view>
				</block>
			</view>
			
			<wb-button :text="confirmText" :height="40" :bgColor="'#FF4D05'" @btnTap="confirm"></wb-button>
		</view>
	</view>
</template>

<script>
	import wbIcon from '../wb-icon.vue'
	import wbBtn from '../wb-button.vue'
	
	export default {
		name: 'pro-select-popup',
		components: {
			'wb-icon': wbIcon,
			'wb-button': wbBtn
		},
		props: {

		},
		data() {
			let offsetTop = 0;
			//#ifdef H5
			offsetTop = 44;
			//#endif
			return {
				offsetTop: offsetTop,
				showPop: false,
				confirmText: this.local('publicConfirm'),

				selectData: {
					"image": "http://dummyimage.com/336x280",
					"price": "$20.99",
					"originalPrice": "36.99",
					"discount": "43% off",
					"selected": [
						{key: 'color', value: 'none', desc: ''},
						{key: 'size', value: 'none', desc: ''}
					],
					"list": [
						{
							"title": "颜色",
							"key": "color",   
							"list": [
								{
									"key": "blue",
									"value": "蓝色"
								},
								{
									"key": "blue",
									"value": "蓝色"
								},
								{
									"key": "blue",
									"value": "蓝色"
								},
								{
									"key": "blue",
									"value": "蓝色"
								},
								{
									"key": "blue",
									"value": "蓝色"
								},
								{
									"key": "blue",
									"value": "蓝色"
								},
								{
									"key": "blue",
									"value": "蓝色"
								},
								{
									"key": "blue",
									"value": "蓝色"
								},
								{
									"key": "blue",
									"value": "蓝色"
								},
								{
									"key": "blue",
									"value": "蓝色"
								}
							]
						},
						{
							"title": "尺寸",
							"key": "size",    /*分类key*/
							"list": [
								{
									"key": "M",
									"value": "M"
								},
								{
									"key": "L",
									"value": "L"
								},
								{
									"key": "XL",
									"value": "XL"
								},
								{
									"key": "XXL",
									"value": "XXL"
								}
							]
						}
					]
				}
			}
		},
		computed: {
			selectedDesc: function() {
				var desc = '';
				if (this.selectData.selected[0] && this.selectData.selected[0].value) {
					desc += 'Selected '
					this.selectData.selected.forEach((item) => {
						desc += ' ' + item.key + ' ' + item.desc + ',';
					});
				} else {
					desc += 'Please select '
					this.selectData.selected.forEach((item) => {
						desc += ' ' + item.key + ',';
					});
				}
				return desc.substring(0, desc.length - 1);
			}
		},
		methods: {
			hidePopup: function() {
				this.showPop = false;
			},
			showPopup: function(proId) {
				this.showPop = true;
				
				this.post('product/selectList', {proId: proId}).then(res => {
					// this.selectData = res.data;
				});
			},
			selectItem: function(select, item) {
				var temp = null;

				for (var i = 0; i < this.selectData.selected.length; i++) {
					if (this.selectData.selected[i].key === select.key) {
						temp = this.selectData.selected[i];
						break;
					}
				}
				
				if (!temp) {
					temp = {key: select.key, value: item.key, desc: item.value};
					this.selectData.selected.push(temp);
				} else {
					temp.value = item.key;
					temp.desc = item.value;
				}
			},
			confirm: function() {
				this.post('product/selected', {values: this.selectData.selected}).then(res => {
					
				});
				
				this.hidePopup();
			}
		}
	}
</script>
<style scoped>
	/* pop */
	.wb-mask {
		position: fixed;
		z-index: 998;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .3);
	}
	
	.wb-popup {
		position: absolute;
		z-index: 999;
		left: 0;
		bottom: 0;
		width: 100%;
		background-color: #ffffff;
		box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
	}
	
	/* 内容 */
	.container {
		display: flex;
		flex-direction: column;
		width: 750upx;
		height: 700upx;
		background-color: #FFFFFF;
	}
	
	/* header */
	.header {
		display: flex;
		flex-direction: row;
		margin-bottom: 40upx;
		justify-content: space-between;
	}
	
	.header .content {
		display: flex;
		flex-direction: row;
	}
	
	.header image {
		width: 120upx;
		height: 160upx;
		margin: -30upx 12upx 0 30upx;
	}
	
	.header-info {
		display: flex;
		flex-direction: column;
		font-size: 24upx;
		color: #ABABAB;
		margin-top: 12upx;
	}
	
	.header-price {
		display: flex;
		flex-direction: row;
		color: #FF0714;
	}
	
	.discount {
		margin-left: 12upx;
		border: #FF0714 1upx solid;
		border-radius: 6upx;
		padding: 0 20upx;
	}
	
	.header-info .original {
		text-decoration: line-through;
	}
	
	/* select */
	.select {
		display: flex;
		flex-direction: column;
		padding: 30upx;
		color: #606060;
	}
	
	.select .line {
		height: 4upx;
		width: 100%;
		margin-bottom: 30upx;
		background-color: #EEEEEE;
	}
	
	.sel-value {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-top: 20upx;
		font-size: 24upx;
	}
	
	.sel-item {
		padding: 6upx 20upx;
		margin: 0 20upx 20upx 0;
		border: #EEEEEE 1upx solid;
	}
</style>
