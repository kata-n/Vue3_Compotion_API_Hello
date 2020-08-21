<template>
  <button @click="increment">
    現在のカウント数 {{ state.count }}、2倍したカウント数 {{ state.double }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const state = reactive<{ messageOne: string }>({
      messageOne: 'Hello'
    });
    const messageTwo = ref<string>("こんにちは");

    return {
      state,
      messageTwo
    };
  }
});
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
