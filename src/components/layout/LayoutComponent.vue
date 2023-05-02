<script setup>
import HeaderComponent from './HeaderComponent.vue'
import SideBarComponent from '../SideBarComponent.vue'
import MainComponent from './MainComponent.vue'
import SetUp1Component from '../seminar/SetUp1Component.vue'
import SetUp2Component from '../seminar/SetUp2Component.vue'
import { computed } from 'vue'

const prod = computed(() => import.meta.env.PROD)
</script>

<template>
  <div id="layout">
    <a href="#menu" id="menuLink" class="menu-link">
      <span></span>
    </a>

    <SideBarComponent />
    <HeaderComponent />
    <MainComponent />
    <div v-if="!prod">
      <SetUp1Component name="ecma" />
      <SetUp2Component name="ecma" />
    </div>
  </div>
</template>
