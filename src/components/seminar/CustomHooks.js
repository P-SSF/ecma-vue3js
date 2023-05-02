import { ref, onMounted } from 'vue'

export default function customOptions() {
  const options = ref([])

  onMounted(async () => {
    options.value = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) =>
      response.json()
    )
  })

  return {
    options
  }
}
