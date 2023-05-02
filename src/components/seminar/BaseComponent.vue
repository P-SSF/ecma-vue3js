<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
const refContents = ref('아직 마운트 안됨.')
const obj = reactive({ message: 'Hello World' })
const loading = ref(true)
const getLoadingText = computed(() => {
  return loading.value ? '로딩 중' : '로딩 완료'
})

const onClick = () => {
  obj.message = 'Hi World'
}

// sleep 기능
const sleep = (ms = 1000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

onMounted(async () => {
  await sleep()
  refContents.value = '마운트 됨.'
  loading.value = false
})
</script>
<template>
  <div>
    {{ getLoadingText }}
  </div>
  <main>
    <div>
      {{ refContents }}
    </div>
    <div>
      <button type="button" @click="onClick">변경</button>
      {{ obj.message }}
    </div>
  </main>
</template>
