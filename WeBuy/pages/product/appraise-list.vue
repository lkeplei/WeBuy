<template>
	<view>
		<view class="header">
			<text>{{averageText}}</text>
			<text>{{average}}</text>
		</view>
		
		<view class="review">
			<block v-for="(review, indexKey) in list" :key="indexKey">
				<view class="re-center">
					<view class="user">
						<image class="avatar" :src="review.avatar"></image>
						<text class="name">{{review.name}}</text>
						
						<block v-for="n in 	review.point">
							<image class="point" src="../../static/star-1.png"></image>
						</block>
					</view>
					<text class="message">{{review.message}}</text>
					<text class="desc">{{review.desc}}</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				averageText: this.local('appraiseListAverage'),
				average: 5,
				
				list: [
					{
						"avatar": "http://dummyimage.com/728x90",    /*用户头像*/
						"name": "h****t",    /*用户名*/
						"point": 4,    /*得分*/
						"time": "2018-12-12",    /*评价的发表时间*/
						"message": "我觉得这个东西还不错",    /*评价内容*/
						"desc": "color: yellow size:xxl"    /*评价的产品描述*/
					},
					{
						"avatar": "http://dummyimage.com/728x90",    /*用户头像*/
						"name": "h****t",    /*用户名*/
						"point": 4,    /*得分*/
						"time": "2018-12-12",    /*评价的发表时间*/
						"message": "我觉得这个东西还不错",    /*评价内容*/
						"desc": "color: yellow size:xxl"    /*评价的产品描述*/
					},
					{
						"avatar": "http://dummyimage.com/728x90",    /*用户头像*/
						"name": "h****t",    /*用户名*/
						"point": 4,    /*得分*/
						"time": "2018-12-12",    /*评价的发表时间*/
						"message": "我觉得这个东西还不错",    /*评价内容*/
						"desc": "color: yellow size:xxl"    /*评价的产品描述*/
					},
					{
						"avatar": "http://dummyimage.com/728x90",    /*用户头像*/
						"name": "h****t",    /*用户名*/
						"point": 4,    /*得分*/
						"time": "2018-12-12",    /*评价的发表时间*/
						"message": "我觉得这个东西还不错",    /*评价内容*/
						"desc": "color: yellow size:xxl"    /*评价的产品描述*/
					},
					{
						"avatar": "http://dummyimage.com/728x90",    /*用户头像*/
						"name": "h****t",    /*用户名*/
						"point": 4,    /*得分*/
						"time": "2018-12-12",    /*评价的发表时间*/
						"message": "我觉得这个东西还不错",    /*评价内容*/
						"desc": "color: yellow size:xxl"    /*评价的产品描述*/
					},
					{
						"avatar": "http://dummyimage.com/728x90",    /*用户头像*/
						"name": "h****t",    /*用户名*/
						"point": 4,    /*得分*/
						"time": "2018-12-12",    /*评价的发表时间*/
						"message": "我觉得这个东西还不错",    /*评价内容*/
						"desc": "color: yellow size:xxl"    /*评价的产品描述*/
					},
					{
						"avatar": "http://dummyimage.com/728x90",    /*用户头像*/
						"name": "h****t",    /*用户名*/
						"point": 4,    /*得分*/
						"time": "2018-12-12",    /*评价的发表时间*/
						"message": "我觉得这个东西还不错",    /*评价内容*/
						"desc": "color: yellow size:xxl"    /*评价的产品描述*/
					},
					{
						"avatar": "http://dummyimage.com/728x90",    /*用户头像*/
						"name": "h****t",    /*用户名*/
						"point": 4,    /*得分*/
						"time": "2018-12-12",    /*评价的发表时间*/
						"message": "我觉得这个东西还不错",    /*评价内容*/
						"desc": "color: yellow size:xxl"    /*评价的产品描述*/
					},
					{
						"avatar": "http://dummyimage.com/728x90",    /*用户头像*/
						"name": "h****t",    /*用户名*/
						"point": 4,    /*得分*/
						"time": "2018-12-12",    /*评价的发表时间*/
						"message": "我觉得这个东西还不错",    /*评价内容*/
						"desc": "color: yellow size:xxl"    /*评价的产品描述*/
					},
					{
						"avatar": "http://dummyimage.com/728x90",    /*用户头像*/
						"name": "h****t",    /*用户名*/
						"point": 4,    /*得分*/
						"time": "2018-12-12",    /*评价的发表时间*/
						"message": "我觉得这个东西还不错",    /*评价内容*/
						"desc": "color: yellow size:xxl"    /*评价的产品描述*/
					}
				]
			};
		},
		onLoad() {
			// 设置导航栏标题
			uni.setNavigationBarTitle({
				title: this.local('navTitleAppraiseList')
			});
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	view {
		display: flex;
		flex-direction: column;
	}
	
	.header {
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		height: 80upx;
	}
	
	.header text {
		margin-left: 30upx;
		line-height: 80upx;
	}
	
	/* review */
	.review {
		margin-top: 10upx;
		background-color: #FFFFFF;
	}
	
	.re-center {
		margin: 10upx 0;
		border-bottom: #EEEEEE 1upx solid;
	}
	
	.re-center .user {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 80upx;
		padding-left: 30upx;
	}
	
	.user .avatar {
		width: 50upx;
		height: 50upx;
	}
	
	.user .name {
		font-size: 24upx;
		color: #666666;
		margin: 0 10upx;
	}
	
	.user .point {
		width: 20upx;
		height: 20upx;
	}
	
	.re-center .message {
		font-size: 30upx;
		color: #666666;
		padding: 0 30upx;
	}
	
	.re-center .desc {
		font-size: 26upx;
		color: #999999;
		padding: 0 30upx;
		margin-bottom: 10upx;
	}
</style>
