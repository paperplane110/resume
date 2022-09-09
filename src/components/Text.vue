<template>

</template>

<script setup lang='ts'>

type Props = {
    h1: boolean,
    h2: boolean,
    h3: boolean,
    h4: boolean,
    p: boolean,
    size: number,
    weight: string | number,
}

defineProps<Props>({ p: true })

</script>

<style lang="scss" scope>

</style>