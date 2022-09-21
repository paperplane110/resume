<template>
  <div class="des" :style="reverseSection">
    <div class="des-img-area" :style="imgAreaStyle">
      <img class="des-img" :src="props.src" alt="images" />
    </div>
    <div class="des-text-area" :style="textAreaStyle">
      <slot name="text">
        <Text>Hi there!</Text>
        <Text h2>Welcom to <Code>Description</Code></Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          fugit earum voluptas officia, quasi saepe et commodi, dolores cumque
          quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet
          repellendus
        </Text>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'

const props = defineProps({
  src: {
    type: String,
    default: '/img/sample.jpg',
  },
  reverse: {
    type: Boolean,
    default: false,
  },
  imgSize: {
    type: Number,
    default: 1,
  },
  textSize: {
    type: Number,
    default: 1,
  },
})

const reverseSection = computed(() => {
  if (props.reverse) {
    return {
      flexDirection: 'row-reverse' as const,
    }
  } else return {}
})

const imgAreaStyle = computed(() => {
  console.log('imgarea', props.imgSize)
  return {
    flex: props.imgSize,
  }
})

const textAreaStyle = computed(() => {
  return {
    flex: props.textSize,
  }
})
</script>

<style scope lang="scss">
.des {
  display: flex;
  // flex-direction: row-reverse;
  margin: 2rem 0;
  width: 100%;
  column-gap: 2rem;

  &-img-area {
    display: flex;
    align-items: center;

    background-color: rgba(255, 228, 196, 0.143);
    border-radius: 1rem;
  }

  &-text-area {
    padding: 1rem;
  }

  &-img {
    max-width: 100%;
    border-radius: 10px;
  }
}

@media screen and (min-width: 300px) and (max-width: 850px) {
  .des {
    flex-direction: column-reverse !important;

    &-text-area {
      padding: 0;
      margin: 0 0 1rem 0;
    }
  }
}
</style>
