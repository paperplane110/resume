<template>
  <div class="container">
    <div class="container-left">
      <h1>Resume.</h1>
      <section class="aboutMe">

        <h2>+ About me</h2>
        <p>
          Hi! I'm <b><em>Yuan Tianyu</em></b> 👋
        </p>
        <p>
          I'm currently doing algorithm testing at
          <ColorA type="warning" href="https://www.aibee.cn/">Aibee 🐝</ColorA> to ensure
          and improve the quality of image algorithms. I'm interested in Full-Stack technology, UI design,
          and 3D arts.
        </p>
        <h2>+ Work Experience</h2>
        <h3>++ Software Engineer in Algorithm Test</h3>
        <p>2020.4-Current<ColorA type="warning" href="https://www.aibee.cn/">@Aibee 🐝</ColorA>
        </p>
        <h4>Key Qualifications & Responsibilities</h4>
        <ul>
          <li>Responsible for 5+ models' testing
            and giving test reports including badcase analysis and data visualization</li>
          <ul>
            <li>Face recognition model</li>
            <li>Face anti-spoofing model</li>
            <li>Face mask classification model</li>
            <li>Body 21-attributes model</li>
            <li>Car brand classification model</li>
            <li>Car 3D traking model</li>
            ...
          </ul>
          <li>Liases with algorithm researchers and improve the performance of models</li>
          <li>Design, write and debugged dev-tools to boost the model verification flow</li>
        </ul>

        <h3>Key Achivements</h3>
        <ul>
          <li>
            Leading a four people small group, developing a data management system called
            <ColorA type="success">Data Manager</ColorA>,
            which helps testers managing millions of images' data and hundreds of benchmarks.
            Increasing dataset management efficiency by 20%.
          </li>
          <li>
            Cooperating with algorithms researchers, pass the key algorithm certification:
            <ColorA :href="bctcLink" target="_blank">BCTC face anti-spoofing</ColorA>certification.
          </li>
          <li>
            Optimized the face recognition test tools with
            <ColorA type="secondary" :href="faissLink" target="_blank">Faiss</ColorA>, shortening test time
            nearly 4X.
          </li>
        </ul>
        <h2>+ Education</h2>
        <h3>++ Msc Robotics in UoB, UK</h3>
        <h3>++ Bsc Vehicle engineering in SCUT, China</h3>

      </section>
      <section>
        <h1>Components.</h1>
        <div>
          <h2><Code>ColorA</Code></h2>
          <p>Colorful links. Different
            <Code>type</Code> has different color
          </p>
          <p>
            <ColorA type="primary">primary</ColorA>
            <ColorA type="secondary">secondary</ColorA>
            <ColorA type="success">success</ColorA>
            <ColorA type="warning">warning</ColorA>
            <ColorA type="error">error</ColorA>
          </p>
        </div>
        <div>
          <h2><Code>Code</Code></h2>
          <p>Customize inline code snippets. `` will be added around the code automatically.
          </p>
          <Code>print(Hello world!)</Code>
        </div>
      </section>
    </div>
    <div class="container-right">right</div>
  </div>
</template>

<script setup lang='ts'>

const faissLink = "https://engineering.fb.com/2017/03/29/data-infrastructure/faiss-a-library-for-efficient-similarity-search/"
const bctcLink = "https://www.bctest.com/content/32.html"
</script>

<style scope lang="less">
.classified {
  background-color: black;

  &:hover {
    background-color: inherit;
  }
}

.container {
  display: flex;
  width: 100%;
  height: 100%;

  &-left {
    flex: 1;
    text-align: left;
    // background-color: rgba(255, 229, 127, 0.072);
    padding: 1rem;
  }

  &-right {
    flex: 1;
    display: grid;
    background-color: aliceblue;
    padding: 1rem;
  }
}
</style>