<script setup>
import { defineProps, onMounted } from 'vue'
import Editor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css' // Editor's Style

const props = defineProps({
  title: String,
  content: String
})

let editor

onMounted(() => {
  editor = new Editor({
    el: document.querySelector('#editor'),
    height: '500px',
    initialEditType: 'markdown',
    previewStyle: 'vertical'
  })
  editor.getMarkdown()
})
</script>

<template>
  <div class="content">
    <h2 class="content-subhead">{{ props.title }}</h2>
    <p>
      {{ props.content }}
    </p>
    <div id="editor"></div>
  </div>
</template>
