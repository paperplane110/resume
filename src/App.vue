<template>
  <div class="layout">
    <div class="navbar">
      <NavBar />
    </div>
    <div class="contents">
      <RouterView></RouterView>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar/index.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped lang="scss">
.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  min-height: 100vh;
  text-align: left;
  justify-content: center;
}

.nav {
  margin: 1rem auto;
}

.contents {
  // border: 2px dashed rgb(42, 42, 42);
  margin: auto;
}

.footer {
  margin: auto;
  height: 70px;
  width: 100%;
  // border: 2px dashed rgb(42, 42, 42);
}

@media screen and (min-width: 800px) {
  .contents,
  .nav,
  .footer {
    width: 800px;
  }
}

@media screen and (min-width: 300px) and (max-width: 940px) {
  .contents,
  .nav,
  .footer {
    width: 85vw;
  }
}
</style>
