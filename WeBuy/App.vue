<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/uni.css";
	@import "./common/we-buy.css";

	page {
		background-color: #F8F8F8;
		height: 100%;
		font-size: 32upx;
		line-height: 1.6;
	}
	
	checkbox,
	radio {
		margin-right: 10upx;
	}
	
	button {
		margin-top: 20upx;
		margin-bottom: 20upx;
	}
	
	form {
		width: 100%;
	}
</style>
