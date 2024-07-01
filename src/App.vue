<script setup>
import NavBar from './components/NavBar.vue'
import layout from '~/layout.json'

layout.jumbotron =
  import.meta.env.MODE === 'production' ? '/assets/images/jumbotron.png' : 'src/' + layout.jumbotron
layout.categories = layout.categories.map((cat) => {
  cat.previewSrc = (import.meta.env.MODE === 'production' ? '' : 'src/') + cat.previewSrc
  return cat
})

console.log(layout)
</script>

<template>
  <NavBar />
  <main class="content-wrapper">
    <RouterView v-slot="{ Component }">
      <Transition name="page-slide" mode="out-in" appear>
        <component :is="Component" :layout="layout" />
      </Transition>
    </RouterView>
  </main>
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-family: 'Baskervville', serif;
  font-weight: 400;
  font-style: normal;
}

.app-root {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  height: 100vh;
  overflow: auto;
  padding: 0 16px 16px 16px;
}

.page-slide-enter-active,
.page-slide-leave-active {
  transition: 400ms ease all;
}

.page-slide-enter-from,
.page-slide-leave-to {
  opacity: 0;
  transform: translateY(60px);
}
</style>
