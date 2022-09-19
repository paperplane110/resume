<template>
  <div class="container">
    <div class="nav">
      <div><img class="site-icon" :src="TianyuIcon" /></div>
      <font-awesome-icon
        @click="changLang"
        class="lang-icon"
        icon="fa-solid fa-language"
        size="2x"
      />
    </div>
    <ResumeCn v-if="isCn" />
    <Resume v-else />

    <div class="components" v-if="!isCn">
      <section>
        <h1>Components.</h1>
        <div>
          <div>
            <h2><Code>Text</Code></h2>
            <p>
              Rich text with well-defined typographic styles, inspired by
              <ColorLink :href="NextUILink">Next UI</ColorLink>
            </p>
            <Text h3 em>This is a h3 italic styled paragraph</Text>
            <Text>It also can replace <Code>p</Code> tag seamless</Text>
          </div>
          <h2><Code>ColorLink</Code></h2>
          <p>Colorful links. Different <Code>type</Code> has different color</p>
          <p>
            <ColorLink type="primary">primary</ColorLink>
            <ColorLink type="secondary">secondary</ColorLink>
            <ColorLink type="success">success</ColorLink>
            <ColorLink type="warning">warning</ColorLink>
            <ColorLink type="error">error</ColorLink>
          </p>
        </div>
        <div>
          <h2><Code>Code</Code></h2>
          <p>
            Customize inline code snippets. `` will be added around the code
            automatically.
          </p>
          <Code>print(Hello world!)</Code>
        </div>
        <div>
          <h2><Code>Card</Code></h2>
          <Card>
            <template #header><Text>Card Header</Text></template>
            <template #body>
              <ul>
                <li>基本技能: Python, Shell, Docker</li>
                <li>自动化: Airflow, GitLab-CI</li>
                <li>数据分析和可视化: Numpy, Pandas, Opencv, Plotly</li>
              </ul>
            </template>
          </Card>
        </div>
        <br />
        <div>
          <h2><Code>Sparkles</Code></h2>
          This is <Sparkles>sparking text</Sparkles>, and
          <Sparkles rainbow> <h4>rainbow sparkles</h4> </Sparkles>. You can also
          choose what color you like
          <Sparkles color="seagreen">
            <p>Specific color text</p>
          </Sparkles>
        </div>
      </section>
    </div>
    <!-- <div class="container-right">
      <Text h1 gradient>Header 1</Text>
      <Text h2>Header 2</Text>
      <Text h3>Header 3</Text>
      <Text h4>Header 4</Text>
      <Text>Paragraphs </Text>
      <Text h2 em>Header 2 with em</Text>
      <Text b em>YUI, UI kit built by tyyuan</Text>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import Resume from './Resume.vue'
import ResumeCn from './Resume.cn.vue'
import TianyuIcon from '/yty.svg'
import Sparkles from '../components/Sparkles/Sparkles.vue'
import 'animate.css'

import { ref } from 'vue'
const NextUILink = 'https://nextui.org/docs/components/text'

const lang = ref<string>('English Resme')
const isCn = ref<boolean>(true)

const changLang = () => {
  isCn.value = !isCn.value
  if (!isCn.value) {
    lang.value = '中文简历'
  } else {
    lang.value = 'English Resume'
  }
}
</script>

<style scope lang="less">
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: left;
  justify-content: center;
  align-items: center;

  &-left {
    flex: 1;
    text-align: left;
    // background-color: rgba(255, 229, 127, 0.072);
    padding: 1rem;
  }

  &-right {
    flex: 1;
    text-align: left;
    background-color: aliceblue;
    padding: 1rem;
  }
}

.site-icon {
  width: 70px;
  padding: 0.7rem 1rem 0 1.5rem;
  transition: all 0.3s;

  &:hover {
    // filter: hue-rotate(150deg);
    filter: contrast(150%);
  }
}

.lang-icon {
  margin-right: 1rem;
  transition: color 0.3s;
  &:hover {
    color: #646cff;
    cursor: pointer;
  }
  &:active {
    transform: translateY(2px);
  }
}

.nav {
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(208, 208, 208, 0.3);
  border-radius: 10px;
}

.components {
  width: 800px;
}
</style>
