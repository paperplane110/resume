<template>
  <div>
    <h1>Components.</h1>
    <section>
      <h2><Code>Text</Code></h2>
      <p>
        Rich text with well-defined typographic styles, inspired by
        <ColorLink :href="NextUILink">Next UI</ColorLink>
      </p>
      <Text h3 em>This is a h3 italic styled paragraph</Text>
      <Text>It also can replace <Code>p</Code> tag seamless</Text>
    </section>
    <section>
      <h2><Code>ColorLink</Code></h2>
      <p>Colorful links. Different <Code>type</Code> has different color</p>
      <p>
        <ColorLink type="primary">primary</ColorLink>
        <ColorLink type="secondary">secondary</ColorLink>
        <ColorLink type="success">success</ColorLink>
        <ColorLink type="warning">warning</ColorLink>
        <ColorLink type="error">error</ColorLink>
      </p>
    </section>
    <section>
      <h2><Code>Code</Code></h2>
      <p>
        Customize inline code snippets. `` will be added around the code
        automatically.
      </p>
      <Code>print(Hello world!)</Code>
    </section>
    <section>
      <h2><Code>Card</Code></h2>
      <Card>
        <template #header><Text>Card Header</Text></template>
        <template #body>
          <ul>
            <li>Basic skill: Python, Shell, Docker</li>
            <li>Automation: Airflow, GitLab-CI</li>
            <li>Analysis & Visualization: Numpy, Pandas, Opencv, Plotly</li>
          </ul>
        </template>
        <template #footer>
          <Text>Footer: All above is just joking 🤣</Text>
        </template>
      </Card>
    </section>
    <section>
      <h2><Code>Sparkles</Code></h2>
      <Text>
        This is <Sparkles>sparking text</Sparkles>. You can use it to wrap some
        text or img elements. Also, it has some interesting effect, like:
        <Sparkles rainbow> rainbow sparkles </Sparkles>. You can also choose
        whatever color you like:
        <Sparkles color="lightseagreen"> lightseagreen sparkle.</Sparkles>
      </Text>
    </section>
    <section>
      <h2><Code>NavBar</Code></h2>
      <p>
        The <Code>NavBar</Code> has been divided into two parts, the site icon
        is at the left end, the links icon is at the rightside
      </p>
      <NavBar></NavBar>
    </section>
    <section>
      <h2><Code>Description</Code></h2>
      <Text>
        The <Code>Description</Code> component contains an image and it's
        description. The corners of the image have been rounded. The image is
        defined by <Code>src</Code> prop. The description could be defined as a
        child components.
      </Text>
      <Description></Description>
      <Text
        >The image and text's order could be reversed when you pass
        <Code>reverse</Code> props. Additionally, the width proportion of the
        image and text area can be modified by given number to
        <Code>textSize</Code> or <Code>imgSize</Code> props.
      </Text>
      <Description reverse src="/img/sample2.jpg" textSize="3"></Description>
    </section>
    <section>
      <h2><Code>Tooltip</Code></h2>
      <Text
        >Use Tooltip tag wrapper the component, and define the pop text with
        it's
        <Tooltip
          text="Hi, there! hkadhsfjkdhfkjashfkdOops, too late! This is an A-bomb lanuch button."
          ><Code>text</Code></Tooltip
        >
        props
      </Text>
      <Text>
        You can also defined the text by <Code>template</Code> tag with
        <Code>#text</Code>
      </Text>
      <br />
      <div>
        <Tooltip theme="light">
          <button>Don't push me</button>
          <template #text>
            Oops, too late! This is an A-bomb lanuch button.Oops, too late! This
            is an A-bomb lanuch button.Oops, too late! This is an A-bomb lanuch
            button.Oops, too late! This is an A-bomb lanuch button.
          </template>
        </Tooltip>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar/index.vue'
import Tooltip from '../components/Tooltip/Tooltip.vue'

const NextUILink = 'https://nextui.org/docs/components/text'
</script>

<style scope></style>
