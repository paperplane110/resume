<template>
  <div
    class="wrapper"
    id="contents"
    @mouseenter="changePop(true)"
    @mouseleave="changePop(false)"
  >
    <slot></slot>
    <transition>
      <div
        v-if="isActive"
        id="pop"
        :class="`pop pop-${props.theme}`"
        :style="popPosition"
      >
        <slot name="text"></slot>
        {{ props.text }}
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted } from 'vue'
import 'animate.css'

const props = defineProps({
  theme: {
    type: String,
    default: 'black',
    validator(value: string) {
      return ['black', 'white'].includes(value)
    },
  },
  text: {
    type: String,
    default: '',
  },
})

console.log(props.text)

const isActive = ref(false)
const changePop = (activate: boolean) => {
  isActive.value = activate
}

type elementSize = {
  width: number
  height: number
}

type positionType = {
  top?: string
  bottom?: string
  left?: string
  right?: string
}

const contentsSize = reactive<elementSize>({ width: 0, height: 0 })
const popHeight = ref(0)

const popPosition = reactive<positionType>({})

onMounted(() => {
  // @audit the content will be duplicated
  const h = document.getElementById('contents')?.clientHeight
  const w = document.getElementById('contents')?.clientWidth
  const pH = document.getElementById('pop')?.clientHeight
  contentsSize.height = h ? h : 0
  contentsSize.width = w ? w : 0
  popHeight.value = pH ? pH : 0
  console.log('contents h: ', contentsSize.height)
  console.log('pop h: ', popHeight.value)
  popPosition.bottom = `${contentsSize.height + 10}px`
})
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  display: inline-block;
}

.pop {
  position: absolute;
  padding: 1rem;
  width: 200%;
  border-radius: 15px 15px 15px 0;

  &-black {
    color: white;
    background-color: rgba(41, 41, 41, 1);
  }

  &-white {
    background-color: rgb(255, 255, 255);
    border: 2px solid #3943f781;
    // box-shadow: 2px 2px 5px 2px #3943f74e;
  }
}
// .pop-black {
//   position: absolute;
//   padding: 1rem;
//   width: 200%;
//   min-width: 200px;
//   border-radius: 15px 15px 15px 0;
//   color: white;
//   background-color: rgba(41, 41, 41, 1);
// }

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
