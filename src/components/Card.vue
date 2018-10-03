<template>
	<div class="card">
		<div class="card__body">
			<img :src="photo.urls.small" alt="">
		</div>
		<div class="card__footer media">
			<img :src="photo.user.profile_image.small" alt="" class="media__obj">
			<div class="media__body">
				<a :href="photo.user.portfolio_url" target="_blank">{{ photo.user.name }}</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['photo']
	}
</script>

<style lang="stylus" scoped>
.card
  background-color #fff
  overflow hidden
  box-shadow 0 1px 2px rgba(0,0,0,.2)
  border-radius 2px
  line-height 0
  cursor pointer
  &:hover
    box-shadow 0 3px 6px rgba(0,0,0,.2)

.card__body
  width 100%
  height 215px
  overflow hidden
  background-color #eee
  img
    width 100%
    height 100%
    object-fit cover

.card__footer
  width 100%
  padding 10px 15px

.media__obj
  width 32px
  height 32px
  border-radius 50%
  background-color #d8d8d8
  margin-right 15px
  float left

.media__body
  width 100%
  height 32px
  line-height 32px
  a
    font-family Courier, serif
    font-size 15px
    color #999
    &:hover
      text-decoration none
</style>

