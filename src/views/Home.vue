<template>
  <div class="home">
    <h1 class="page-title">Cтраница с фотографиями из сервиса Unsplash!</h1>
    <router-link tag="a" to="/posts/" class="home__link">Перейти</router-link>
    <p>Нажимая кнопку перейти вы попадете на страницу со всеми фото.</p>
    <p>Для вашего удобства мы предусмотрели удобную пагинацию.</p>
    <p>На одной странице будет показано только 8 фото.</p>
    <p>Пагинация формируется автоматически в зависимости от ответа с сервера.</p>
    <div class="user">
      <p>Выполнил:</p>
      <h4 class="user__title">Андрей Лейкин</h4>
      <a href="https://kazan.hh.ru/resume/e86d9388ff03dd4a9c0039ed1f6e7438515750" target="_blank" class="user__link">hh.ru</a>
      <a href="https://t.me/andrewleykin" target="_blank" class="user__link">Telegram</a>
      <a href="mailto:andrewleykin@mail.ru" class="user__link">Mail</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>

<style lang="stylus" scoped>

.home
  padding 20px 0
  p
    line-height 24px

.home__link
  display flex
  justify-content center
  align-items center
  border-radius 10px
  padding 20px
  margin-bottom 20px
  text-decoration none
  color #2196f3
  background #e3f2fd
  max-width 200px
  transition all .2s
  &:hover
    background #2196f3
    color #e3f2fd

.user
  margin 30px 0

.user__title
  margin 15px 0 20px

.user__link
  display block
  text-decoration none
  &+&
    margin-top 10px
  &:hover
    text-decoration underline

</style>
