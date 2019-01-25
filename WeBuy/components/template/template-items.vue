<template>
	<view class="container-items">
		<block v-for="(line, index) in list" :key="index">
			<view class="items-line">
				<block v-for="(item, key) in line" :key="key">
					<view class="items-item" @click="clickItem(item)">
						<image :src="item.image"></image>
						<text>{{item.title}}</text>
					</view>
				</block>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: "tem-items",
		props: {
			template: { 
				type: Object,
				required: true 
			}
		},
		data() {
			return {
				list: []
			};
		},
		onLoad() {
			var temp = [];
			
			for (var i = 0; i < this.template.lineNumber * 2; i++) {
				temp.push(this.template.list[i]);
				
				if ((i > 0 && ((i + 1) % this.template.lineNumber) == 0)) {
					this.list.push(temp);
					temp = [];
				}
				
				if (i == this.template.list.length - 1) break;
			}
			
			console.log(this.list);
		},
		methods: {
			clickItem(item) {
				this.router(item.action, () => {
					
				})
			}
		}
	}
</script>

<style>
	.container-items {
		display: flex;
		flex-direction: column;
		margin-top: 10upx;
		color: #666666;
		font-size: 22upx;
		background-color: #FFFFFF;
	}
	
	.items-line {
		height: 130upx;
		width: 750upx;
		display: flex;
		flex-direction: row;
		margin-top: 10upx;
		justify-content: space-around;
	}
	
	.items-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 150upx;
		height: 100%;
	}
	
	.items-item image {
		width: 80upx;
		height: 80upx;
		margin: 0 15upx;
		border-radius: 38px;
	}
	
	.items-item text {
		width: 150upx;
		height: 40upx;
		line-height: 40upx;
		text-align: center;
	}
</style>
