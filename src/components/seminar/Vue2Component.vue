<template>
  <div @click="log">{{ msg }}</div>
  {{ data }}
</template>

<script>
export default {
  props: {
    name: String
  },

  data() {
    return {
      msg: 'Hello Setup1!'
    }
  },
  mounted() {
    this.log()
  },
  // 함수 선언
  methods: {
    log() {
      console.log(this.msg)
    }
  }
}
</script>
