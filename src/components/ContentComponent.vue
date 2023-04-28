<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  content: String
})
</script>
<template>
  <div class="content">
    <h2 class="content-subhead">{{ props.title }}</h2>
    <p>
      {{ props.content }}
    </p>
  </div>
</template>
