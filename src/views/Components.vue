<template>
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
                        <li>Basic skill: Python, Shell, Docker</li>
                        <li>Automation: Airflow, GitLab-CI</li>
                        <li>Analysis & Visualization: Numpy, Pandas, Opencv, Plotly</li>
                    </ul>
                </template>
                <template #footer>
                    <Text>All above is just joking 🤣</Text>
                </template>
            </Card>
        </div>
        <br />
        <div>
            <h2><Code>Sparkles</Code></h2>
            This is <Sparkles>sparking text</Sparkles>. You can use it to wrap some text or img elements.
            Also, it has some interesting effect, like:
            <Sparkles rainbow>
                <h4>rainbow sparkles</h4>
            </Sparkles>. You can also
            choose whatever color you like:
            <Sparkles color="lightseagreen">
                lightseagreen sparkle text
            </Sparkles>
        </div>
        <div>
            <h2><Code>NavBar</Code></h2>
            <p>The <Code>NavBar</Code> has been divided into two parts, the site icon is at the left end, the links icon
                is at the rightside</p>
            <NavBar></NavBar>
        </div>
    </section>
</template>

<script setup lang='ts'>
import NavBar from '../components/NavBar/index.vue';
const NextUILink = 'https://nextui.org/docs/components/text'
</script>

<style scope>

</style>