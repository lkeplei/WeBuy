<template>
	<view class="page">
		<view style="height: 10px;">
			
		</view>
		<block v-for="(item, indexKey) in list" :key="indexKey">
			<view class="wb-cell" hover-class="wb-cell-hover" @click="clickFunc(item)">
				<view class="wb-list-cell-navigate wb-navigate-right wb-right">
					{{item.text}}
					<text>{{item.value}}</text>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				funcList: [
					{text: this.local('settingAbout'), action: 'wb://setting/about', value: ''},
					{text: this.local('settingTerms'), action: 'wb://setting/terms', value: ''},
					{text: this.local('settingPrivacyPolicy'), action: 'wb://setting/privacy-policy', value: ''}
				]
			};
		},
		onLoad() {
			// 设置导航栏标题
			uni.setNavigationBarTitle({
				title: this.local('navTitleAboutUs')
			});
		}
	}
</script>

<style>

</style>
