<template>
	<view class="page">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onNavigationBarButtonTap(index) {
			uni.navigateTo({
				url: './setting'
			});
		}
	}
</script>

<style scoped>
	.page {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
    }
</style>
