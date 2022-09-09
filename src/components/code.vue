<template>
    <code class="inline-code">`<slot></slot>`</code>
</template>

<script setup lang='ts'>

</script>

<style lang="scss" scope>
@use '../styles/light_theme';

.inline-code {
    color: light_theme.$primary-color;
}
</style>