<template>
	<view>
		<wb-back-nav ref="nav" :title="navTitle" @rightBtnClick="edit"></wb-back-nav>
	</view>
</template>

<script>
	import wbNav from '../../components/wb-nav.vue'
	
	export default {
		components: {
			'wb-back-nav': wbNav
		},
		data() {
			return {
				isEditing: false,
				navTitle: this.local('navTitleAddressBook')
			};
		},
		onReady() {
			this.$refs.nav.resetRightBtn({text: this.local('publicEdit')});
		},
		methods: {
			edit: function (index) {
				if (this.isEditing) {
					uni.showToast({
						title: 'finish'
					});
				} else {
					uni.showToast({
						title: 'edit'
					});
				}
				
				this.isEditing = !this.isEditing;
				this.$refs.nav.resetRightBtn({text: this.local(this.isEditing ? 'publicFinish' : 'publicEdit')});
			}
		}
	}
</script>

<style>

</style>
