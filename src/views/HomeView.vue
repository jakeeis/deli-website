<script setup>
import Jumbotron from '../components/Jumbotron.vue'
</script>

<template>
  <div class="home-page-container">
    <Jumbotron :url="layout.jumbotron" />
    <div class="art-wrapper">
      <div
        class="category-preview"
        v-for="category in layout.categories"
        v-bind:key="category.title"
        @click="$router.push(category.url)"
      >
        <span>{{ category.title }}</span>
        <img v-bind:src="category.previewSrc" :alt="'Preview of ' + category.title" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    layout: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
.home-page-container {
  height: 100vh;
}

.art-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 60%;
  margin: auto;
}

.category-preview {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  cursor: pointer;

  img {
    width: 100%;
    transition: 0.5s;
  }

  span {
    position: absolute;
    opacity: 0;
    transition: 0.5s;
    z-index: 5;

    &:hover {
      opacity: 1;
    }
  }

  &:hover {
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);

    img {
      filter: blur(2px);
      opacity: 0.5;
    }

    span {
      opacity: 1;
    }
  }
}
</style>
