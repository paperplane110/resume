<template>
  <section class="aboutMe">
    <Text h1 gradient>Resume.</Text>
    <Text h2>+ About me</Text>
    <Text h3 em> Hi! I'm Tianyu 👋 </Text>
    <Text>
      I'm currently doing algorithm testing at
      <ColorLink type="warning" href="https://www.aibee.cn/">Aibee 🐝</ColorLink>
      to ensure and improve the quality of image algorithms. I'm interested in
      Full-Stack technology, UI design, 3D arts, and games of course.
    </Text>
    <h2>+ Work Experience</h2>
    <h3>++ Software Engineer in Algorithm Test</h3>
    <p>
      2020.4-Current<ColorLink type="warning" href="https://www.aibee.cn/">@Aibee 🐝</ColorLink>
    </p>
    <h3>Key Qualifications & Responsibilities</h3>
    <ul>
      <li>
        Responsible for 5+ models' testing and giving test reports including
        badcase analysis and data visualization
      </li>
      <ul>
        <li>Face recognition model</li>
        <li>Face anti-spoofing model</li>
        <li>Face mask classification model</li>
        <li>Body 21-attributes model</li>
        <li>Car brand classification model</li>
        ...
      </ul>
      <li>
        Liases with algorithm researchers and improve the performance of models
      </li>
      <li>
        Design, write and debugged dev-tools to automate model test procedures,
        and boost the model verification flow
      </li>
    </ul>

    <h3>Key Achivements</h3>
    <ul>
      <li>
        Leading a four people group, developing a data management system
        called
        <ColorLink type="success">Data Manager</ColorLink>, which helps testers
        managing millions of images' data and hundreds of benchmarks. Increasing
        dataset management efficiency by 20%.
      </li>
      <li>
        Cooperating with algorithms researchers, pass the key algorithm
        certification:
        <ColorLink :href="bctcLink" target="_blank">BCTC face anti-spoofing</ColorLink>certification.
      </li>
      <li>
        Optimized the face recognition test tools with
        <ColorLink type="secondary" :href="faissLink" target="_blank">Faiss</ColorLink>, shortening test time nearly 4X.
      </li>
    </ul>
    <h2>+ Education</h2>
    <h3>++ Msc. Robotics
    </h3>
    <p>
      2019.10-2020.10 <ColorLink :href="uobLink">@University of Bristol
      </ColorLink>, UK
    </p>
    <h3>++ Bsc. Vehicle engineering
    </h3>
    <p>
      2015.9-2019.6 <ColorLink type="secondary" :href="scutLink">@South China University of Technology
      </ColorLink>, China
    </p>
  </section>
</template>

<script setup lang="ts">
const faissLink =
  "https://engineering.fb.com/2017/03/29/data-infrastructure/faiss-a-library-for-efficient-similarity-search/";
const bctcLink = "https://www.bctest.com/content/32.html";
const uobLink = "https://en.wikipedia.org/wiki/University_of_Bristol"
const scutLink = "https://zh.wikipedia.org/wiki/%E5%8D%8E%E5%8D%97%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6"
</script>

<style scope lang="scss">
.aboutMe {
  width: 800px;
}
</style>
