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
	}
	
	.items-line {
		height: 180upx;
		width: 750upx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	
	.items-item {
		display: flex;
		flex-direction: column;
		width: 150upx;
		height: 180upx;
	}
	
	.items-item image {
		width: 120upx;
		height: 120upx;
		margin: 0 15upx;
		border-radius: 60px;
	}
	
	.items-item text {
		width: 150upx;
		height: 60upx;
		line-height: 60upx;
		text-align: center;
	}
</style>
