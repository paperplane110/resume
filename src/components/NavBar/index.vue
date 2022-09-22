<template>
  <div class="nav">
    <div>
      <router-link to="/">
        <img class="nav-icon" :src="TianyuIcon" />
      </router-link>
    </div>
    <div class="nav-links">
      <router-link
        v-for="linkInfo in linkList"
        :key="linkInfo.name"
        :to="linkInfo.to"
      >
        <div class="nav-links-item">
          <font-awesome-icon
            class="lang-icon"
            :icon="`fa-solid ${linkInfo.icon}`"
            size="1x"
          />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import TianyuIcon from '/yty.svg'

const linkList = [
  {
    name: 'components',
    icon: 'fa-cubes',
    to: '/components',
  },
  {
    name: 'cv',
    icon: 'fa-user',
    to: '/en/cv',
  },
]
</script>

<style scope lang="scss">
.nav {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(208, 208, 208, 0.3);
  border-radius: 10px;
  margin-top: 2rem;

  &-icon {
    width: 70px;
    padding: 0.7rem 1rem 0 1.5rem;
    transition: all 0.3s;

    &:hover {
      // filter: hue-rotate(150deg);
      filter: contrast(150%);
    }
  }

  &-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 0.5rem;

    &-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45px;
      height: 45px;
      margin: 0 0.5rem;
      border: 2px solid #ffffff;
      border-radius: 10px;
      transition: all 0.2s;

      &:active {
        border: 2px solid #646cff;
        transform: translateY(2px);
      }
    }
  }
}

.lang-icon {
  transition: color 0.3s;
  color: #213547;

  &:hover {
    color: #646cff;
    cursor: pointer;
  }
}
</style>
