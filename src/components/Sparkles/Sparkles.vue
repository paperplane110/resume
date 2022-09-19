<template>
  <span class="wrapper">
    <SparkleInstance
      v-for="sparkle in sparkleList"
      :key="sparkle.id"
      :color="sparkle.color"
      :size="sparkle.size"
      :style="sparkle.style"
    />
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import SparkleInstance from './SparkleInstance.vue'

type sparklesProps = {
  color?: string
  rainbow?: boolean
}

const props = defineProps<sparklesProps>()

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)'

const generateSparkle = (color = DEFAULT_COLOR) => {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(20, 50) + '%',
      left: random(0, 100) + '%',
      zIndex: 2,
    },
  }
}

let sparkleList = reactive([generateSparkle()])

const regenerate = () => {
  if (sparkleList.length > 3) sparkleList.shift()
  if (props.color) {
    sparkleList.push(generateSparkle(props.color))
  } else if (props.rainbow) {
    const num = random(0, 360)
    const randomColor = `hsl(${num}deg, 100%, 75%)`
    sparkleList.push(generateSparkle(randomColor))
  } else {
    sparkleList.push(generateSparkle())
  }
}

// while (1) {
//   const delay = random(20, 600)
//   setTimeout(regenerate, delay)
// }

setInterval(regenerate, 400)
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  display: inline-block;
  font-weight: 600;
}

.child-wrapper {
  position: relative;
  z-index: 1;
  font-weight: bold;
  color: hsl(200deg, 100%, 50%);
}
</style>
