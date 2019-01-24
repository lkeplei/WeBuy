<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
			this.initTabbar();
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		},
		
		methods: {
			initTabbar: function() {
				setTimeout(()=>{
					uni.setTabBarItem({
						index: 0,
						text: this.local('tabHome'),
						iconPath: 'static/tabbar/tabHome.png',
						selectedIconPath: 'static/tabbar/tabHomeHL.png'
					});
					uni.setTabBarItem({
						index: 1,
						text: this.local('tabCart'),
						iconPath: 'static/tabbar/tabCart.png',
						selectedIconPath: 'static/tabbar/tabCartHL.png'
					});
					uni.setTabBarItem({
						index: 2,
						text: this.local('tabAccount'),
						iconPath: 'static/tabbar/tabAccount.png',
						selectedIconPath: 'static/tabbar/tabAccountHL.png'
					});
				}, 1000);
			}
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
	
/* 	view {
		display: flex;
		flex-direction: column;
	} */
	
	button {
		margin-top: 20upx;
		margin-bottom: 20upx;
	}
	
	form {
		width: 100%;
	}
</style>
