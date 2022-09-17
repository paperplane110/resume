<template>
  <div class="container">
    <Resume />
    <!-- <div class="container-left">
      <section>

      </section>
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
      </section>
    </div>
    <div class="container-right">
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
import Resume from "./Resume.vue";
const NextUILink = "https://nextui.org/docs/components/text";
</script>

<style scope lang="less">
.container {
  display: flex;
  width: 100%;
  height: 100%;
  text-align: left;
  justify-content: center;

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
</style>
