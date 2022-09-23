<template>
  <div class="layout">
    <NavBar />
    <div class="contents">
      <RouterView></RouterView>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar/index.vue'
import Footer from './components/Footer.vue';
</script>

<style scoped lang="scss">
// .layout {
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   min-height: 100vh;
//   text-align: left;
//   justify-content: center;
//   align-items: center;
// }

.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  min-height: 100vh;
  text-align: left;
  justify-content: center;
}

.contents {
  // border: 2px dashed rgb(42, 42, 42);
}

.footer {
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

@media screen and (min-width: 400px) and (max-width: 850px) {

  .contents,
  .nav,
  .footer {
    width: 400px;
  }
}

@media screen and (min-width: 300px) and (max-width: 400px) {

  .contents,
  .nav,
  .footer {
    width: 300px;
  }
}
</style>
