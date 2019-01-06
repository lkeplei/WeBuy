<template>
	<view>
		<radio-group @change="radioChange">
			<label class="wb-cell wb-cell-pd" hover-class="wb-cell-hover" v-for="item in list" :key="item.value">
				<view>{{item.name}}</view>
				<view>
					<radio :value="item.value" checked="true" />
				</view>
			</label>
		</radio-group>	
		
		<wb-button :text="confirmText" @btnTap="confirm"></wb-button>
	</view>
</template>

<script>
	import wbButton from '../../components/wb-button.vue'
	
	export default {
		components: {
			'wb-button': wbButton
		},
		data() {
			return {
				confirmText: this.local('publicConfirm'),
				currentValue: null,
				list: [
					{value: 'English', name: 'English'},
					{value: 'SimpCh', name: '简体中文', checked: 'true'},
					{value: 'TradCh', name: '繁體中文'},
					{value: 'Saudi', name: "السعودية"}
				]
			}
		},
		onLoad() {
			// 设置导航栏标题
			uni.setNavigationBarTitle({
				title: this.local('navTitleLanguage')
			});
		},
		methods: {
			radioChange: function (e) {
				var items = this.list;
				
				for (var i = 0, len = items.length; i < len; ++i) {
					items[i].checked = items[i].value == e.detail.value
				}

				this.list = items;
				
				this.currentValue = e.detail.value;
			},
			confirm: function () {
				if (this.currentValue) {
					this.post('user/changeLanguage', {language: this.currentValue}).then(res => {	
						if (res.code == 200) {
							uni.setStorageSync(this.staticVar.language, this.currentValue);
							
							uni.navigateBack({delta: 1});
						}
					});	
				}
			}
		}
	}
</script>

<style>
	.wb-cell-pd {
		padding: 22upx 30upx;
	}
</style>
