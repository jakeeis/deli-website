<template>
  <div class="jumbotron" :style="`background-image: url(${url});`">
    <h1 class="jumbotron-title">The Swiss Army Knife of Art</h1>
    <p class="jumbotron-subtext">
      From graphic design to game design to illustration,
      <br />
      you can count on me.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.jumbotron {
  height: 80%;
  margin: 0 -16px -30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.6);
  background-blend-mode: lighten;
  transform: translateY(-60px);

  .jumbotron-title {
  }

  .jumbotron-subtext {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.85);
    padding: 24px;
    border-radius: 8px;
  }
}
</style>
