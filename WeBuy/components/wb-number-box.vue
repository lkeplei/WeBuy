<template>
	<view class="wb-numbox" :style="{height: customHeight}">
		<view class="wb-numbox-minus" :style="{'line-height': customHeight, 'width': customWidth}" :class="{'wb-numbox-disabled': disableSubtract}" @click.stop="_calcValue('subtract')">-</view>
		<text class="wb-numbox-value" :style="{'line-height': customHeight}">{{inputValue}}</text>
		<view class="wb-numbox-plus" :style="{'line-height': customHeight, 'width': customWidth}" :class="{'wb-numbox-disabled': disableAdd}" @click.stop="_calcValue('add')">+</view>
	</view>
</template>
<script>
	export default {
		name: 'wb-number-box',
		model: {    
			prop: 'value',
			event: 'change'
		},
		props: {
			value: {
				type: Number,
				default: 0
			},
			min: {
				type: Number,
				default: -Infinity
			},
			max: {
				type: Number,
				default: Infinity
			},
			step: {
				type: Number,
				default: 1
			},
			height: {
				type: Number,
				default: 50
			}
		},
		data() {
			return {
				inputValue: this.value
			}
		},
		computed: {
			disableSubtract() {
				return this.value <= this.min
			},
			disableAdd() {
				return this.value >= this.max
			},
			customHeight() {
			    return this.height / 2 + 'px';
			},
			customWidth() {
			    return (this.height / 2 * 1.2) + 'px';
			}
		},
		watch: {
			value(val) {
				this.inputValue = val;
			},
			inputValue(val) {
				this.$emit('change', val);
			}
		},
		methods: {
			_calcValue(type) {
				const scale = this._getDecimalScale();
				let value = this.inputValue * scale;
				let step = this.step * scale;

				if (type === 'subtract') {
					value -= step
				} else if (type === 'add') {
					value += step
				}
				if (value < this.min || value > this.max) {
					return
				}
				this.inputValue = value / scale;
			},
			_getDecimalScale() {
				let scale = 1;
				// 浮点型
				if (~~this.step !== this.step) {
					scale = Math.pow(10, (this.step + '').split('.')[1].length);
				}
				return scale;
			},
			_onBlur(event) {
				let value = event.detail.value;
				if (!value) {
					this.inputValue = 0;
					return
				}
				value = +value;
				if (value > this.max) {
					value = this.max;
				} else if (value < this.min) {
					value = this.min
				}
				this.inputValue = value
			}
		}
	}
</script>
<style>
	.wb-numbox {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		border: 1upx solid #EEEEEE;
		border-radius: 6upx;
	}

	.wb-numbox-minus,
	.wb-numbox-plus {
		margin: 0;
		background-color: #f9f9f9;
		height: 100%;
		text-align: center;
		color: #848484;
	}
	
	.wb-numbox-minus {
		border-right: 1upx solid #EEEEEE;
	}
	
	.wb-numbox-plus {
		border-left: 1upx solid #EEEEEE;
	}

	.wb-numbox-value {
		background-color: #FFFFFF;
		width: 90upx;
		height: 100%;
		text-align: center;
	}

	.wb-numbox-disabled {
		color: #DDDDDD;
	}
</style>
