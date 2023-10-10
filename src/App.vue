<script setup lang="ts">
import Home from './components/Home.vue';
</script>

<template>
  <!-- <header>
    <img alt="Tango Timer Logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header> -->
  <Home />
</template>

<style scoped>
main {
  max-width: inherit;
  margin: auto;
  display: flex;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
