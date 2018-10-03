<template>
  <div class="post-list">
    <h1 class="page-title">Cписок всех фотографий</h1>

    <router-link tag="a" to="/">Назад на главную</router-link>

    <app-pagination
      :current="settings.currentPage"
      :total="settings.totalPhotos" 
      :perPage="settings.perPage" 
    ></app-pagination>

    <section class="grid">
      <div class="grid__item" v-for="(photo,index) in photos" :key="index">
        <app-card :photo.sync="photo"></app-card>
      </div>
    </section>
  </div>
</template>

<script>
import AppCard from '@/components/Card.vue'
import AppPagination from '@/components/Pagination.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'postList',
  components: {
    AppPagination,
    AppCard
  },
  computed: {
    ...mapGetters([
      'photos',
      'settings'
    ])
  },
  methods: {
    
  },
  created: function () {
    this.$store.dispatch('fetchPhotos', {
      page: this.currentPage
    })
  }
}
</script>

<style lang="stylus">
.post-list
  width 100%

.grid
  width 100%
  max-width 1280px
  display flex
  justify-content space-between
  flex-wrap wrap
  margin 0 auto

.grid__item
  width 30%
  flex-grow 1
  flex-shrink 1
  margin 0 20px 40px
</style>