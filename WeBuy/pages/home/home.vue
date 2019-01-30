<template>
	<view class="container" @touchmove="touchMove" @touchstart="touchStart">
		<!-- #ifdef APP-PLUS -->
		<view class="nav">
			<view class="nav-bar" :style="{'margin-top': statusHeight + 'px'}">
				<image src="../../static/scan.png"></image>
				<view class="input-view" @tap="search">
					<image src="../../static/search.png"></image>
					<input disabled confirm-type="search" class="input" type="text" placeholder="输入搜索关键词" />
				</view>
				<image src="../../static/info.png"></image>
			</view>
		</view>
		<!-- #endif -->
		
		<block v-for="(template, index) in templateList" :key="index">
			<tem-banners v-if="template.type == 1" :list="template.list"></tem-banners>
			<tem-items v-if="template.type == 2" :template="template"></tem-items>
			<tem-grid v-if="template.type == 3" :template="template"></tem-grid>
			<tem-one4two v-if="template.type == 4" :template="template"></tem-one4two>
			<tem-one4four v-if="template.type == 5" :template="template"></tem-one4four>
			<tem-page v-if="template.type == 6" :template="template"></tem-page>
			
		</block>
	</view>
</template>

<script>
	import temGrid from '../../components/template/template-grid.vue'
	import temItems from '../../components/template/template-items.vue'
	import temOne4four from '../../components/template/template-one4four.vue'
	import temOne4two from '../../components/template/template-one4two.vue'
	import temPage from '../../components/template/template-page.vue'
	import temBanners from '../../components/template/template-banners.vue'
	
	export default {
		components: {
			'tem-grid': temGrid,
			'tem-items': temItems,
			'tem-one4four': temOne4four,
			'tem-one4two': temOne4two,
			'tem-page': temPage,
			'tem-banners': temBanners
		},
		data() {
			return {
				statusHeight: 20,
				currentY: 0,
				templateList: [
					{
						type: 1,
						list: [
							{image: '/static/home/home-banner1.jpg', action: 'wb://web/loadUrl?url=https://food.tmall.com/?spm=875.7931836/B.category2016017.1.4daf4265bVeTZu&abtest=&abbucket=&pos=1&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_14561669881597_708026&aldid=75999'},
							{image: '/static/home/home-banner2.jpg', action: 'wb://web/loadUrl?url=https://nvxie.tmall.com/?spm=875.7931836/B.category2016012.1.4daf4265STlMTH&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_14561689118972_708026'},
							{image: '/static/home/home-banner3.jpg', action: 'wb://web/loadUrl?url=https://sports.tmall.com/?spm=875.7931836/B.category2016011.2.4daf4265STlMTH&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_14561677576501_708026'}
						]
					},
					{
						type: 2,
						lineNumber: 4,
						list: [
							{title: '女装', image: '/static/home/item-1.jpg', action: 'wb://web/loadUrl?url=https://s.taobao.com/search?q=%E5%A5%B3%E8%A3%85&imgfile=&js=1&stats_click=search_radio_all%3A1&initiative_id=staobaoz_20190129&ie=utf8'},
							{title: '主页', image: '/static/home/item-2.jpg', action: 'wb://web/loadUrl?url=https://www.taobao.com/'},
							{title: '男装', image: '/static/home/item-3.jpg', action: 'wb://web/loadUrl?url=https://s.taobao.com/search?q=%E7%94%B7%E8%A3%85&imgfile=&js=1&stats_click=search_radio_all%3A1&initiative_id=staobaoz_20190129&ie=utf8'},
							{title: '电子', image: '/static/home/item-4.jpg', action: 'wb://web/loadUrl?url=https://s.taobao.com/search?q=%E7%94%B5%E5%AD%90&imgfile=&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=a21bo.2017.201856-taobao-item.1&ie=utf8&initiative_id=tbindexz_20170306'},
							{title: 'VIP', image: '/static/home/item-5.jpg', action: 'wb://web/loadUrl?url=https://s.taobao.com/search?q=vip&imgfile=&js=1&stats_click=search_radio_all%3A1&initiative_id=staobaoz_20190129&ie=utf8'},
							{title: '名品', image: '/static/home/item-6.jpg', action: 'wb://web/loadUrl?url=https://s.taobao.com/search?q=%E5%90%8D%E5%93%81&imgfile=&js=1&stats_click=search_radio_all%3A1&initiative_id=staobaoz_20190129&ie=utf8'},
							{title: '京东', image: '/static/home/item-7.jpg', action: 'wb://web/loadUrl?url=https://www.jd.com/'},
							{title: '游戏', image: '/static/home/item-8.jpg', action: 'wb://web/loadUrl?url=https://pvp.qq.com/'}
						]
					},
					{
						type: 5,
						title: '时尚女装',
						headerImg: '/static/home/one4four-female.png',
						main: {image: '/static/home/one4four-female-1.jpg', action: 'wb://web/loadUrl?url=https://esey.tmall.com/?spm=a221t.1476805.2109261262.96.738b6769GQtbr4&pos=1&acm=301145.1003.2.5196070&scm=1003.2.301145.OTHER_1549435974032_5196070'},
						items: [
							{title: '加绒加厚休闲裤子', image: '/static/home/one4four-female-2.jpg', action: 'wb://web/loadUrl?url=https://esey.tmall.com/?spm=a221t.1476805.2109261262.96.738b6769GQtbr4&pos=1&acm=301145.1003.2.5196070&scm=1003.2.301145.OTHER_1549435974032_5196070'},
							{title: '宽松学生时尚套', image: '/static/home/one4four-female-3.jpg', action: 'wb://web/loadUrl?url=https://esey.tmall.com/?spm=a221t.1476805.2109261262.96.738b6769GQtbr4&pos=1&acm=301145.1003.2.5196070&scm=1003.2.301145.OTHER_1549435974032_5196070'},
							{title: '不规则港味半身裙', image: '/static/home/one4four-female-4.jpg', action: 'wb://web/loadUrl?url=https://esey.tmall.com/?spm=a221t.1476805.2109261262.96.738b6769GQtbr4&pos=1&acm=301145.1003.2.5196070&scm=1003.2.301145.OTHER_1549435974032_5196070'},
							{title: '加厚保暖铅笔小脚裤子', image: '/static/home/one4four-female-5.jpg', action: 'wb://web/loadUrl?url=https://esey.tmall.com/?spm=a221t.1476805.2109261262.96.738b6769GQtbr4&pos=1&acm=301145.1003.2.5196070&scm=1003.2.301145.OTHER_1549435974032_5196070'}
						]
					},
					{
						type: 5,
						title: '时尚男装',
						headerImg: '/static/home/one4four-male.png',
						main: {image: '/static/home/one4four-male-1.jpg', action: 'wb://web/loadUrl?url=https://pages.tmall.com/wow/fushi/20226/new?spm=a221t.1710963.8073444875.128.51fa1135V8R63V&pos=1&acm=301146-1.1003.2.4355165&scm=1003.2.301146-1.OTHER_1537932205196_4355165'},
						items: [
							{title: '男装2018秋冬新品', image: '/static/home/one4four-male-2.jpg', action: 'wb://web/loadUrl?url=https://it.tmall.com/?spm=a221t.11725783.4989503483.6.699125a01yP2Z2&pos=6&acm=lb-zebra-364125-4246802.1003.1.3741270&scm=1007.13976.92121.0'},
							{title: '翻领双排扣大衣', image: '/static/home/one4four-male-3.jpg', action: 'wb://web/loadUrl?url=https://hjunyo.tmall.com/?spm=a221t.11725783.5405515587.1.699125a01yP2Z2&pos=1&acm=lb-zebra-364125-4246795.1003.1.3741263&scm=1007.13976.92121.0'},
							{title: '百斯盾男士羽绒服', image: '/static/home/one4four-male-4.jpg', action: 'wb://web/loadUrl?url=https://bestn.tmall.com/?spm=a221t.11725783.5405515587.19.699125a01yP2Z2&pos=20&acm=lb-zebra-364125-4246795.1003.1.3741263&scm=1007.13976.92121.0'},
							{title: '男装男款潮品牌', image: '/static/home/one4four-male-5.jpg', action: 'wb://web/loadUrl?url=https://septwolveslt.tmall.com/?spm=a221t.11725783.6571526401.6.699125a01yP2Z2&pos=6&acm=lb-zebra-364125-4246799.1003.1.3741277&scm=1007.13976.92121.0'}
						]
					},
					{
						type: 5,
						title: '数码商城',
						headerImg: '/static/home/one4four-digital.png',
						main: {image: '/static/home/one4four-digital-1.jpg', action: 'wb://web/loadUrl?url=https://shouji.tmall.com/?spm=a222t.7794920.fsentrances.4.4f5839edOqn6l6&pos=1&acm=lb-zebra-24139-328533.1003.8.2362277&scm=1003.8.lb-zebra-24139-328533.ITEM_1507311384018_2362277'},
						items: [
							{title: '电竞频道', image: '/static/home/one4four-digital-2.jpg', action: 'wb://web/loadUrl?url=https://game.tmall.com/?spm=a222t.7794920.fsentrances.1.4f5839edOqn6l6&acm=lb-zebra-24139-328526.1003.4.1792202&scm=1003.4.lb-zebra-24139-328526.ITEM_1_1792202'},
							{title: '音箱品类', image: '/static/home/one4four-digital-3.jpg', action: 'wb://web/loadUrl?url=https://detail.tmall.com/item.htm?spm=a222t.7794920.fsentrances.2.4f5839edOqn6l6&pos=1&acm=lb-zebra-24139-328531.1003.8.4179040&id=567925396518&scm=1003.8.lb-zebra-24139-328531.ITEM_1536523624298_4179040'},
							{title: '分期购', image: '/static/home/one4four-digital-4.jpg', action: 'wb://web/loadUrl?url=https://romoss.tmall.com/?spm=a222t.7794920.brands.4.4f5839edOqn6l6&acm=lb-zebra-24139-336743.1003.4.460716&scm=1003.4.lb-zebra-24139-336743.OTHER_80_460716'},
							{title: '聚划算', image: '/static/home/one4four-digital-5.png', action: 'wb://web/loadUrl?url=https://jusp.tmall.com/act/o/catjiadian?spm=a222t.7794920.fsentrances.5.4f5839edOqn6l6&acm=lb-zebra-24139-328532.1003.4.4665461&scm=1003.4.lb-zebra-24139-328532.ITEM_1_4665461'}
						]
					},
					{
						type: 3,
						title: '电器城',
						headerImg: '/static/home/grid-head.png',
						list: [
							{title: '11', image: '/static/home/grid-1.jpg', action: 'wb://web/loadUrl?url=https://3c.tmall.com/?spm=875.7931836/B.category2016019.1.4daf426587naHy&go=appl&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_14561650644158_708026'},
							{title: '22', image: '/static/home/grid-2.jpg', action: 'wb://web/loadUrl?url=https://new3c.tmall.com/?spm=a222t.7794920.a2226c3nav.2.38e939edJIRcfq&acm=lb-zebra-155904-807029.1003.4.767290&scm=1003.4.lb-zebra-155904-807029.OTHER_14592982644622_767290'},
							{title: '33', image: '/static/home/grid-3.jpg', action: 'wb://web/loadUrl?url=https://ku.tmall.com/?spm=a222t.7782200.a2226c3nav.3.4e5d783boDgrVd&acm=lb-zebra-155904-807029.1003.4.767290&scm=1003.4.lb-zebra-155904-807029.OTHER_14592978797143_767290'},
							{title: '44', image: '/static/home/grid-4.jpg', action: 'wb://web/loadUrl?url=https://fenqi.tmall.com/?spm=a222t.7794920.a2226c3nav.4.38e939edJIRcfq&acm=lb-zebra-155904-807029.1003.4.767290&scm=1003.4.lb-zebra-155904-807029.OTHER_14592959559714_767290'},
							{title: '55', image: '/static/home/grid-5.jpg', action: 'wb://web/loadUrl?url=https://shouji.tmall.com/?spm=a222t.7794920.a2226c3nav.5.38e939edJIRcfq&acm=lb-zebra-155904-807029.1003.4.767290&scm=1003.4.lb-zebra-155904-807029.OTHER_14592967254716_767290'},
							{title: '66', image: '/static/home/grid-6.jpg', action: 'wb://web/loadUrl?url=https://suning.tmall.com/?spm=a222t.7794920.a2226c3nav.6.38e939edJIRcfq&acm=lb-zebra-155904-807029.1003.4.767290&scm=1003.4.lb-zebra-155904-807029.OTHER_14592944169808_767290'}
						]
					},
					{
						type: 4,
						main: {image: '/static/home/one4two-1.jpg', action: 'wb://web/loadUrl?url=https://tianwang.tmall.com/p/rd964488.htm?spm=a222z.7696808.2134816102.4.482a75845QRMWY&acm=lb-zebra-2076-322917.1003.4.598565&scm=1003.4.lb-zebra-2076-322917.SHOP_1125378539_598565'},
						top: {image: '/static/home/one4two-2.jpg', action: 'wb://web/loadUrl?url=https://tianwang.tmall.com/p/rd964488.htm?spm=a222z.7696808.2134816102.4.482a75845QRMWY&acm=lb-zebra-2076-322917.1003.4.598565&scm=1003.4.lb-zebra-2076-322917.SHOP_1125378539_598565'},
						bottom: {image: '/static/home/one4two-3.jpg', action: 'wb://web/loadUrl?url=https://tianwang.tmall.com/p/rd964488.htm?spm=a222z.7696808.2134816102.4.482a75845QRMWY&acm=lb-zebra-2076-322917.1003.4.598565&scm=1003.4.lb-zebra-2076-322917.SHOP_1125378539_598565'}
					},
					{
						type: 6,
						title: '精品专区',
						haveMore: true,
						headerImg: '/static/home/page-top.png',
						list: [
							{title: '女装', image: '/static/home/page-1.jpg', action: 'wb://web/loadUrl?url=https://nvzhuang.tmall.com/?spm=875.7931836/B.category2016010.1.4daf426587naHy&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_14561681423980_708026'},
							{title: '男装', image: '/static/home/page-2.jpeg', action: 'wb://web/loadUrl?url=https://it.tmall.com/?spm=a221t.11725783.4989503483.6.699125a01yP2Z2&pos=6&acm=lb-zebra-364125-4246802.1003.1.3741270&scm=1007.13976.92121.0'},
							{title: '女鞋', image: '/static/home/page-3.jpg', action: 'wb://web/loadUrl?url=https://nvxie.tmall.com/?spm=875.7931836/B.category2016012.1.4daf426587naHy&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_14561689118972_708026'},
							{title: '腕表', image: '/static/home/page-4.jpg', action: 'wb://web/loadUrl?url=https://watch.tmall.com/?spm=875.7931836/B.category2016014.1.4daf426587naHy&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_14561666034064_708026'},
							{title: '手机', image: '/static/home/page-5.jpg', action: 'wb://web/loadUrl?url=https://shouji.tmall.com/?spm=875.7931836/B.category2016015.1.4daf426587naHy&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_14561662186585_708026'},
							{title: '母婴', image: '/static/home/page-6.jpg', action: 'wb://web/loadUrl?url=https://baby.tmall.com/?spm=875.7931836/B.category2016016.1.4daf426587naHy&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_14561673729066_708026'},
							{title: '零食', image: '/static/home/page-7.jpg', action: 'wb://web/loadUrl?url=https://food.tmall.com/?spm=875.7931836/B.category2016017.1.4daf426587naHy&abtest=&abbucket=&pos=1&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_14561669881597_708026&aldid=75999'},
							{title: '3C', image: '/static/home/page-8.jpg', action: 'wb://web/loadUrl?url=https://3c.tmall.com/?spm=875.7931836/B.category2016019.1.4daf426587naHy&go=appl&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_14561650644158_708026'},
							{title: '家具', image: '/static/home/page-9.jpg', action: 'wb://web/loadUrl?url=https://jia.tmall.com/?spm=875.7931836/B.category2016020.1.4daf426587naHy&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_14561646796679_708026'},
							{title: '汽车', image: '/static/home/page-10.jpg', action: 'wb://web/loadUrl?url=https://car.tmall.com/?spm=875.7931836/B.category2016021.1.4daf426587naHy&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_145616583391510_708026'},
							{title: '家纺', image: '/static/home/page-11.jpg', action: 'wb://web/loadUrl?url=https://myhome.tmall.com/?spm=875.7931836/B.category2016022.1.4daf426587naHy&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_145616544916711_708026'},
							{title: '图书', image: '/static/home/page-12.jpg', action: 'wb://web/loadUrl?url=https://book.tmall.com/?spm=875.7931836/B.category2016025.1.4daf426587naHy&acm=lb-zebra-148799-667863.1003.4.708026&scm=1003.4.lb-zebra-148799-667863.OTHER_145616429492414_708026'}
						]
					}
				]
			};
		},
		onLoad() {
			this.post('home/template', {}).then(res => {
				console.log(res);
			});
			
			this.statusHeight = uni.getSystemInfoSync().statusBarHeight;
		},
		methods: {
			touchStart: function(e) {
				this.currentY = e.clientY;
			},
			touchMove: function(e) {
				var offsetY = e.clientY - this.currentY;
				this.currentY = e.clientY;
				
				// this.statusHeight += offsetY;
			},
			search: function () {
				uni.navigateTo({
					url: './search'
				})
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
    }
	
    page {
        background: #efeff4;
    }
	
	/* nav */
	.nav {
		display: flex;
		flex-direction: column;
		position: fixed;
		z-index: 99;
		height: 64px;
		width: 750upx;
	}
	
	.nav-bar {
		display: flex;
		flex-direction: row;
		height: 44px;
		justify-content: space-around;
	}
	
	.nav-bar image {
		width: 26px;
		height: 26px;
		margin-top: 8px;
	}
	
	.input-view {
		width: 500upx;
		display: flex;
		flex-direction: row;
		height: 30px;
		border-radius: 15px;
		padding: 0 10px;
		border: 2upx solid;
		border-color: #eee;
		margin-top: 6px;
		background-color: rgba(255, 255, 255, 0.8);
	}
	
	.input-view image {
		width: 24px;
		height: 24px;
		margin-top: 3px;
	}
	
	.input {
		height: 30px;
		padding: 0 5px;
	}
	
</style>
