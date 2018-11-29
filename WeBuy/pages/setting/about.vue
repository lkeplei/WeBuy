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
		onLoad() {
			// 设置导航栏标题
			uni.setNavigationBarTitle({
				title: this.local('navTitleAbout')
			});
		}
	}
</script>

<style>

</style>
