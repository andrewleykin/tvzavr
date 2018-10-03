<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="stylus">
*
  margin 0
  padding 0
  box-sizing border-box
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50

.container
  max-width 1100px
  margin 0 auto

.page-title
  margin 30px 0
</style>
