<template>
  <div class="container">
    <div>
      <Text h1 :style="isTengel">{{ welcom }}</Text>
      <br />
      <Text h2> <Sparkles rainbow>欢迎来到</Sparkles>，天宇的个人网站 </Text>
      <Text h2>Welcom to Tianyu's personal website.</Text>
      <br />
      <Text h2>网站首页正在装修中，敬请期待🏗️</Text>
      <Text h2>The home page is coming soon</Text>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { ref } from 'vue'
import { randomToWord } from '../utils/randomToWord'

const welcom = ref('Hello!👋')

const welcomList = [
  'Hello!👋',
  '你好啊，朋友!👏',
  '5#t~C7T`V ✨',
  'Aloha!🌴',
  'こんにちは。🙌',
  'Bonjour!🍾',
  'Hallo!🍻',
  'नमस्ते🙏',
]
let i = 1

setInterval(() => {
  const target = welcomList[i]
  randomToWord(welcom, target)
  if (i === welcomList.length - 1) i = 0
  else i++
}, 5000)

const isTengel = computed(() => {
  if (welcom.value.startsWith('5#t')) {
    return { fontFamily: 'Tengel' }
  } else return {}
})
</script>

<style scoped>
.container {
  height: 100%;
  text-align: center;
  display: grid;
  place-items: center;
}
</style>
