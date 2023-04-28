<script setup>
import { ref } from 'vue'

const activeItem = ref('')
const ecmaArray = ['ECMA 2023', 'ECMA 2022', 'ECMA 2021', 'ECMA 2020']

const clickHanlder = (item) => {
  activeItem.value = item
}
</script>
<template>
  <div id="menu">
    <div class="pure-menu">
      <a class="pure-menu-heading" href="#company">Home</a>
      <ul class="pure-menu-list">
        <li
          class="pure-menu-item"
          :class="{ 'pure-menu-selected': activeItem === item }"
          @click="clickHanlder(item)"
          v-for="(item, index) in ecmaArray"
          :key="item + index"
        >
          <a href="#home" class="pure-menu-link">{{ item }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
