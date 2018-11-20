<template>
	<swiper autoplay="true" indicator-dots="true" circular="true" class="swiper-banners">
		<swiper-item v-for="(item, key) in list" :key="key" @click="clickItem(item)">
			<image :src="item.image" class="swiper-banners" />
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name: "tem-banners",
		props: {
			list: { 
				type: Array,
				required: true 
			}
		},
		data() {
			return {
				
			};
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
	.swiper-banners {
		width: 750upx;
		height: 400upx;
	}
</style>
