<template>
	<view class="container" @tap="buttonTap">
		<view class="wb-button" hover-class="wb-button-hover"
			:style="{'height': height + 'px', 'width': width + '%', 'background-color': bgColor, 'color': color}">
			<text>{{text}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "wb-button",
		props: {
			text: { type: String, default: '' },
			height: { type: Number, default: 44 },
			width: { type: Number, default: 100 },
			color: { type: String, default: '#FFFFFF' },
			bgColor: { type: String, default: '#007AFF' }
		},
		data() {
			return {
				
			};
		},
		methods: {
			buttonTap: function () {
				this.$emit('btnTap');
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.wb-button {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		
		background-color: #007AFF;
	}
	
	.wb-button-hover {
		background-color: #4CD964;
	}
</style>
