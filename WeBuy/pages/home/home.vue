<template>
	<view class="page">
		<block v-for="(template, index) in templateList" :key="index">
			<swiper v-if="template.type == 1" autoplay="true" indicator-dots="true" circular="true" class="swiper">
				<swiper-item v-for="(img, key) in template.list" :key="key">
					<image :src="img.image" class="swiper" />
				</swiper-item>
			</swiper>
			
			<tem-items v-if="template.type == 2"></tem-items>
			<tem-grid v-if="template.type == 3"></tem-grid>
			<tem-one4two v-if="template.type == 4"></tem-one4two>
			<tem-one4four v-if="template.type == 5"></tem-one4four>
			<tem-page v-if="template.type == 6"></tem-page>
		</block>
	</view>
</template>

<script>
	import temGrid from '../../components/template/template-grid.vue'
	import temItems from '../../components/template/template-items.vue'
	import temOne4four from '../../components/template/template-one4four.vue'
	import temOne4two from '../../components/template/template-one4two.vue'
	import temPage from '../../components/template/template-page.vue'
	
	export default {
		components: {
			'tem-grid': temGrid,
			'tem-items': temItems,
			'tem-one4four': temOne4four,
			'tem-one4two': temOne4two,
			'tem-page': temPage
		},
		data() {
			return {
				templateList: [
					{
						type: 1,
						list: [
							{image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg'},
							{image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg'},
							{image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg'}
						]
					},
					{
						type: 2,
					},
					{
						type: 3,
					},
					{
						type: 4,
					},
					{
						type: 5,
					},
					{
						type: 6,
					}
				]
			};
		},
		onLoad() {
			this.post('home/template', {}).then(res => {
				console.log(res);
			});
		}
	}
</script>

<style>
	.page {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
    }

	.swiper {
		width: 750upx;
		height: 400upx;
	}
	
    page {
        background: #efeff4;
    }
</style>
