<template>
  <div
    class="wrapper"
    :id="contentsId"
    ref="contents"
    @mouseenter="changetip(true)"
    @mouseleave="changetip(false)"
  >
    <slot></slot>
    <transition>
      <div
        v-show="isActive"
        :id="tipId"
        ref="tip"
        :class="`tip tip-${props.theme}`"
        :style="tipPosition"
      >
        <slot name="text"></slot>
        {{ props.text }}
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted, onBeforeMount } from 'vue'
import { tooltipProps } from './Tooltip'
import { getUid } from '../../utils/getUid'

const props = defineProps(tooltipProps)

const contentsId = ref('contents')
const tipId = ref('tip')
onBeforeMount(() => {
  contentsId.value = 'contents-' + getUid()
  tipId.value = 'tip-' + getUid()
})

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
const tipSize = reactive<elementSize>({ width: 0, height: 0 })

const tipPosition = reactive<positionType>({})

onMounted(() => {
  const h = document.getElementById(contentsId.value)?.clientHeight
  const w = document.getElementById(contentsId.value)?.clientWidth

  contentsSize.height = h ? h : 0
  contentsSize.width = w ? w : 0

  console.log('contents h: ', contentsSize.height)
  console.log('contents w: ', contentsSize.width)
})

const isActive = ref(false)
const changetip = (activate: boolean) => {
  isActive.value = activate
  const tH = document.getElementById(tipId.value)?.clientHeight
  const tW = document.getElementById(tipId.value)?.clientWidth
  tipSize.height = tH ? tH : 0
  tipSize.width = tW ? tW : 0
  console.log('tip h: ', tipSize.height)
  console.log('tip w: ', tipSize.width)
  tipPosition.bottom = `${contentsSize.height + 10}px`
}
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  display: inline-block;
}

.tip {
  position: absolute;
  padding: 0.5rem;
  border-radius: 15px 15px 15px 0;
  font-size: 12px;
  line-height: 1.5;

  &-dark {
    color: white;
    background-color: rgba(41, 41, 41, 1);
  }

  &-light {
    background-color: rgb(255, 255, 255);
    border: 1px solid #3943f7e2;
    // box-shadow: 2px 2px 5px 2px #3943f74e;
  }
}
// .tip-black {
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
