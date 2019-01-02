<template>
    <view class="wb-icon" :class="['wb-icon-'+type]" :style="{color:color,'font-size':fontSize}" @click="onClick()"></view>
</template>

<script>
    export default {
		name: "wb-icon",
        props: {
            /**
             * 图标类型
             */
            type: String,
            /**
             * 图标颜色
             */
            color: String,
            /**
             * 图标大小
             */
            size: [Number, String]
        },
        computed: {
            fontSize() {
                return `${this.size}px`
            }
        },
        methods: {
            onClick() {
                this.$emit('click')
            }
        }
    }
</script>

