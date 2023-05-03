<script setup>
import { onMounted } from 'vue'
import Editor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css' // Editor's Style

const props = defineProps({
  title: String,
  content: String,
  code: String
})

let editor
onMounted(() => {
  editor = new Editor({
    el: document.querySelector('#editor'),
    height: '500px',
    initialEditType: 'markdown',
    previewStyle: 'vertical',
    initialValue: props.content + props.code
  })
  editor.getMarkdown()
})
</script>

<template>
  <div class="content">
    <h2 class="content-subhead">{{ props.title }}</h2>
    <div id="editor"></div>
  </div>
</template>
