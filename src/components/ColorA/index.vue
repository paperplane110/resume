<template>
  <a :class="type">
    <em>
      <slot></slot>
    </em>
  </a>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: "primary",
    validator(value: string) {
      return ["primary", "secondary", "success", "warning", "error"].includes(
        value
      );
    },
  },
});
</script>

<style scope lang="scss">
@mixin linkColor($color: $primary-color) {
  display: inline-block;
  color: $color;

  padding: 0 0.3rem 0.1rem 0.3rem;
  border-radius: 1rem;
  transition: all 0.3s;

  &:hover {
    color: white;
    background-color: $color;
    cursor: pointer;
    transform: translateY(-3px);
    // filter: drop-shadow(0px 3px 10px $color);
  }
}

.primary {
  @include linkColor($color: $primary-color);
}

.secondary {
  @include linkColor($color: $secondary-color);
}

.success {
  @include linkColor($color: $success-color);
}

.warning {
  @include linkColor($color: $warning-color);
}

.error {
  @include linkColor($color: $error-color);
}
</style>
