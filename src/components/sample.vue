<template>
  <h3>{{ state.messageOne }}</h3>
  <h3>{{ messageTwo }}</h3>
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
