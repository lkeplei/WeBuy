<template>
    <view>
        <web-view :webview-styles="webviewStyles" :src="url"></web-view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                },
				url: ''
            }
        },
		onLoad(prop) {
			this.url = prop.url;
		}
    }
</script>

<style>

</style>