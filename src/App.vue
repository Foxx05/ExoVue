<script setup>
import Nav from './components/nav.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<style scoped>
  html, body {
    background-color: #3D3D3D;
  }
</style>
