<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Delaney Hanson</RouterLink>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Contact</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav,
ul {
  display: flex;
  align-items: center;
}

nav {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 100;
}

ul {
  list-style-type: none;
}

li {
  padding: 0 8px;
}

a:visited,
a:link {
  text-decoration: none;
  color: black;
}
</style>
