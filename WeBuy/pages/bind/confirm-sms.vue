<template>
	<view class="page">
		<wb-back-nav></wb-back-nav>
		
		<view class="container">
			<text style="font-size: 40upx;">{{bindSmsText}}</text>
			<text style="font-size: 22upx; color: #B2B2B2;">{{smsRemind}}</text>
			
			<view class="ver-v">
				<input type="text" v-model="verCode" :placeholder="placeholderVerCode"/>
				<view class="send-v" @click="resend">
					{{sendText}}
				</view>
			</view>
			
			<wb-button :text="confirmText" @btnTap="confirm"></wb-button>
		</view>
	</view>
</template>

<script>
	import wbNav from '../../components/wb-back-nav.vue'
	import wbButton from '../../components/wb-button.vue'
	
	export default {
		components: {
			'wb-back-nav': wbNav,
			'wb-button': wbButton
		},
		data() {
			return {
				bindSmsText: this.local('bindSmsText'),
				bindSmsRemind: this.local('bindSmsRemind'),
				confirmText: this.local('publicConfirm'),
				placeholderVerCode: this.local('placeholderVerCode'),
				
				phone: '',
				countryId: 86,
				verCode: '',
				timeCount: 60,
				
				timer: null
			};
		},
		onLoad(prop) {
			this.phone = prop.phone;
			this.countryId = prop.countryId;
			
			this.timer = setInterval(() => {
				if (this.timeCount > 0) {
					this.timeCount--;
				}
			}, 1000);
		},
		onUnload() {
			clearInterval(this.timer);
			this.timer = null;
		},
		computed: {
			smsRemind: function () {
				return this.bindSmsRemind + this.phone;
			},
			sendText: function () {
				return this.timeCount > 0 ? this.timeCount + this.local('bindVerTime') : this.local('bindVerResend');
			}
		},
		methods: {
			confirm: function () {
				this.post('user/bindPhone', {phone: this.phone, countryId: countryId, verCode: this.verCode}).then(res => {});
			},
			resend: function () {
				if (this.timeCount <= 0) {
					this.post('sms/verCode', {}).then(res => {
						this.timeCount = 60;
					});
				}
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
	}
	
	.container text {
		padding: 20upx 40upx 0 40upx;
	}
	
	.ver-v {
		display: flex;
		flex-direction: row;
		height: 80upx;
		margin: 80upx 40upx;
	}
	
	.send-v {
		background-color: #DC143C;
	}
</style>
