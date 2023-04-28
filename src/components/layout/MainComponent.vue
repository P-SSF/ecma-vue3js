<script setup>
import ContentComponent from '../ContentComponent.vue'
import ecmaInfo from '../../assets/ecmaInfo'

// 이거는 이제 추후 넘어가는 페이지에 탭에 상태에 따라 바꿀 예정
const jsDate = 'js2023'
</script>

<template>
  <div id="main">
    <ContentComponent
      v-for="(item, idx) in ecmaInfo[jsDate]"
      :key="jsDate + idx"
      :title="item.title"
      :content="item.content"
    />
  </div>
</template>
