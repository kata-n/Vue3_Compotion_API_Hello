<template>
  <button @click="increment">
    現在のカウント数 {{ state.count }}、2倍したカウント数 {{ state.double }}
  </button>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  setup () {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    function increment () {
      state.count++
    }

    return {
      state,
      increment
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
