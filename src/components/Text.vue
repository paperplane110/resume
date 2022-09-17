<template>
  <span :class="styleList">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'

type Props = {
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  em?: boolean
  b?: boolean
  p?: boolean
  size?: string | number
  weight?: string | number
  gradient?: boolean
}

const props = defineProps<Props>()

const styleList = computed(() => {
  const list: string[] = []
  if (props.h1) {
    list.push('h1')
  } else if (props.h2) {
    list.push('h2')
  } else if (props.h3) {
    list.push('h3')
  } else if (props.h4) {
    list.push('h4')
  } else {
    list.push('p')
  }
  if (props.em) list.push('em')
  if (props.b) list.push('b')
  if (props.gradient) list.push('gradient')
  console.log(list)
  return list
})

// const textGradient = computed(() => {
//   if (props.gradient) {
//     return {
//       background: `-webkit-linear-gradient(${props.gradient})`,
//       "background-clip": "text",
//       "-webkit-background-clip": "text",
//       "-webkit-text-fill-color": "transparent",
//     };
//   } else {
//     return {};
//   }
// });

console.log()
</script>

<style lang="scss" scope>
span {
  display: block;

  &::selection {
    color: white;
    background-color: $blue400;
    // for gradient::selection style
    -webkit-text-fill-color: rgb(255, 255, 255);
  }
}

.h1 {
  font-size: 3.2em;
  font-weight: 600;
  line-height: 1.1;
  margin: 2.65rem 0;
}

.h2 {
  font-size: 1.6em;
  font-weight: 600;
  line-height: 1.1;
  margin: 1.25rem 0;
}

.h3 {
  font-size: 1.2em;
  font-weight: 600;
  line-height: 1.1;
  margin: 1.2rem 0;
}

.h4 {
  font-size: 1em;
  font-weight: 600;
  line-height: 1.1;
  margin: 1.33rem 0;
}

.p {
  font-size: 1.1em;
  font-weight: 500;
  line-height: 1.5;
}

.em {
  font-style: italic;
}

.b {
  font-weight: 700;
}

.gradient {
  background: -webkit-linear-gradient(
    45deg,
    rgb(56, 92, 255) -20%,
    rgb(194, 96, 255) 50%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
