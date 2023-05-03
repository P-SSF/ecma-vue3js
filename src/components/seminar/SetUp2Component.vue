<script setup>
import { onMounted } from 'vue'
import customOptions from './CustomHooks'

const props = defineProps({
  name: String
})
// 변수 선언
const msg = 'Hello Setup2!'

// 훅 가져오기
const data = customOptions()

// 함수 선언
function log() {
  console.log(msg)
}

onMounted(() => console.log(props.name, 'component mounted'))
</script>

<template>
  <!-- 템플릿 안에서 바로 사용 가능 -->
  <div @click="log">{{ msg }}</div>
  {{ data }}
</template>
