<script setup>
import HeaderComponent from './HeaderComponent.vue'
import SideBarComponent from '../SideBarComponent.vue'
import MainComponent from './MainComponent.vue'
</script>

<template>
  <div id="layout">
    <!-- Menu toggle -->
    <a href="#menu" id="menuLink" class="menu-link">
      <!-- Hamburger icon -->
      <span></span>
    </a>

    <SideBarComponent />
    <HeaderComponent />
    <MainComponent />
  </div>
</template>
