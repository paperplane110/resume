<template>
  <div class="container">
    <div>
      <Text h1>{{ welcom }}</Text>
      <br />
      <Text h2>
        <Sparkles rainbow>欢迎来到</Sparkles>，天宇的个人网站
      </Text>
      <Text h2>Welcom to Tianyu's personal website.</Text>
      <br />
      <Text h2>网站首页正在装修中，敬请期待🏗️</Text>
      <Text h2>The home page is coming soon</Text>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { randomToWord } from '../utils/randomToWord'

const welcom = ref('Hello!')

const welcomList = [
  '你好啊，朋友!👏',
  'Aloha!🌴',
  'こんにちは。',
  'Bonjour!',
  'Hello!',
  'Hallo!',
  'नमस्ते🙏',
]
let i = 0

window.setInterval(() => {
  const target = welcomList[i]
  randomToWord(welcom, target)
  if (i === welcomList.length - 1) i = 0
  else i++
}, 6000)
</script>

<style scoped>
.container {
  height: 100%;
  text-align: center;
  display: grid;
  place-items: center;
}
</style>
