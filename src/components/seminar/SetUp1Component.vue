<template>
  <div @click="log">{{ msg }}</div>
  {{ data }}
</template>

<script>
import { onMounted } from 'vue'
import customOptions from './CustomHooks'

export default {
  props: {
    name: String
  },
  setup(props) {
    // 변수 선언
    const msg = 'Hello Setup1!'

    const data = customOptions()

    // 함수 선언
    function log() {
      console.log(msg)
    }

    onMounted(() => console.log(props.name, 'component mounted'))

    // template에 전달한다.
    return {
      msg,
      log,
      data
    }
  }
}
</script>
