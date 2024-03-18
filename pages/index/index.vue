<template>
	<swiper autoplay indicator-dots circular>
		<swiper-item v-for="item in pictures" :key="item.id">
			<image :src="item.url"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				//轮播图数据
				pictures: [
					{id: "",url: ""}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
