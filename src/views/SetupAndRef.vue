<template>
  <div>
    <h1>setup 和 ref</h1>

    <h2>{{ count }}</h2>

    <br />
    <button @click="plusOne">加一</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  name: "SetupAndRef",
  setup() {
    const count = ref(1);

    function plusOne() {
      count.value++;
    }

    return {
      count,
      plusOne,
    }
  }
})
</script>
