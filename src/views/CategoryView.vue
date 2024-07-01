<script setup>
import { categories } from '~/layout.json'
import PageNotFoundVue from './PageNotFoundView.vue'
</script>

<template>
  <template v-if="category">
    <h1>{{ category.title }}</h1>
  </template>
  <PageNotFoundVue v-else />
</template>

<script>
export default {
  mounted() {
    console.log(this.category)
  },
  computed: {
    categoryName() {
      return this.$route.params.category
    },
    category() {
      return categories.find((cat) => cat.url.toLowerCase() === this.categoryName.toLowerCase())
    }
  }
}
</script>
