<template>
  <div class="card">
    <div class="card-header">
      <slot name="header">header</slot>
    </div>
    <div class="card-body">
      <slot name="body">body</slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.card {
  padding: 1rem;
  background-color: rgba(208, 208, 208, 0.3);
  border: 3px solid #213547;
  border-radius: 1rem;
  transition: all 0.3s;

  &:hover {
    border-color: $blue400;
    // transform: translate(-20px, -20px) rotate(3deg); // select effect
  }

  ul {
    padding-inline-start: 0;
  }
}
</style>
