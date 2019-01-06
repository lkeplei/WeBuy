<template>
	<view class="page">
		<view class="wb-cell" hover-class="wb-cell-hover" @click="uploadAvatar">
			<view class="wb-list-cell-navigate wb-navigate-right user-avatar">
				{{avatar}}
				<image src="../../static/userDefault.png"></image>
			</view>
		</view>
		<view class="wb-cell" hover-class="wb-cell-hover" @click="changeName">
			<view class="wb-list-cell-navigate wb-navigate-right wb-right">
				{{name}}
				<text>{{userName}}</text>
			</view>
		</view>
		
		<view class="func">
			<block v-for="(item, index) in funcList" :key="index">
				<view class="wb-cell" hover-class="wb-cell-hover" @click="clickFunc(item)">
					<view class="wb-list-cell-navigate wb-navigate-right wb-right">
						{{item.text}}
						<text>{{item.value}}</text>
					</view>
				</view>
			</block>
		</view>
		
		<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" 
					:pickerValueArray="pickerValueArray" :pickerValueDefault="pickerValueDefault"
					@onConfirm="onConfirm">
		</mpvue-picker>
		
	</view>
</template>

<script>
	import mpvuePicker from '../../components/mpvue-picker/mpvuePicker.vue';
	
	export default {
		components: {
			mpvuePicker
		},
		data() {
			return {
				userName: '',
				birthday: '',
				
				avatar: this.local('myInfoAvatar'),
				name: this.local('myInfoName'),
				funcList: [
					{text: this.local('myInfoBirthday'), type: 'birthday', value: ''},
					{text: this.local('myInfoGender'), type: 'gender', value: ''}
				],
				// 多级选择
				themeColor: '#007AFF',
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray: [],
				currentItem: {}
			};
		},
		onLoad(prop) {
			// 设置导航栏标题
			uni.setNavigationBarTitle({
				title: this.local('navTitleMyInfo')
			});
			
			this.userName = prop.userName;
		},
		onShow() {
			// 获取用户信息
			this.post('user/info', {}).then(res => {
				this.userName = res.data.Nickname;

				this.funcList[0].value = res.data.Birthday;
				if (res.data.Sex) {
					this.funcList[1].value = this.local(res.data.Sex == 'male' ? 'publicMale' : 'publicFemale');
				} else {
					this.funcList[1].value = this.local('publicMale');
				}
			});
		},
		methods: {
			uploadAvatar: function () {
				uni.showToast({
					title: 'upload avatar',
					icon: 'none'
				});
			},
			changeName: function () {
				uni.navigateTo({
					url: '/pages/account/change-name?userName=' + this.userName
				});
			},
			clickFunc: function (item) {
				if (item.type === 'birthday') {
					this.pickerValueArray = [];
					var one = 0, two = 0, three = 0;
					for (var year = 1970; year <= 2016; year++) {
						var y = {value: '' + year, label: '' + year, children: []};

						for (var month = 1; month <= 12; month++) {
							var m = {value: '' + year + month, label: (month < 10 ? '0' : '') + month, children: []};
							
							var days = 31;
							if (month == 4 || month == 6 || month == 9 || month == 11) {
								days = 30
							} else if (month == 2) {
								days = year % 4 == 0 ? 29 : 28;
							}
							
							for (var day = 1; day <= days; day++) {
								m.children.push({value: '' + year + month + day, label: (day < 10 ? '0' : '') + day});
							}
							y.children.push(m);
						}
						this.pickerValueArray.push(y);
					}
					
					this.mode = 'multiLinkageSelector';
					this.deepLength = 3;
					this.pickerValueDefault = [0, 0, 1];
					this.$refs.mpvuePicker.show();
				} else if (item.type === 'gender') {
					this.pickerValueArray = [
						{label: this.local('publicMale'), value: 'male'},
						{label: this.local('publicFemale'), value: 'female'}
					];
					this.mode = 'selector';
					this.deepLength = 1;
					this.pickerValueDefault = [0];
					this.$refs.mpvuePicker.show();
				}
				
				this.currentItem = item;
			},
			onConfirm: function (e) {
				this.currentItem.value = e.label;
				
				if (this.currentItem.type === 'birthday') {
					this.post('user/changeBirthday', {birthday: e.label}).then(res => {});
				} else if (this.currentItem.type === 'gender') {
					this.post('user/changeGender', {gender: e.value[0]}).then(res => {});
				}
			}
		},
		onBackPress() {
			if (this.$refs.mpvuePicker.showPicker) {
				this.$refs.mpvuePicker.pickerCancel();
				return true;
			}
		},
		onUnload() {
			if (this.$refs.mpvuePicker.showPicker) {
				this.$refs.mpvuePicker.pickerCancel();
			}
		}
	}
</script>

<style scoped>
	.user-avatar {
		height: 70px;
		justify-content: space-between;
	}
	
	.user-avatar image {
		width: 50px;
		height: 50px;
		margin: 10px;
	}
	
	.func {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
	}
</style>
